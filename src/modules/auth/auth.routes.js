const express = require('express');

const router = express.Router();

const authController = require('./auth.controller');

console.log('Auth Routes Loaded');
router.post('/register', authController.register);
router.get('/login', authController.login);

module.exports = router;