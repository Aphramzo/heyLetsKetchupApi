const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = {
  firstName: { type: String },
  lastName: { type: String },
};

const userSchema = new Schema(userModel);

module.exports = {
  UserSchema: mongoose.model('User', userSchema),
  UserModel: userModel,
};
