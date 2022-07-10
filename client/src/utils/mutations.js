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
