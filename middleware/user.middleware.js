const userMiddleware = User => (req, res, next) => {
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
};

module.exports = userMiddleware;
