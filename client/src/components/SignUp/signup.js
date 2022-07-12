import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import Auth from '../../utils/auth';

const Signup = () => {
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
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <a href="https://kids.nationalgeographic.com/games/personality-quizzes/article/what-dinosaur" target="_blank">Dino Quiz</a>
              <DropdownButton title="What Dino Are You?" id="dropdown-menu-align-right" onSelect={handleSelect}>
                <Dropdown.Item eventKey="Tyrannasaurus Rex">Tyrannasaurus Rex</Dropdown.Item>
                <Dropdown.Item eventKey="Spinosaurus">Spinosaurus</Dropdown.Item>
                <Dropdown.Item eventKey="Apatosaurus">Apatosaurus</Dropdown.Item>
                <Dropdown.Item eventKey="Velociraptor">Velociraptor</Dropdown.Item>
                <Dropdown.Item eventKey="Stegosaurus">Stegosaurus</Dropdown.Item>
                <Dropdown.Item eventKey="Triceratops">Triceratops</Dropdown.Item>
              </DropdownButton>
              <h4>You selected {value}</h4>
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
