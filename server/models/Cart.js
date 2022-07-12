const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const accessorySchema = require('./Accessory');
const dinoSchema = require('./Dino');

const cartSchema = new Schema (
    {
        username: {
            type: String,
            required: true
        },
        accessories: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Accessory'
            }
        ],
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Cart = model('Cart', cartSchema);

module.exports = Cart;