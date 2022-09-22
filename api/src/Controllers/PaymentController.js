require('dotenv').config();
const Stripe = require('stripe');
const { STRIPE_SECRET_KEY } = process.env;
const { Users, Payments } = require('../db');
const stripe = new Stripe(STRIPE_SECRET_KEY);

const createPayment = async (req, res, next) => {
  try {
    const { stripeId, amount, userId } = req.body;
    const user = await Users.findByPk(userId);
    if (
      user.debt <= 4000 &&
      user.debt > 0 &&
      user.fees >= 1 &&
      user.fees <= 24
    ) {
      let paymentAmount = amount * 100;
      const newPayment = await stripe.paymentIntents.create({
        amount: paymentAmount,
        currency: 'USD',
        description: `Pago de la cuota ${user.fees} de 24`,
        payment_method: stripeId,
        confirm: true,
      });
      const payment = await Payments.create({
        stripeId,
        amount,
        description: newPayment.description,
      });
      await user
        .set({
          fees: user.fees + 1,
          debt: user.debt - amount,
        })
        .save();
      await payment
        .set({
          fee: user.fees - 1,
        })
        .save();
      await payment.setUser(user);
      res.send('¡Pago realizado exitosamente!');
    } else {
      res.send('¡Ya has pagado todas tus cuotas!');
    }
  } catch (error) {
    res.send(error.raw.message);
    next(error);
  }
};

const getPaymentsByUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const paymentsByUser = await Payments.findAll({
      where: {
        userId,
      },
    });
    res.json(paymentsByUser);
  } catch (error) {
    next(error);
  }
};

const getPaymentDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paymentById = await Payments.findByPk(id);
    res.json(paymentById);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPayment,
  getPaymentsByUser,
  getPaymentDetails,
};
