const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const dinoSchema = new Schema(
  {
    bio: {
      type: String,
      required: true
    },
    species: {
        type: String,
        required: true
    },
    diet: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    aggressiveness:  {
        type: Number,
        required: true
    },
    humanCasualties: {
        type: Number
    },
    fenceRequirement: {
        type: Number
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
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Dino = model('Dino', dinoSchema);

module.exports = Dino;