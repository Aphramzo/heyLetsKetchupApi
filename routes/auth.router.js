const express = require('express');
const bodyParser = require('body-parser');
const authController = require('../controllers/auth.controller');

const authRouter = express.Router();
authRouter.use(bodyParser.urlencoded({ extended: false }));
authRouter.use(bodyParser.json());

authRouter.get('/me', authController.me).post('/register', authController.register);

module.exports = authRouter;
