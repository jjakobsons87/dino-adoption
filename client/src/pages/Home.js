import React from 'react';

import AdoptionPage from "../components/Adoption/index";
import Header from '../components/Header/index';
import Login from '../components/Login/index';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Login />
            <main>
                <AdoptionPage />
            </main>
        </div>
    )
};

export default Home;