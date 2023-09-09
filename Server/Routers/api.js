const express = require('express');
const router = express.Router();
const { productCreate } = require('../Controllers/productCreate');
const { productSales } = require('../Controllers/sales');



router.post('/product-create',productCreate);
router.get('/sales/total-revenue',productSales)


module.exports = router;