import React, { useState } from "react";
import Navigation from "../Nav/Nav";
import Adoption from "../AdoptionPage";
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
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {renderPage()}
        </div>
    );
}
