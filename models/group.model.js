const mongoose = require('mongoose');

const { Schema } = mongoose;

const groupModel = {
  name: { type: String, required: true },
};

const groupSchema = new Schema(groupModel);

module.exports = {
  GroupSchema: mongoose.model('Group', groupSchema),
  GroupModel: groupModel,
};
