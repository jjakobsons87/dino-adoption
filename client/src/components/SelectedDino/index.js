import React, { useState } from 'react';

const SelectedDino = (props) => {

    const { dino, onAdd } = props;

    const [isCardOpen, setIsCardOpen] = useState(false);

    const toggleCard = (image, i) => {
        setIsCardOpen(!isCardOpen);
    }

    return (

        <div>
            <div onClick={toggleCard} id="singledino" ClassName = "selected-container">
                Howdy, dino data here
            </div>

            {/* button to add the dino to the cart/basket */}
            <div>
                <button onClick={()=> onAdd(dino)} >Add to Cart</button>
            </div>
        </div>


    )
};
                

export default SelectedDino;