const mercadopago = require('mercadopago');
const { ACCESS_TOKEN } = process.env;
mercadopago.configurations.setAccessToken(ACCESS_TOKEN);

const generatePayment = async (req, res, next) => {
  console.log(req.body)
  mercadopago.payment
    .save(req.body)
    .then(function (response) {
      const { status, status_detail, id } = response.body;
      res.status(response.status).json({ status, status_detail, id });
    })
    .catch(function (error) {
      next(error);
    });
};

module.exports = {
  generatePayment,
};
