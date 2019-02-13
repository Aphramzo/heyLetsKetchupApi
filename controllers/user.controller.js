const userController = (User) => {
  const getList = (req, res) => {
    User.find(req.query, (err, users) => {
      if (err) {
        res.status(400);
        return res.send(err);
      }
      return res.json(users);
    });
  };

  const get = (req, res) => res.json(req.user);

  const create = (req, res) => {
    const user = new User(req.body);
    if (!user.firstName) {
      res.status(400);
      return res.send('User must have a first name');
    }
    user.save();
    res.status(201);
    return res.json(user);
  };

  const update = (req, res) => {
    // eslint-disable-next-line
    if (req.body._id) {
      // eslint-disable-next-line
      delete req.body._id;
    }
    const user = Object.assign(req.user, req.body);
    user.save((err) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.send(user);
    });
  };

  const remove = (req, res) => {
    req.user.remove((err) => {
      if (err) {
        return res.status(400).send(err);
      }

      return res.sendStatus(204);
    });
  };

  return {
    create,
    get,
    getList,
    remove,
    update,
  };
};

module.exports = userController;
