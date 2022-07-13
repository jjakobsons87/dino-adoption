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
import { useQuery } from "@apollo/client";
import { QUERY_DINOS } from "../../utils/queries";

export default function DinoCard(props) {

    const [currentDino, setCurrentDino] = useState();
    const { loading, error, data } = useQuery(QUERY_DINOS);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
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