const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

const OrdersController  = require('../controllers/orders');

router.get('/', checkAuth, OrdersController.getAllOrders);

router.post('/', checkAuth, OrdersController.setNewOrder);

router.get('/:orderId', checkAuth, OrdersController.getOrderById);

router.delete('/:orderId', checkAuth, OrdersController.deleteOrderById);

module.exports = router;