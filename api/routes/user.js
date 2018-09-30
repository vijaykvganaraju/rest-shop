const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

const UserController = require('../controllers/user');

// GET request only for testing
// router.get('/', checkAuth, UserController.getAllUsers);

router.post('/signup', UserController.userRegister);

router.post('/login', UserController.userLogin);

router.delete('/:userId', checkAuth, UserController.userDelete);

module.exports = router;