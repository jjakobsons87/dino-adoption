// import React, { useState } from 'react';
// import { useQuery, useLazyQuery } from "@apollo/client"
// import { QUERY_DINOS, QUERY_DINO } from "../../../src/utils/queries";

const SelectedDino = (props) => {

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