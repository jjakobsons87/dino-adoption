import React, { useState } from "react";
import Navigation from "../Nav/Nav";
import Adoption from "../AdoptionPage";
import background from "../../assets/images/hero-image.jpg";
import logo2 from "../../assets/images/logocreamcropped2.png";
import logo from "../../assets/images/logotransparent.png";
 import Profile from "../../pages/Profile"
 import Shop from "../../pages/Accessories";
 import Login from "../../components/Login";

export default function Header() {
    const [currentPage, setCurrentPage] = useState("Adoption");
//     const navigate = useNavigate();
//   const authToken = localStorage.getItem(AUTH_TOKEN);

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
             <div className="logobox">
             <img src= {logo2}className="herotitle2" alt="dinosaur logo"/>
             <img src= {logo}className="herotitle" alt="dinosaur logo"/>
             </div>
             </div>
            {renderPage()}
        </div>
    );
}
