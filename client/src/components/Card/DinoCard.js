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
        
        <div className="row row-cols-lg-3 g-5">
            {data.dinos.map((dino) => (
            <CCard style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={dino.imageURL} />
                    <CCardBody>
                    <CCardTitle>{dino.name}</CCardTitle>
                    <CCardText>About me: {dino.bio}</CCardText>
                    <CCardText>Age: {dino.age}</CCardText>
                    <CCardText>Species: {dino.species}</CCardText>
                    <CCardText>Diet: {dino.diet}</CCardText>
                    <CCardText></CCardText>
                    <CCardText></CCardText>
                    <LikeButton dinoId={props.selectedDino} likedDinos={props.likedDinos} setLikedDinos={props.setLikedDinos}/>
                </CCardBody>
            </CCard>
            ))}
        </div>
    );
}