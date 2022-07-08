import React from "react";

import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CCardLink,
    CListGroup,
    CListGroupItem,
} from "@coreui/react";


export default function Card() {

    const {name, species, description, index} = currentPhoto;
    const n = dinosaur.length;

    return ([...Array(n)].map((images, index) => (
        <CCard style={{ width: "18rem" }}>
            <CCardImage orientation="top" src={images} />
            <CCardBody>
                <CCardTitle>{name}</CCardTitle>
                <CCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </CCardText>
            </CCardBody>
            {/* <CListGroup flush>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
            </CListGroup> */}
            <CCardBody>
                <CCardLink href="#">View Dino</CCardLink>
            </CCardBody>
        </CCard>
    )));
}
