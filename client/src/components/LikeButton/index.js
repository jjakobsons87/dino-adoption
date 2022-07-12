import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { LIKE_DINO_MUTATION } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { Button, Label, Icon } from 'semantic-ui-react'

const LikeButton = ({ user, dino: { id, likeCount, likes}}) => {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if(user && likes.find(like => like.username === user.username)){
            setLiked(true)
        } else setLiked(false)
    }, [user, likes]);

    const [likeDino] = useMutation(LIKE_DINO_MUTATION, {
        variables: { dinoId: id}
    });

    const likeButton = user ? (
        liked ? (
            // if liked, filled
            <Button color="teal">
                <Icon name="heart" />
            </Button>
        ) : (
            // if not liked, unfilled
            <Button color="teal" basic>
                <Icon name="heart" />
            </Button>
        )
    ) : (
        // if no user show unfilled & back to route back to login
        <Button as={Link} to="/login" color="teal" basic>
            <Icon name="heart" />
        </Button>
    )

    return(
        <Button as="div" onClick={likeDino}>
            {likeButton}
            <Label>
                {likeCount}
            </Label>
        </Button>
    )
}

export default LikeButton;