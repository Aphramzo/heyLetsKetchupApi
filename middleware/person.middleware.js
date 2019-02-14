const personMiddleware = Person => (req, res, next) => {
  Person.findById(req.params.id, (err, person) => {
    if (err) {
      return res.status(400).send(err);
    }

    if (person) {
      req.person = person;
      return next();
    }
    return res.sendStatus(404);
  });
};

module.exports = personMiddleware;
