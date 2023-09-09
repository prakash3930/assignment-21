const express = require('express');
const router = express.Router();
const { productCreate } = require('../Controllers/productCreate');
const { productSalesRevenue, totalQuantitySold, topProducts, averagePrice, revenueByMonthYear, highestQuantitySold } = require('../Controllers/sales');



router.post('/product-create',productCreate);

router.get('/sales/total-revenue',productSalesRevenue)
router.get('/sales/quantity-by-product',totalQuantitySold)
router.get('/sales/top-products',topProducts)
router.get('/sales/average-price',averagePrice)
router.get('/sales/revenue-by-month',revenueByMonthYear)
router.get('/sales/highest-quantity-sold',highestQuantitySold)


module.exports = router;