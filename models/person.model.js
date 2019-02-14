const mongoose = require('mongoose');

const { Schema } = mongoose;

const personModel = {
  firstName: { type: String },
  lastName: { type: String },
};

const personSchema = new Schema(personModel);

module.exports = {
  PersonSchema: mongoose.model('User', personSchema),
  PersonModel: personModel,
};
