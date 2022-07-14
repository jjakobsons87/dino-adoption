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
            <CCard style={{ width: "25rem" }} className="dinocard">
                <CCardTitle><h1 className="dinoh1">{dino.name}</h1></CCardTitle>
                <CCardText>{dino.species}</CCardText>
                <CCardText>Age: {dino.age} Years</CCardText>
                <CCardImage orientation="top" src={dino.imageURL} />
                <CCardBody>
                <CCardText>Gender: {dino.gender}</CCardText>
                <CCardText>Aggressiveness: {dino.aggressiveness}</CCardText>
                <CCardText>Diet: {dino.diet}</CCardText>
                <CCardText>Fence Requirement: {dino.fenceRequirement}</CCardText>
                <CCardText>Human's Casualities: {dino.humanCasualties} in lifespan</CCardText>
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