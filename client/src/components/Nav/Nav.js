import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import Auth from "../../utils/auth";
import Example from '../Modal';
import Hamburger from '../Hamburger';
import Signup from '../SignUp/signup';
import logo from '../../assets/images/logotransparentmini.png';


export default function Navigation({ currentPage, handlePageChange }) {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <nav>
            {Auth.loggedIn() ? (
                <Navbar className="navbar container-fluid" expand="lg">
                    <Container className="navbar-internal">
                        <Navbar.Brand className="super-internal"><img src={logo} alt="dino logo"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="super-internal" id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Home")}>Home</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Profile")}>My Profile</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Adoption")}>Adoptable Dinosaurs</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Shop")}>Shop</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Cart")}>Cart</Nav.Link>
                                <a className="removeBlue log" href="/" onClick={logout}>
                                    Logout
                                </a>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            ) : (
                <Navbar className="navbar" expand="lg">
                    <Container className="navbar-internal">
                        <Navbar.Brand className="super-internal"><img src={logo} alt="dino logo"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="super-internal" id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Home")}>Home</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Adoption")}>Adoptable Dinosaurs</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Login")}><Example /></Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Sign Up")}><Signup /></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}

            <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
            </div>
        </nav>

    )
}