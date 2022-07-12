import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import DinoModelCard from '../Card/DinoModelCard';
import { MDBCardImage, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function DinoModel({show, handleClose,name,source}) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}> */}
        <Modal.Header closeButton>
        <MDBCardTitle>{Dino.name}</MDBCardTitle>
        </Modal.Header>
      <MDBCardImage className="singledinocard" position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp'/>
        <MDBCardText>
          {Dino.bio}
        </MDBCardText>
      <MDBListGroup flush>
        <MDBListGroupItem><h4>Species</h4>{Dino.species}</MDBListGroupItem>
        <MDBListGroupItem><h4>Age</h4>{Dino.age}</MDBListGroupItem>
        <MDBListGroupItem><h4>Diet</h4>{Dino.diet}</MDBListGroupItem>
        <MDBListGroupItem><h4>Aggressiveness</h4>{Dino.aggressiveness}</MDBListGroupItem>
        <MDBListGroupItem><h4>Human Casualties</h4>{Dino.humanCasualties}</MDBListGroupItem>
        <MDBListGroupItem><h4>Fence Requirement</h4>{Dino.fenceRequirement}</MDBListGroupItem>
        <MDBListGroupItem><h4>Price</h4>{Dino.price}</MDBListGroupItem>
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
