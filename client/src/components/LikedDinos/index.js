import React, {useState} from "react";
import SelectedDino from "../SelectedDino";

import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton
} from "@coreui/react";

export default function LikedDinos(props) {

    const [currentDino, setCurrentDino] = useState();

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        {props.likedDinos &&
        props.likedDinos.map(dino => (
            <CCard style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={dino.imageURL} />
                <CCardBody>
                    <CCardTitle>{dino.species}</CCardTitle>
                    <CCardText>
                        Will you be my mommy?
                    </CCardText>
                </CCardBody>
                <CCardBody>
                    <CButton onClick={() => setCurrentDino(dino)}>View Dino</CButton>
                    {currentDino === dino && 
                    <SelectedDino selectedDino={currentDino} likedDinos={props.likedDinos} setLikedDinos={props.setLikedDinos}/>
                    }   
                </CCardBody>
            </CCard>
        ))}
        </div>
    );
}