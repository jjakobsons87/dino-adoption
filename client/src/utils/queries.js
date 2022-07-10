import { gql } from '@apollo/client';

export const QUERY_DINOS = gql`
    query dinos{
        dinos{
            _id
            name
            age
            bio
            species
            diet
            gender
            aggressiveness
            humanCasualties
            fenceRequirement
            inventory
            comments {
                _id
                commentBody
                username
            }
        }
    }
`;

export const QUERY_DINO = gql`
    query dino($id: ID!) {
        dino(_id: $id) {
            _id
            name
            age
            bio
            species
            diet
            gender
            aggressiveness
            humanCasualties
            fenceRequirement
            inventory
            comments {
                _id
                commentBody
                username
            }   
            addedAt
        }
    }
`;


export const QUERY_ACCESSORIES = gql`
    query accessories {
        accessories {
            _id
            name
            category
            price
            description
            inventory
        }
    }
`;

export const QUERY_ACCESSORY = gql`
    query accessory($id: ID!) {
        accessory(_id: $id) {
            _id
            name
            category
            price
            description
            inventory
        }
    }
`;