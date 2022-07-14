import React, {useState} from "react";
import { useQuery } from "@apollo/client"
import { QUERY_DINOS, QUERY_DINO } from "../../../src/utils/queries";
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import DinoModel from "../Card/DinoModel";
import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton,
    CNavLink
} from "@coreui/react";
import SingleDino from '../../pages/SingleDino';


export default function DinoCard(props) {

    // const [currentPage, setCurrentPage] = useState();
    // let navigate = useNavigate();
    // const routeChange = () => {
    //     let path = 'SingleDino';
    //     navigate(path);
    // };
    const { loading, error, data } = useQuery(QUERY_DINOS);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    // const handlePageChange = () => {
    //     navigate('/Profile')}
        // setCurrentPage(SingleDino);

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
                </CCardBody>
                <CCardBody>
                <Link to={SingleDino} >View Dino</Link>
                </CCardBody>
            </CCard>
            ))}
        </div>
    );
}