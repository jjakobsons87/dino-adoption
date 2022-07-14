import React from 'react';

import AdoptionPage from "../components/AdoptionPage/index";
import HeroImage from '../components/Header/HeroImage';

const Adoption = () => {
    return (
        <div>
            <HeroImage />
            <main>
                <AdoptionPage></AdoptionPage>
            </main>
        </div>
    )
};

export default Adoption;