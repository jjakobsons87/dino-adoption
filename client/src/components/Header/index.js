import React, { useState } from 'react';
import '../../App.css';
import About from '../About';
import Contact from '../Contact';
import Nav from '../Nav';
import Projects from '../Projects';
import Resume from '../Resume';
import Footer from '../Footer';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'Accessories') {
        return <Accessories />;
      }
      if (currentPage === 'Profile') {
        return <Profile />;
      }
      if (currentPage === 'Dinosaur') {
        return <Dinosaur />;
      }
      //Will be for checkout page
    //   return <Checkout />;
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
      <div>
       <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
      </div>
    );
  }


export default App;