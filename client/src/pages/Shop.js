import React from 'react';
import AccessoryCard from "../components/Card/AccessoryCard";


const  Shop = () => {
    return (
        <main id="dinoSale">
            <div id="accessDesc">
            <div className="description">
                <h2 className="text-center text-white">Accessories for your dinosaur</h2>
                <p className="text-center text-white">The DDAA also supplies many different "accessories" to help you both maintain and keep total control over your dinosaur. These are dangerous animals; afterall- it would be ashame if these got out and hurt somebody. These will help you avoid any unpleasant circumstances that could be brought on by these animals. 
                <br></br><br></br>
                Sizes may vary.
                </p>
            </div>
        </div>

        <h2 className="sectTitle text-center">Hats, Toys and Accessories</h2>
        <p className="text-white text-center">Style your dinosaur in both a cute and safe way. Harness and Muzzle HIGHLY recommended to avoid any... unpleasant situations, especially for Carnivores!</p>
            <div>
                <AccessoryCard />
            </div>
        </main>
    )
};

export default Shop;