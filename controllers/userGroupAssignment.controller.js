const { UserGroupAssignmentSchema } = require('../models/userGroupAssignment.model');

exports.getList = (req, res) => {
  UserGroupAssignmentSchema.find(req.query, (err, userGroupAssignments) => {
    if (err) {
      res.status(400);
      return res.send(err);
    }

    return res.json(userGroupAssignments);
  });
};

exports.get = (req, res) => res.json(req.userGroupAssignment);

exports.create = (req, res) => {
  const newUserGroupAssignment = new UserGroupAssignmentSchema(req.body);
  newUserGroupAssignment.save((err) => {
    if (err) {
      res.status(400);
      return res.send(err);
    }
    res.status(201);
    return res.json(newUserGroupAssignment);
  });
};

exports.remove = (req, res) => {
  req.userGroupAssignment.remove((err) => {
    if (err) {
      res.status(400);
      return res.send(err);
    }

    return res.status(204);
  });
};
