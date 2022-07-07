const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        dinoCount: Int
        myDinos: [Dino]
        favDino: [Dino]
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
        dinos: [Dino]
        dino(_id: ID!): Dino
        accessories: [Accessory]
        accessory(_id: ID!): [Accessory]
        comments(username: String): [Comment]
        comment(_id: ID!): Comment
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(dinoId: ID!, commentBody: String!): Dino
    }
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;