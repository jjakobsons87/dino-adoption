import React, {useState} from "react";
import { useQuery } from "@apollo/client"
import { QUERY_DINOS, QUERY_DINO } from "../../../src/utils/queries";
import LikeButton from "../LikeButton";
import Modal from 'react-bootstrap/Modal';
import DinoModel from "../Card/DinoModel";
import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton,
} from "@coreui/react";


export default function DinoCard(props) {
    const { loading, error, data } = useQuery(QUERY_DINOS);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;


    return (
        <div className="row row-cols-6 dinodiv">
            {data.dinos.map((dino) => (
            <CCard style={{ width: "23rem" }} className="dinocard">
                <CCardTitle><h1 className="dinoh1">{dino.name}</h1></CCardTitle>
                <CCardText className="h4species"><h4>{dino.species}</h4></CCardText>
                <CCardText className="age">{dino.age} Years Old</CCardText>
                <CCardImage orientation="top" className="dinoimage" src={dino.imageURL} />
                <CCardBody className="row row-cols-3 infodino">
                <CCardText><p className="dinospecifictitle">Gender</p> {dino.gender}</CCardText>
                <CCardText><p className="dinospecifictitle">Aggression</p> {dino.aggressiveness}</CCardText>
                <CCardText><p className="dinospecifictitle">Diet</p>{dino.diet}</CCardText>
                </CCardBody>
                <CCardBody>
                <CCardText><p className="dinospecifictitle">Fence Strength</p> {dino.fenceRequirement}</CCardText>
                <CCardText><p className="dinospecifictitle">Human Casualities:</p>{dino.humanCasualties} in lifespan</CCardText>
                </CCardBody>
                <CCardBody>
                <CCardText></CCardText>
                <CCardText>About me</CCardText>
                <CCardText>{dino.bio}</CCardText>
                </CCardBody>
                <CCardBody>
                    <LikeButton dinoId={props.selectedDino} likedDinos={props.likedDinos} setLikedDinos={props.setLikedDinos}/>
                </CCardBody>
            </CCard>
            ))}
        </div>
    );
}