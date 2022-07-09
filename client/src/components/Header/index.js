import React, { useState } from "react";
// import Nav from "../Nav/Nav";
// import Adoption from "../Adoption";
// import Profile from "./Profile";
// import Shop from "./Shop";
// import Login from "./Login";

export default function Header() {
    const [currentPage, setCurrentPage] = useState("Adoption");

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
        <header>
            {/* <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {renderPage()}
            <div
       id="intro"
       class="bg-image"
       style="
              background-image: url(https://mdbcdn.b-cdn.net/img/new/fluid/city/113.jpg);
              height: 100vh;
              "
       >
    <div class="mask text-white" style="background-color: rgba(0, 0, 0, 0.8)">
      <div class="container d-flex align-items-center text-center h-100">
        <div>
          <h1 class="mb-5">This is title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae
            laboriosam numquam expedita ullam saepe ipsam, deserunt provident corporis,
            sit non accusamus maxime, magni nulla quasi iste ipsa architecto? Autem!
          </p>
        </div>
      </div>
    </div>
  </div> */}
  <p>Show something here</p>
        </header>
    );
}

//-- To make Navbar disappear - code needed for Nav before css
//   <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
//     <div class="container-fluid">
//     </div>
//   </nav>