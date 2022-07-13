import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ADD_FAVORITE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { Button, Icon } from 'semantic-ui-react'

const LikeButton = ({ dinoId, user, likedDinos, setLikedDinos }) => {
    const [liked, setLiked] = useState(false);
    const [addLike, { error }] = useMutation(ADD_FAVORITE);

    console.log(likedDinos)

    const handleButtonSubmit = async (event) => {
        event.preventDefault();

        if (likedDinos && likedDinos.length !== 0) {
            let favorites = [...likedDinos]
            favorites.push(dinoId)
            setLikedDinos(favorites)
        } else {
            setLikedDinos([dinoId])
        }

        if (!user?.username) {
            return (
            // if no user show unfilled & back to route back to login
            <Button as={Link} to="/login" color="teal" basic>
                <Icon name="heart" />
            </Button>
            );
        }

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
            <button onClick={handleButtonSubmit} value={liked}>
                Favorite
            </button>
            {error && <div>Something went wrong...</div>}
        </div>
    )
}

export default LikeButton;