import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useQuery } from "@apollo/client"
//import DinoModelCard from '../Card/DinoModelCard';
import { MDBCardImage, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { QUERY_DINOS, QUERY_DINO } from "../../utils/queries";

function DinoModel({show, handleClose,name,source, dinos}) {

  const [currentDino, setCurrentDino] = useState();
  const { loading, error, data } = useQuery(QUERY_DINOS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
        <Modal.Header closeButton>
        <MDBCardTitle></MDBCardTitle>
        </Modal.Header>
      <MDBCardImage className="singledinocard" position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp'/>
        <MDBCardText>
     
        </MDBCardText>
      <MDBListGroup flush>
        <MDBListGroupItem><h4>Species</h4></MDBListGroupItem>
        <MDBListGroupItem><h4>Age</h4>{dinos.age}</MDBListGroupItem>
        <MDBListGroupItem><h4>Diet</h4></MDBListGroupItem>
        <MDBListGroupItem><h4>Aggressiveness</h4></MDBListGroupItem>
        <MDBListGroupItem><h4>Human Casualties</h4></MDBListGroupItem>
        <MDBListGroupItem><h4>Fence Requirement</h4></MDBListGroupItem>
      </MDBListGroup>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Like Dinosaur
          </Button>
        </Modal.Footer>
      {/* </Modal> */}
    </>
  );
}

export default DinoModel;
