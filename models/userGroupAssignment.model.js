const mongoose = require('mongoose');

const { Schema } = mongoose;

const userGroupAssignmentModel = {
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  group: { type: Schema.Types.ObjectId, ref: 'Group' },
  admin: { type: Schema.Types.Boolean, default: false },
};

const userGroupAssignmentSchema = new Schema(userGroupAssignmentModel);

module.exports = {
  UserSchema: mongoose.model('UserGroupAssignment', userGroupAssignmentSchema),
  UserModel: userGroupAssignmentModel,
};
