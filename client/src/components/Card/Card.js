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
import TRexImage from "../../assets/images/trex.jpg";
import SpinoImage from "../../assets/images/spinosaurus.png";
import RaptorImage from "../../assets/images/raptor.jpg";
import DilophImage from "../../assets/images/dilophosaurus.png";
import AlloImage from "../../assets/images/allosaurus.jpg";
import AnkylImage from "../../assets/images/ankylosaurus.jpg";
import BrontoImage from "../../assets/images/brontosaurus.jpg";
import ParaImage from "../../assets/images/parasaurilophus.jpg";
import StegaImage from "../../assets/images/stegasaurus.jpg";
import TriImage from "../../assets/images/Triceratops.jpg";
import PteroImage from "../../assets/images/pterandon.jpg";
import PachyImage from "../../assets/images/pachy.jpg";

export default function Card() {
    const images = [
        TRexImage,
        SpinoImage,
        RaptorImage,
        DilophImage,
        AlloImage,
        AnkylImage,
        BrontoImage,
        ParaImage,
        StegaImage,
        TriImage,
        PteroImage,
        PachyImage,
    ];
    const dinosaur = [
        "Tyrannasaurus Rex",
        "Spinosaurus",
        "Utahraptor",
        "Dilophosaurus",
        "Allosaurus",
        "Ankylosaurus",
        "Brachiosaurus",
        "Parasaurilophus",
        "Stegasaurus",
        "Triceratops",
        "Pterandon",
        "Pachycepalosaurus",
    ];
    const n = dinosaur.length;

    return ([...Array(n)].map((images, index) => (
        <CCard style={{ width: "18rem" }}>
            <CCardImage orientation="top" src={images} />
            <CCardBody>
                <CCardTitle>{dinosaur}</CCardTitle>
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
