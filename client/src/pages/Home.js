import React from 'react';

import AdoptionPage from "../components/Adoption/index";
import Basket from '../components/Basket';

const Home = () => {
    return (
        <div>
            <main>
                <div>
                    <AdoptionPage></AdoptionPage>
                </div>
                <div>
                    <Basket />
                </div>
            </main>
        </div>
    )
};

export default Home;