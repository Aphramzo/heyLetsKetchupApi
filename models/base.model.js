const mongoose = require('mongoose');

const { Schema } = mongoose;

const baseModel = {
  createdDateTime: { type: Schema.Types.Date },
  modifiedDateTime: { type: Schema.Types.Date },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
};

const baseModelSchema = new Schema(baseModel);

module.exports = {
  BaseModelSchema: mongoose.model('Base', baseModelSchema),
  BaseModel: baseModel,
};
