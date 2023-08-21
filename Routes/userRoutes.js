const express = require('express');
const router = express.Router();
const productControl = require('../Controller/productsController');

router.get('/products', productControl.AllProducts)

router.get('/oneProduct/:id', productControl.prodById)

router.post('/addProduct', productControl.addProduct)

router.put('/editproduct/:id', productControl.editProduct)

module.exports = router;

