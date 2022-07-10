import React, {useState} from "react";
import SelectedDino from "../SelectedDino";
import { useQuery } from "@apollo/client"
import { QUERY_DINOS, QUERY_DINO } from "../../../src/utils/queries";

import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton
} from "@coreui/react";


export default function DinoCard() {

    const [currentDino, setCurrentDino] = useState();

    const { loading, error, data } = useQuery(QUERY_DINOS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
        {data.dinos.map(dino => (
            <CCard style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={dino.imageURL} />
                <CCardBody>
                    <CCardTitle>{dino.species}</CCardTitle>
                    <CCardText>
                        Will you be my mommy?
                    </CCardText>
                </CCardBody>
                <CCardBody>
                    <CButton onClick={() => setCurrentDino(dino._id)}>View Dino</CButton>
                    {currentDino === dino._id && 
                    <SelectedDino/>
                    }   
                </CCardBody>
            </CCard>
        ))}
        </div>
    );
}
