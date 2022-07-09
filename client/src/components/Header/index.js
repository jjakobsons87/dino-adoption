import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Adoption from "../Adoption";
import Profile from "./Profile";
import Shop from "./Shop";
import Login from "./Login";

export default function Header() {
    const [currentPage, setCurrentPage] = useState("Adoption");

    const renderPage = () => {
        if (currentPage === "Adoption") {
            return <Adoption />;
        }
        if (currentPage === "Profile") {
            return <Profile />;
        }
        if (currentPage === "Shop") {
            return <Shop />;
        }
        if (currentPage === "Login") {
            return <Login />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {renderPage()}
        </div>
    );
}