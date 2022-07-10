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
