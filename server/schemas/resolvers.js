const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        dinoCount: Int
        myDinos: [Dino]
        favDino: [FaveDino]
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
    }

    type Dino {
        _id: ID
        dinoName: String
        dinoType: String
        comments: [Comment]
        inventory: Int
    }

    type Accessory {
        _id: ID
        accName: String
        accCategory: String
        price: Int
        description: String
        inventory: Int
    }

    type Query { 
        me: User
        users: [User]
        user(username: String!): User
        comments(username: String): [Comment]
        comment(_id: ID!): Comment
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;