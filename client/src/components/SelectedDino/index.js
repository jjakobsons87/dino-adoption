import React, { useState } from 'react';
import { useQuery } from "@apollo/client"
import { QUERY_DINOS, QUERY_DINO } from "../../../src/utils/queries";

const SelectedDino = () => {

    const [isCardOpen, setIsCardOpen] = useState(false);

    const toggleCard = (image, i) => {
        setIsCardOpen(!isCardOpen);
    }

    const { loading, error, data } = useQuery(QUERY_DINOS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (

        <div onClick={toggleCard} id="singledino" ClassName = "selected-container">

        </div>
    )
};
                

export default SelectedDino;