import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DinoModel from "../Card/DinoModel";
import LikeButton from '../LikeButton';
import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton
} from "@coreui/react";
const SelectedDino = (props) => {
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const toggleCard = (image, i) => {
        setIsCardOpen(!isCardOpen);
    }
    return (
        <CCard style={{ width: "18rem" }}>
        <CCardImage orientation="top" src={props.dino.source} />
        <CCardBody>
            <CCardTitle>{props.dino.name}</CCardTitle>
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
                name={props.dino.name}
                source={props.dino.source}/>
                <LikeButton dinoId={props.selectedDino} likedDinos={props.likedDinos} setLikedDinos={props.setLikedDinos}/>
            </Modal>
        </CCardBody>
    </CCard>
    )
};
export default SelectedDino;









