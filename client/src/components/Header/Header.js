import React, { useState } from "react";
import Navigation from "../Nav/Nav";
import Adoption from "../AdoptionPage";
import background from "../../assets/images/hero-image.jpg";
// import Profile from "./Profile";
// import Shop from "./Shop";
// import Login from "./Login";

export default function Header() {
    const [currentPage, setCurrentPage] = useState("Adoption");
//     const navigate = useNavigate();
//   const authToken = localStorage.getItem(AUTH_TOKEN);

    const renderPage = () => {
        // if (currentPage === "Adoption") {
        //     return <Adoption />;
        // }
        // if (currentPage === "Profile") {
        //     return <Profile />;
        // }
        // if (currentPage === "Shop") {
        //     return <Shop />;
        // }
        // if (currentPage === "Login") {
        //     return <Login />;
        // }
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Navigation
                sticky="top"
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <div className="border">
             <img src={background} alt="background of a forest" className="hero"/>
             <h1 className="herotitle">The Delusional Dinosaur Adoption Agency</h1>
             </div>
            {renderPage()}
        </div>
    );
}
