const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const dinoSchema = new Schema(
  {
    aboutBody: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    savedCount: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    },
    addedAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    comment: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Dino = model('Dino', dinoSchema);

module.exports = Dino;