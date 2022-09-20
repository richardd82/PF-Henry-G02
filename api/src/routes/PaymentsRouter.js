const { Router } = require('express');
const {
  createPayment,
  getPaymentsByUser,
  getPaymentDetails,
} = require('../controllers/PaymentController.js');
const router = Router();

router.post('/', createPayment);
router.get('/:id', getPaymentDetails);
router.get('/payments/:userId', getPaymentsByUser);

module.exports = router;
