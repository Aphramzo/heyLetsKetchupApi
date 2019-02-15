const mongoose = require('mongoose');

const { Schema } = mongoose;

const personModel = {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
};

const personSchema = new Schema(personModel);

module.exports = {
  PersonSchema: mongoose.model('Person', personSchema),
  PersonModel: personModel,
};
