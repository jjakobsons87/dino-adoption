import React from 'react';

import AdoptionPage from "../components/Adoption/index";
import Header from '../components/Header/index';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <main>
                <AdoptionPage></AdoptionPage>
            </main>
        </div>
    )
};

export default Home;