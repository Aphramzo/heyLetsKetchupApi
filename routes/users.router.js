const express = require('express');
const userController = require('../controllers/user.controller');
const userMiddleware = require('../middleware/user.middleware');

const createRoute = (User) => {
  const userRouter = express.Router();
  const controller = userController(User);
  const middleware = userMiddleware(User);
  userRouter.use('/users/:id', middleware);
  userRouter
    .route('/users')
    .get(controller.getList)
    .post(controller.create);

  userRouter
    .route('/users/:id')
    .get(controller.get)
    .patch(controller.update)
    .delete(controller.remove);
  return userRouter;
};

module.exports = createRoute;
