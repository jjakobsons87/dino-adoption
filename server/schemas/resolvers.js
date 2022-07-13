const { User, Accessory, Dino: Dino } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('cart')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
                // get all users 
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('savedDinos')
            .populate('cart')
        },

        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('savedDinos')
            .populate('cart')
        },

        // get all dinos 
        dinos: async () => {
            return Dino.find()
            .populate('comments')
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

        // add accessory to cart 
        addToCart: async ( parent, { accId }, context) => {
            if (context.user) {
                const updatedCart = await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $addToSet: { cart: accId } },
                    { new: true }
                ).populate('cart');
            
                return updatedCart;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        // fav a dino 
        addToFavorites: async (parent, { dinoId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $addToSet: { savedDinos: dinoId } },
                    { new: true }
                ).populate('savedDinos');
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        }, 
        // remove from cart
        // removeFromCart: async ( parent, { accId }, context) => {
        //     if (context.user) {
        //         const updatedCart = await User.findOne
        //     }
        // }
    }
};

module.exports = resolvers;