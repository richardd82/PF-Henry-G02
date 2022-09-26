const { Router } = require('express');
const {
  createPayment,
  getPaymentsByUser,
  getPaymentDetails,
} = require('../Controllers/PaymentController');
const router = Router();

router.post('/', createPayment);
router.get('/:id', getPaymentDetails);
router.get('/payments/:userId', getPaymentsByUser);

module.exports = router;
