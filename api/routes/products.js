const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

const ProductsController = require('../controllers/products');

router.get('/', ProductsController.getAllProducts);

router.post('/', checkAuth, ProductsController.setNewProduct);

router.get('/:productId', ProductsController.getProductById);

router.patch('/:productId', checkAuth, ProductsController.editProductById);

router.delete('/:productId', checkAuth, ProductsController.deleteProductById);

module.exports = router;