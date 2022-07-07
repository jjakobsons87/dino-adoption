const { Schema, model } = require('mongoose');

const accessorySchema = new Schema(
  {
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;