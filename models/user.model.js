const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  mobilePhone: { type: String },
  password: { type: String, required: true },
};

const userSchema = new Schema(userModel);

module.exports = {
  UserSchema: mongoose.model('User', userSchema),
  UserModel: userModel,
};
