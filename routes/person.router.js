const express = require('express');
const personController = require('../controllers/person.controller');
const personMiddleware = require('../middleware/person.middleware');

const createRoute = (Person) => {
  const personRouter = express.Router();
  const controller = personController(Person);
  const middleware = personMiddleware(Person);
  personRouter.use('/people/:id', middleware);
  personRouter
    .route('/people')
    .get(controller.getList)
    .post(controller.create);

  personRouter
    .route('/people/:id')
    .get(controller.get)
    .patch(controller.update)
    .delete(controller.remove);
  return personRouter;
};

module.exports = createRoute;
