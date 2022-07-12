import React from 'react';

import ShopPage from "../components/Shop/index";
import AccessoryCard from '../components/Card/AccessoryCard';


const  Shop = () => {
    return (
        <div>
            <main>
                <ShopPage></ShopPage>
                <AccessoryCard />
            </main>
        </div>
    )
};

export default Shop;