import React, {useState} from "react";

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
                <CCardImage orientation="top" src={dino.imageURL}/>
                <CCardBody>
                    <CCardTitle >Species: {dino.species}</CCardTitle>
                </CCardBody>
                <CCardBody>
                    <CCardTitle>Name: {dino.name}</CCardTitle>
                </CCardBody>
                <CCardBody>
                    <CCardTitle>Age: {dino.age}</CCardTitle>
                </CCardBody>
            </CCard>
        ))}
        </div>
    );
}