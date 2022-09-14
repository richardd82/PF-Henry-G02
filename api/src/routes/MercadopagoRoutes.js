const { Router } = require('express');
const { generatePayment } = require('../controllers/MercadopagoController');
const router = Router();

router.post('/process_payment', generatePayment);

module.exports = router;
