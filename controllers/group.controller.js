const { GroupSchema } = require('../models/group.model');

exports.getList = (req, res) => {
  GroupSchema.find(req.query, (err, groups) => {
    if (err) {
      res.status(400);
      return res.send(err);
    }

    return res.json(groups);
  });
};

exports.get = (req, res) => res.json(req.group);

exports.create = (req, res) => {
  const newGroup = new GroupSchema(req.body);
  newGroup.save((err) => {
    if (err) {
      res.status(400);
      return res.send(err);
    }
    res.status(201);
    return res.json(newGroup);
  });
};

exports.remove = (req, res) => {
  req.group.remove((err) => {
    if (err) {
      res.status(400);
      return res.send(err);
    }

    return res.status(204);
  });
};
