import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DinoModel from "../Card/DinoModel";
import { QUERY_DINOS, QUERY_DINO } from "../../utils/queries";
import { useQuery } from "@apollo/client"

import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton
} from "@coreui/react";

const SelectedDino = ({dino, source}) => {

    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const toggleCard = (image, i) => {
        setIsCardOpen(!isCardOpen);
    }

    const [currentDino, setCurrentDino] = useState();
    const { loading, error, data } = useQuery(QUERY_DINOS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  

    return (
        <div>
            {/* {data.dinos.map(dino => ( */}
        <CCard style={{ width: "18rem" }}>
        <CCardImage orientation="top" src={dino.imageURL} />
        <CCardBody>
            <CCardTitle>{dino.name}</CCardTitle>
            <CCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
            </CCardText>
        </CCardBody>
        <CCardBody>
            <CButton  onClick={handleShow}>View Dino</CButton>
             {currentDino === dino.name &&
            <SelectedDino/>
            }   
             <Modal show={show} onHide={handleClose}>
                <DinoModel
                show ={show}
                handleClose={handleClose}
                name={dino.name}
                source={dino._id}/>
             </Modal>
        </CCardBody>
    </CCard>
            {/* ))} */}
    </div>
    )
};
export default SelectedDino;









