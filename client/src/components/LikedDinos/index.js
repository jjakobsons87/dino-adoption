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
        props.likedDinos.map((i, dino) => (
            <CCard style={{ width: "18rem" }} key={i}>
                <CCardImage orientation="top" src={props.likedDinos.imageURL} key={i}/>
                <CCardBody key={i}>
                    <CCardTitle key={i}>{props.likedDinos.species}</CCardTitle>
                </CCardBody>
                <CCardBody key={i}>
                    <CCardTitle key={i}>{props.likedDinos.name}</CCardTitle>
                </CCardBody>
            </CCard>
        ))}
        </div>
    );
}