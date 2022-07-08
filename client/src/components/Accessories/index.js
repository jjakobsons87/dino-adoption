import React from 'react';

import Harness from "../../assets/accessories/harness.jpg"
import Blanket from "../../assets/accessories/Blanket.jpeg"
import ChewToy from "../../assets/accessories/chewtoy.jpg"
import BoyHat from "../../assets/accessories/boyhat.jpeg"
import Sword from "../../assets/accessories/dinosword.jpg"
import LeashCollar from "../../assets/accessories/leashcollar.jpg"
import Muzzle from "../../assets/accessories/muzzle.jpg"
import Pillow from "../../assets/accessories/pillow.jpg"
import Treats from "../../assets/accessories/dinotreats.jpg"
import FoodBowl from "../../assets/accessories/foodbowl.jpg"
import Leaves from "../../assets/accessories/leaves.jpg"
import Meat from "../../assets/accessories/meat.jpg"
import TreatBoxes from "../../assets/accessories/treatboxes.jpg"
import WaterBowl from "../../assets/accessories/waterbowl.jpg"

function AccessoriesPage() {
    return (

        <main id="dinoSale">
             <h1 className="mainPageTitle text-center font-weight-bold">The Delusional Dinosaur Adoption Agency</h1>

             <div id="siteDesc">
                <div id="description">
                    <h2 className="text-center text-white">Accessories for your dinosaur</h2>
                    <p className="text-center text-white">The DDAA also supplies many different "accessories" to help you both maintain and keep total control over your dinosaur. These are dangerous animals; afterall- it would be ashame if these got out and hurt somebody. These will help you avoid any unpleasant circumstances that could be brought on by these animals. 
                    <br></br><br></br>
                    We have breed specific merchandise, but with the right accomodations, other dinosaurs could use these as well.
                    </p>
                </div>
            </div>

            <div className="col">
                        <div className="card">
                                <img
                                    src={TRexImage}
                                    alt="Tyranasaurus Rex"
                                    className="card-img-top"
                                />
                    
                        <div className="card-body">
                            <h3 className="dinoName">Tyranasaurus Rex</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                                <img
                                    src={SpinoImage}
                                    alt="Spinosaurus"
                                    className="card-img-top"
                                />
                    
                        <div className="card-body">
                            <h3 className="dinoName">Spinosaurus</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                                <img
                                    src={RaptorImage}
                                    alt="Velociraptor"
                                    className="card-img-top"
                                />
                            
                        <div className="card-body">
                            <h3 className="dinoName">Velociraptor</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                                <img
                                    src={AlloImage}
                                    alt="Allosaurus"
                                    className="card-img-top"
                                />
                    
                        <div className="card-body">
                            <h3 className="dinoName">Allosaurus</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                                <img
                                    src={DilophImage}
                                    alt="Dilophosurus"
                                    className="card-img-top"
                                />
                    
                        <div className="card-body">
                            <h3 className="dinoName">Dilophosaurus</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                                <img
                                    src={PteroImage}
                                    alt="Pteranodon"
                                    className="card-img-top"
                                />
                    
                        <div className="card-body">
                            <h3 className="dinoName">Pteranodon</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

        </main>
            )
        }

        export default AccessoriesPage;