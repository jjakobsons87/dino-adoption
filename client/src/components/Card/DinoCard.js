import React, {useState} from "react";
import { useQuery } from "@apollo/client"
import { QUERY_DINOS, QUERY_DINO } from "../../../src/utils/queries";
import LikeButton from "../LikeButton";
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
            <CCard style={{ width: "26rem" }} className="dinocard">
                <CCardTitle><h2 className="dinoh1">{dino.name}</h2></CCardTitle>
                <CCardText className="h4species"><h4>{dino.species}</h4></CCardText>
                <CCardText className="age">{dino.age} Years Old</CCardText>
                <CCardImage orientation="top" className="dinoimage" src={dino.imageURL} />
                <CCardBody className="row row-cols-3 infodino">
                <CCardText><p className="dinospecifictitle">Gender</p> {dino.gender}</CCardText>
                <CCardText><p className="dinospecifictitle">Aggression</p> {dino.aggressiveness}</CCardText>
                <CCardText><p className="dinospecifictitle">Diet</p>{dino.diet}</CCardText>
                </CCardBody>
                <CCardBody className="row row-cols-2 infodino">
                <CCardText><p className="dinospecifictitle">Fence Strength</p> {dino.fenceRequirement} out of 10</CCardText>
                <CCardText><p className="dinospecifictitle">Human Casualities:</p>{dino.humanCasualties} in lifespan</CCardText>
                </CCardBody>
                <CCardBody>
                <CCardText><p className="dinospecifictitle">About Me</p></CCardText>
                <CCardText className="dinobio">{dino.bio}</CCardText>
                </CCardBody>
                <CCardBody>
                    <LikeButton dinoId={dino} likedDinos={props.likedDinos} setLikedDinos={props.setLikedDinos}/>
                </CCardBody>
            </CCard>
            ))}
        </div>
    );
}