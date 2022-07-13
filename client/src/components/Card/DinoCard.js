import React, {useState} from "react";
// import DinoList from "../DinoList";
import SelectedDino from "../SelectedDino";
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
// import { Link } from 'react-router-dom';
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
    const [dinos] = useState([
        {
            name: "Tyrannasaurus Rex",
            source: TRexImage,
        },
        {
            name: "Spinosaurus",
            source: SpinoImage,
        },
        {
            name: "Utahraptor",
            source: RaptorImage,
        },
        {
            name: "Dilophosaurus",
            source: DilophImage,
        },
        {
            name: "Allosaurus",
            source: AlloImage,
        },
        {
            name: "Ankylosaurus",
            source: AnkylImage,
        },
        {
            name: "Brachiosaurus",
            source: BrontoImage,
        },
        {
            name: "Parasaurilophus",
            source: ParaImage,
        },
        {
            name: "Stegasaurus",
            source: StegaImage,
        },
        {
            name: "Triceratops",
            source: TriImage,
        },
        {
            name: "Pterandon",
            source: PteroImage,
        },
        {
            name: "Pachycepalosaurus",
            source: PachyImage,
        },
    ]);
    if(!dinos.length) {
        return <h3>No Dinos Available</h3>
    }
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        {dinos &&
            dinos.map((dino,key) => (
           <SelectedDino
           key={key}
           dino={dino} />
        ))}
        </div>
    );
}