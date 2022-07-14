import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import Auth from '../../utils/auth';

export default function Signup (props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [value, setValue] = useState('');

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelect=(e)=>{
    console.log(e);
    setValue(e);
  }


  return (
    <>
    <Button className="signup" variant="signupnavbtn" onClick={handleShow}>Sign Up</Button>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                className="form-input"
                name="username"
                id="username"
                type="username"
                placeholder="username"
                value={formState.username}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="form-input"
                name="email"
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formState.email}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="form-input"
                name="password"
                id="password"
                type="password"
                placeholder="******"
                value={formState.password}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <form>
              <a
                href="https://kids.nationalgeographic.com/games/personality-quizzes/article/what-dinosaur"
                target="_blank"
              >
                Dino Quiz
              </a>
              <br></br>
              <br></br>
              <DropdownButton
                title="What Dino Are You?"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="Tyrannasaurus Rex">
                  Tyrannasaurus Rex
                </Dropdown.Item>
                <Dropdown.Item eventKey="Spinosaurus">
                  Spinosaurus
                </Dropdown.Item>
                <Dropdown.Item eventKey="Apatosaurus">
                  Apatosaurus
                </Dropdown.Item>
                <Dropdown.Item eventKey="Velociraptor">
                  Velociraptor
                </Dropdown.Item>
                <Dropdown.Item eventKey="Stegosaurus">
                  Stegosaurus
                </Dropdown.Item>
                <Dropdown.Item eventKey="Triceratops">
                  Triceratops
                </Dropdown.Item>
              </DropdownButton>
              <br></br>
              <h4>You selected: {value}</h4>
            </form>
            <br></br>
            <Button
              className="btn d-block w-100"
              type="submit"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {error && <div>Sign Up failed</div>}
      </Modal>
    </>
  );
}
