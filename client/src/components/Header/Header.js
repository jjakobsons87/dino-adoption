import React, { useState, Fragment } from "react";
import Navigation from "../Nav/Nav";
import Adoption from "../AdoptionPage";
import Home from "../../pages/Home";
import background from "../../assets/images/hero-image.jpg";
import logo2 from "../../assets/images/logocreamcropped2.png";
import logo from "../../assets/images/logotransparent.png";
import Profile from "../../pages/Profile";
import Shop from "../../pages/Shop"
import Example from '../Modal/index';

export default function Header(props) {
    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home />;
        }
        if (currentPage === "Adoption") {
            return <Adoption likedDinos={props.likedDinos} setLikedDinos={props.setLikedDinos}/>;
        }
        if (currentPage === "Profile") {
            return <Profile likedDinos={props.likedDinos} setLikedDinos={props.setLikedDinos}/>;
        }
        if (currentPage === "Shop") {
            return <Shop toCart={props.toCart} setToCart={props.setToCart}/>;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <Fragment>
            <Navigation
                sticky="top"
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                style={{overflowY:"scroll", height:"800px"}}
            />
            <div className="border">
                <img
                    src={background}
                    alt="background of a forest"
                    className="hero"
                />
                <div className="logobox">
                    <img
                        src={logo2}
                        className="herotitle2"
                        alt="dinosaur logo"
                    />
                    <img src={logo} className="herotitle" alt="dinosaur logo" />
                </div>
            </div>
            {renderPage()}
        </Fragment>
    );
}
