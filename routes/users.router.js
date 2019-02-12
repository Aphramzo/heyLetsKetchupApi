const express = require('express');

const createRoute = (User) => {
  const userRouter = express.Router();

  userRouter.use('/users/:id', (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.status(400).send(err);
      }

      if (user) {
        req.user = user;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  userRouter
    .route('/users')
    .get((req, res) => {
      User.find(req.query, (err, users) => {
        if (err) {
          return res.status(400).send(err);
        }
        return res.json(users);
      });
    })
    .post((req, res) => {
      const user = new User(req.body);
      user.save();
      return res.status(201).json(user);
    });

  userRouter
    .route('/users/:id')
    .get((req, res) => res.json(req.user))
    .delete((req, res) => {
      req.user.remove((err) => {
        if (err) {
          return res.status(400).send(err);
        }

        return res.sendStatus(204);
      });
    });
  return userRouter;
};

module.exports = createRoute;
