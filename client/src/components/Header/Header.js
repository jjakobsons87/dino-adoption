import React, { useState, Fragment } from "react";
import Navigation from "../Nav/Nav";
import Adoption from "../AdoptionPage";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Shop from "../../pages/Shop"
import Cart from "../../pages/Cart";
import HeroImage from "./HeroImage";

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
        if (currentPage === "Cart") {
            return <Cart toCart={props.toCart} setToCart={props.setToCart}/>;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <Fragment>
            <Navigation
                sticky="top"
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <HeroImage 
            currentPage={Home}/>
            {renderPage()}
        </Fragment>
    );
}
