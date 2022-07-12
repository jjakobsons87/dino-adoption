import React, { useContext, useState, useMutation } from 'react';
import Auth from '../../utils/auth';
// import { useQuery, useLazyQuery } from "@apollo/client"
// import { QUERY_DINOS, QUERY_DINO } from "../../../src/utils/queries";
import { ADD_FAVORITE } from "../../utils/mutations";

//import components
import LikeButton from '../LikeButton';

const SelectedDino = (props) => {

    // needed for likes
    // const { user } = useContext(Auth.loggedIn());
    // const { addFavorite } = useMutation(ADD_FAVORITE);
    // needed for cart
    const { dino, onAdd } = props;
    
// const SelectedDino = () => {

//     const [isCardOpen, setIsCardOpen] = useState(false);

//     const toggleCard = (image, i) => {
//         setIsCardOpen(!isCardOpen);
//     }

//     // const [getDino, { loading, error, data }] = useLazyQuery(QUERY_DINO);

//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;

    return (
        <div>
            {/* button to add the dino to the cart/basket */}
            <div>
                <button onClick={()=> onAdd(dino)} >Add to Cart</button>
            </div>
            <div>
                <LikeButton />
            </div>
        </div>
    )
};
//     return (

//         <div onClick={() => {toggleCard}}
//             ClassName = "selected-container">
//             Species: {data.dinos.species}
//             Name: {data.dinos.name}
//             Bio: {data.dinos.bio}
//             Diet: {data.dinos.diet}
//             Gender: {data.dinos.gender}
//             Age: {data.dinos.age}
//             Aggressiveness: {data.dinos.aggressiveness}
//             Human Casualties: {data.dinos.humanCasualties}
//             Fence Requirement: {data.dinos.fenceRequirement}
//             Inventory: {data.dinos.inventory}
//             # of Times Saved: {data.dinos.savedCount}

//         </div>
//     )
// };
                

export default SelectedDino;