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
    },
    age: {
        type: Number,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    },
    price: {
      type: Number,
      required: true
    },
  
    addedAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    imageURL: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

dinoSchema.virtual("favCount").get(function () {
  return this.savedCount.length;
});

const Dino = model('Dino', dinoSchema);

module.exports = Dino;