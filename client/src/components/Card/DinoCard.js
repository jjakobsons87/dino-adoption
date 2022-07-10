import React, {useState} from "react";
import SelectedDino from "../SelectedDino";
import { useQuery } from "@apollo/client"
// import TRexImage from "../../assets/images/trex.jpg";
// import SpinoImage from "../../assets/images/spinosaurus.png";
// import RaptorImage from "../../assets/images/raptor.jpg";
// import DilophImage from "../../assets/images/dilophosaurus.png";
// import AlloImage from "../../assets/images/allosaurus.jpg";
// import AnkylImage from "../../assets/images/ankylosaurus.jpg";
// import BrontoImage from "../../assets/images/brontosaurus.jpg";
// import ParaImage from "../../assets/images/parasaurilophus.jpg";
// import StegaImage from "../../assets/images/stegasaurus.jpg";
// import TriImage from "../../assets/images/Triceratops.jpg";
// import PteroImage from "../../assets/images/pterandon.jpg";
// import PachyImage from "../../assets/images/pachy.jpg";
// import { Link } from 'react-router-dom';
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

    // const [dinos] = useState([
    //     {
    //         name: "Tyrannasaurus Rex",
    //         source: TRexImage,
    //     },
    //     {
    //         name: "Spinosaurus",
    //         source: SpinoImage,
    //     },
    //     {
    //         name: "Utahraptor",
    //         source: RaptorImage,
    //     },
    //     {
    //         name: "Dilophosaurus",
    //         source: DilophImage,
    //     },
    //     {
    //         name: "Allosaurus",
    //         source: AlloImage,
    //     },
    //     {
    //         name: "Ankylosaurus",
    //         source: AnkylImage,
    //     },
    //     {
    //         name: "Brachiosaurus",
    //         source: BrontoImage,
    //     },
    //     {
    //         name: "Parasaurilophus",
    //         source: ParaImage,
    //     },
    //     {
    //         name: "Stegasaurus",
    //         source: StegaImage,
    //     },
    //     {
    //         name: "Triceratops",
    //         source: TriImage,
    //     },
    //     {
    //         name: "Pterandon",
    //         source: PteroImage,
    //     },
    //     {
    //         name: "Pachycepalosaurus",
    //         source: PachyImage,
    //     },
    // ]);

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
                    <CButton onClick={() => setCurrentDino(dino.name)}>View Dino</CButton>
                    {currentDino === dino.name && 
                    <SelectedDino/>
                    }   
                </CCardBody>
            </CCard>
        ))}
        </div>
    );
}
