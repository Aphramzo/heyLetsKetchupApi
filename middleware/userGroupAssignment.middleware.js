const { UserGroupAssignmentSchema } = require('../models/userGroupAssignment.model');

const userGroupAssignmentMiddleware = (req, res, next) => {
  UserGroupAssignmentSchema.findById(req.params.id, (err, userGroupAssignment) => {
    if (err) {
      return res.status(400).send(err);
    }

    if (userGroupAssignment) {
      req.userGroupAssignmnet = userGroupAssignment;
      return next();
    }
    return res.sendStatus(404);
  });
};

module.exports = userGroupAssignmentMiddleware;
