import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import DinoModelCard from '../Card/DinoModelCard';

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
          <Modal.Title>
            {name}
            Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={source} alt="name"/>
            Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      {/* </Modal> */}
    </>
  );
}

export default DinoModel;
