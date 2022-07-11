import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment ($dinoId: ID!, $commentBody: String!) {
        addComment(dinoId: $dinoId, commentBody: $commentBody) {
            _id
            name
            species
            comments {
                _id
                commentBody
                username
                createdAt
            }
        }
    }
`;

export const ADD_DINO = gql`
    mutation AddDino($bio: String!, $species: String!, $diet: String!, $gender: String!, $aggressiveness: Int!, $humanCasualties: Int!, $fenceRequirement: Int!, $name: String!, $savedCount: Int!, $age: Int!, $inventory: Int!) {
        addDino(bio: $bio, species: $species, diet: $diet, gender: $gender, aggressiveness: $aggressiveness, humanCasualties: $humanCasualties, fenceRequirement: $fenceRequirement, name: $name, savedCount: $savedCount, age: $age, inventory: $inventory) {
            _id
            bio
            species
            diet
            gender
            aggressiveness
            humanCasualties
            fenceRequirement
            name
            savedCount
            age
            inventory
        }
    }
`;

export const ADD_ACCESSORY = gql`
    mutation AddAccessory($name: String!, $category: String!, $price: Int!, $description: String!, $inventory: Int!) {
        addAccessory(name: $name, category: $category, price: $price, description: $description, inventory: $inventory) {
            _id
            name
            category
            price
            description
            inventory
        }
    }
`;
