const mongoose = require('mongoose');

const { Schema } = mongoose;

const userGroupAssignmentModel = {
  name: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  group: { type: Schema.Types.ObjectId, ref: 'Group' },
};

const userGroupAssignmentSchema = new Schema(userGroupAssignmentModel);

module.exports = {
  UserSchema: mongoose.model('UserGroupAssignment', userGroupAssignmentSchema),
  UserModel: userGroupAssignmentModel,
};
