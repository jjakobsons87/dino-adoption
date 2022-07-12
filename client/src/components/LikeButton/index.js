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
            // if liked, fill
            setLiked();
            addLike({
                variables: { dinoId }
            });
            <Button color ="teal">
                <Icon name="heart" />
            </Button>
        } else {
            // if not liked, empty
            <Button color = "teal" basic>
                <Icon name="heart" />
            </Button>
        }

        // if (!user?.username) {
        //     return (
        //     // if no user show unfilled & back to route back to login
        //     <Button as={Link} to="/login" color="teal" basic>
        //         <Icon name="heart" />
        //     </Button>
        //     );
        //   }
    };

    return(
        <div>
            <Button onClick={handleChange} value={liked}>
            </Button>
            {error && <div>Something went wrong...</div>}
        </div>
    )
}

export default LikeButton;