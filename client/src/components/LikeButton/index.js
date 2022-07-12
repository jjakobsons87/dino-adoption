import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ADD_FAVORITE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { Button, Icon } from 'semantic-ui-react'

const LikeButton = ({ dinoId, user }) => {
    const [liked, setLiked] = useState(false);
    const [addLike, { error }] = useMutation(ADD_FAVORITE);

    const handleChange = (event) => {
        if (event) {
            setLiked();
            // if liked, fill
            <button>
                <Icon name="heart" />
            </button>
        } else {
            // if not liked, empty
            <button>
                <Icon name="heart" />
            </button>
        }

        if (!user?.username) {
            return (
            // if no user show unfilled & back to route back to login
            <Button as={Link} to="/login" color="teal" basic>
                <Icon name="heart" />
            </Button>
            );
          }
    };

    const handleButtonSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await addLike({
                variables: { dinoId }
            });
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <div>
            <button onClick={handleChange} value={liked} onSubmit={handleButtonSubmit}>
                Favorite
            </button>
            {error && <div>Something went wrong...</div>}
        </div>
    )
}

export default LikeButton;