import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DinoModel from "../Card/DinoModel";
import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton
} from "@coreui/react";
const SelectedDino = ({dino}) => {
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const toggleCard = (image, i) => {
        setIsCardOpen(!isCardOpen);
    }
    return (
        <CCard style={{ width: "18rem" }}>
        <CCardImage orientation="top" src={dino.source} />
        <CCardBody>
            <CCardTitle>{dino.name}</CCardTitle>
            <CCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
            </CCardText>
        </CCardBody>
        <CCardBody>
            <CButton  onClick={handleShow}>View Dino</CButton>
            {/* {currentDino === dino.name &&
            <SelectedDino/>
            }    */}
             <Modal show={show} onHide={handleClose}>
                <DinoModel
                show ={show}
                handleClose={handleClose}
                name={dino.name}
                source={dino.source}/>
             </Modal>
        </CCardBody>
    </CCard>
    )
};
export default SelectedDino;









