const { User, Comment, Accessory, Dino } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('comments')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },

        // get all dinos 
        dinos: async () => {
            return Dino.find()
            .populate('bio')
            .populate('species')
            .populate('diet')
            .populate('gender')
            .populate('aggressiveness')
            .populate('humanCasualties')
            .populate('fenceRequirement')
            .populate('name')
            .populate('savedCount')
            .populate('age')
            .populate('inventory')
        }
    }
};

module.exports = resolvers;