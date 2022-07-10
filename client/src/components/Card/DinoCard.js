import React from "react";
import { Link } from 'react-router-dom';

import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CCardLink
} from "@coreui/react";


export default function DinoCard({ dinos }) {
    if(!dinos.length) {
        return <h3>No Dinos Available</h3>
    }

    return (
        <div>
        {dinos &&
            dinos.map(dino => (
            <CCard style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={dino.source} />
                <CCardBody>
                    <CCardTitle>{dino.name}</CCardTitle>
                    <CCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card's content.
                    </CCardText>
                </CCardBody>
                <CCardBody>
                    <CCardLink href="#card">View Dino</CCardLink>
                </CCardBody>
            </CCard>
        ))}
        </div>
    );
}
