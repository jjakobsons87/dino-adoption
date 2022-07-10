const { User, Accessory, Dino: Dino } = require('../models');
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
                // get all users 
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('comments')
        },

        // get all dinos 
        dinos: async () => {
            return Dino.find()
        },

        // get dino by id
        dino: async (parent, { _id }) => {
            return Dino.findOne({ _id })
            .populate('comments')
        },

        // get all accessories 
        accessories: async () => {
            return Accessory.find()
        },

        // get accessory by id 
        accessory: async (parent, { _id }) => {
            return Accessory.findOne({ _id })
        }
    },

    Mutation: { 
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },

        addComment: async (parent, { dinoId, commentBody }, context) => {
            if (context.user) {
                const updatedDino = await Dino.findOneAndUpdate(
                    { _id: dinoId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedDino;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addAccessory: async ( parent, args) => {
            const accessory = await Accessory.create(args);
            return accessory;
        },
        
        addDino: async (parent, args) => {
            const dino = await Dino.create(args);
            return dino;
        },

        // updateDino: async (parent, { dinoId, args }, context) => {
        //     if (context.user) {
        //         const updatedDino = await Dino.findOneAndUpdate(
        //             { _id: dinoId },
        //             { $push: { }}
        //         )
        //     }
        // }, 

        // add dino to cart 
        addToCart: async ( parent, { cartId }, context) => {
            if (context.user) {
                const updatedCart = await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $addToSet: { cart: cartId } },
                    { new: true }
                ).populate('cart');
            
                return updatedCart;
            }
            throw new AuthenticationError("You need to be logged in!");
        }
    }
};

module.exports = resolvers;