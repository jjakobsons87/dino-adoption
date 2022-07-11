import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import Auth from "../../utils/auth";

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav>
            { Auth.loggedIn() ? (
                <Navbar className="navbar navbar-fixed-top container-fluid" expand="lg">
                    <Container className="navbar-internal">
                        <Navbar.Brand className="super-internal" href="#home">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="super-internal" id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="super-internal" onClick={()=>handlePageChange("Profile")}>My Profile</Nav.Link>
                                <Nav.Link className="super-internal" onClick={()=>handlePageChange("Adoption")}>Adoptable Dinosaurs</Nav.Link>
                                <Nav.Link className="super-internal" onClick={()=>handlePageChange("Shop")}>Shop</Nav.Link>
                                <Nav.Link className="super-internal" onClick={()=>handlePageChange("Logout")}>Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            ) : (
                <Navbar className="navbar" expand="lg">
                    <Container className="navbar-internal">
                        <Navbar.Brand className="super-internal" href="#home">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="super-internal" id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="super-internal" onClick={()=>handlePageChange("Adoption")}>Adoptable Dinosaurs</Nav.Link>
                                <Nav.Link className="super-internal" onClick={()=>handlePageChange("Shop")}>Shop</Nav.Link>
                                <Nav.Link className="super-internal" onClick={()=>handlePageChange("Login")}>Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
        </nav>

    )
}
