const { GroupSchema } = require('../models/group.model');

const groupMiddleware = (req, res, next) => {
  GroupSchema.findById(req.params.id, (err, group) => {
    if (err) {
      return res.status(400).send(err);
    }

    if (group) {
      req.group = group;
      return next();
    }
    return res.sendStatus(404);
  });
};

module.exports = groupMiddleware;
