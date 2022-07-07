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
        commentBody: String
        username: String
        createdAt: String
    }

    type Dino {
        _id: ID
        bio: String
        species: String
        diet: String
        gender: String
        aggressiveness: Int
        humanCasualties: Int
        fenceRequirement: Int
        name: String
        savedCount: Int
        age: Int
        inventory: Int
        addedAt: String
        comments: [Comment]
    }

    type Accessory {
        _id: ID
        name: String
        category: String
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