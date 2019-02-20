const express = require('express');
const controller = require('../controllers/userGroupAssignment.controller');
const middleware = require('../middleware/userGroupAssignment.middleware');

const userGroupAssignmentRouter = express.Router();
userGroupAssignmentRouter.use('/assignments/:id', middleware);
userGroupAssignmentRouter
  .route('/assignments')
  .get(controller.getList)
  .post(controller.create);

userGroupAssignmentRouter
  .route('/assignments/:id')
  .get(controller.get)
  .delete(controller.remove);

module.exports = userGroupAssignmentRouter;
