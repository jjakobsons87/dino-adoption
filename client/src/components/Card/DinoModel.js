import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import DinoModelCard from '../Card/DinoModelCard';
import { MDBCardImage, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function DinoModel({show, handleClose,name,source}) {


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
        <MDBListGroupItem><h4>Age</h4></MDBListGroupItem>
        <MDBListGroupItem><h4>Diet</h4></MDBListGroupItem>
        <MDBListGroupItem><h4>Aggressiveness</h4></MDBListGroupItem>
        <MDBListGroupItem><h4>Human Casualties</h4></MDBListGroupItem>
        <MDBListGroupItem><h4>Fence Requirement</h4></MDBListGroupItem>
        <MDBListGroupItem><h4>Price</h4></MDBListGroupItem>
      </MDBListGroup>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Purchase
          </Button>
        </Modal.Footer>
      {/* </Modal> */}
    </>
  );
}

export default DinoModel;
