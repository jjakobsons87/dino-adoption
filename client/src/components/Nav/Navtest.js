



import React, { useState, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Auth from "../../utils/auth";
import Example from '../Modal';
import Hamburger from '../Hamburger';
import Signup from '../SignUp/signup';
import logo from '../../assets/images/logotransparentmini.png';
import {FaBars} from 'react-icons/fa';
import {
    Nav,
    NavContainer,
    NavLogo,
    NavItem,
    NavLinks,
    NavMenu,
    MobileIcon
} from './NavStyle';
import '../../index.css';


export default function Navigation({currentPage, handlePageChange}) {

    const [colorChange, setColorchange] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        } 
        else{
            setColorchange(false);
        }
    };

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            {Auth.loggedIn() ? (
               <Nav className={colorChange ? 'navbar colorChange':  'navbar'} expand="lg">
               <NavContainer className="navbar-internal">
                   <NavLogo className="super-internal"><img src={logo} alt="Dinosaur logo"></img></NavLogo>
                   {/* <Nav aria-controls="basic-navbar-nav"></Nav>
                   <Nav className="er-internal" id="basic-navbar-nav">sup */}
                       <NavMenu className="me-auto">
                           <NavLinks className="super-internal" onClick={() => handlePageChange("Home")}>Home</NavLinks>
                           <NavLinks className="super-internal" onClick={() => handlePageChange("Profile")}>My Profile</NavLinks>
                           <NavLinks className="super-internal" onClick={() => handlePageChange("Adoption")}>Adoptable Dinosaurs</NavLinks>
                           <NavLinks className="super-internal" onClick={() => handlePageChange("Shop")}>Shop</NavLinks>
                           <NavLinks className="super-internal" onClick={() => handlePageChange("Cart")}>Cart</NavLinks>
                           <a href="/" onClick={logout}>
                               Logout
                           </a>
                       </NavMenu>
                   {/* </Nav> */}
               </NavContainer>
               </Nav>
            ) : (
               <Nav className="navbar" expand="lg">
<NavContainer className="navbar-internal">
    <NavLogo className="super-internal">Home</NavLogo>
    {/* <Nav aria-controls="basic-navbar-nav" />
    <Nav className="super-internal" id="basic-navbar-nav"> */}
        <NavMenu className="me-auto">
            <NavLinks className="super-internal" onClick={() => handlePageChange("Home")}>Home</NavLinks>
            <NavLinks className="super-internal" onClick={() => handlePageChange("Adoption")}>Adoptable Dinosaurs</NavLinks>
            <NavLinks className="super-internal" onClick={() => handlePageChange("Login")}><Example /></NavLinks>
            <NavLinks className="super-internal" onClick={() => handlePageChange("Sign Up")}><Signup /></NavLinks>

        </NavMenu>
    {/* </Nav> */}
</NavContainer>
</Nav>
            )}

            <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
                
                {/* add any additional nav styles here */}
                {/* <style jsx>{`
                @media screen and (max-width: 980px) {
                    .nav-row ul {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                }
                    .dynamic-nav {
                        padding-top: ${hamburgerOpen ? '40px' : '20px'};
                        padding-bottom: ${hamburgerOpen ? '20px' : '20px'};
                }
                `}</style> */}
        </>

    )
}