import React, { useState } from 'react';

const SelectedDino = () => {


    const [isCardOpen, setIsCardOpen] = useState(false);

    const toggleCard = (image, i) => {
        setIsCardOpen(!isCardOpen);
    }

    return (

        <div onClick={toggleCard} id="singledino" ClassName = "selected-container">
            Howdy, dino data here
        </div>
    )
};
                

export default SelectedDino;