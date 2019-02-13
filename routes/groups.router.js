const express = require('express');
const controller = require('../controllers/group.controller');
const middleware = require('../middleware/group.middleware');

const groupRouter = express.Router();
groupRouter.use('/groups/:id', middleware);
groupRouter
  .route('/groups')
  .get(controller.getList)
  .post(controller.create);

groupRouter
  .route('/groups/:id')
  .get(controller.get)
  .delete(controller.remove);

module.exports = groupRouter;
