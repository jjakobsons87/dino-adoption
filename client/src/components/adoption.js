import React from 'react';

import TRexImage from "../assets/images/trex.jpg"
import SpinoImage from "../assets/images/spinosaurus.png"
import RaptorImage from "../assets/images/raptor.jpg"
import DilophImage from "../assets/images/dilophosaurus.png"
import AlloImage from "../assets/images/allosaurus.jpg"
import AnkylImage from "../assets/images/ankylosaurus.jpg"
import BrontoImage from "../assets/images/brontosaurus.jpg"
import ParaImage from "../assets/images/parasaurilophus.jpg"
import StegaImage from "../assets/images/stegasaurus.jpg"
import TriImage from "../assets/images/Triceratops.jpg"
import PteroImage from "../assets/images/pterodactyl.jpg"
import PachyImage from "../assets/images/pachy.jpg"

function AdoptionPage() {
    return (

        <main id="dinoSale">

            <div id="description">
                <h2 className="text-center text-white">The DDAA is here to fullfill all of your Dino-Related needs!</h2>
                <p className="text-center text-white">We have 2 main category selections. Carnivores and Herbivores. Choose wisely!</p>
            </div>

            <section id="carnivores">

            <h2 className="sectTitle text-center">Carnivores</h2>
            <p className="text-white text-center">Expert mode for Dino-Ownership! Our carnivores, despite their terrifying appearances, will protect if well maintained and trained to do. Be warned! They can be unpredictable! Adopt at your own risk!</p>

                <div id= "dinosaurs" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">

                    <div className="col">
                        <div className="card">
                            <img
                                src={TRexImage}
                                alt="Tyranasaurus Rex"
                                className="card-img-top"
                            />
                    
                        <div className="card-body">
                            <h3 className="dinoName">Tyranasaurus Rex</h3>    
                            <button className="adoptBtn">Adopt me if you dare!</button>
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
                            <button className="adoptBtn">Adopt me if you dare!</button>
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
                            <button className="adoptBtn">Adopt me if you dare!</button>
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
                            <button className="adoptBtn">Adopt me if you dare!</button>
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
                            <button className="adoptBtn">Adopt me if you dare!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={PteroImage}
                                alt="Pterodactyl"
                                className="card-img-top"
                            />
                    
                        <div className="card-body">
                            <h3 className="dinoName">Pterodactyl</h3>    
                            <button className="adoptBtn">Adopt me if you dare!</button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </section>

            <section id="herbivores">

                <h2 className="sectTitle text-center">Herbivores</h2>
                <p className="text-center text-white">Easy Mode for Dino-Ownership! Our Herbivores are, for the most part, well tempered and kind, but can become aggressve if they feel threatened. Keep a healthy relationship with them and you'll be fine!</p>

                <div id= "dinosaurs" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">

                    <div className="col">
                        <div className="card">
                            <img
                                src={AnkylImage}
                                alt="Ankylosaurus"
                                className="card-img-top"
                            />

                        <div className="card-body">
                            <h3 className="dinoName">Ankylosaurus</h3>    
                            <button className="adoptBtn">I will love you forever!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={BrontoImage}
                                alt="Brachiosaurus"
                                className="card-img-top"
                            />

                        <div className="card-body">
                            <h3 className="dinoName">Brachiosaurus</h3>    
                            <button className="adoptBtn">I will love you forever!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={ParaImage}
                                alt="Parasaurilohpus"
                                className="card-img-top"
                            />

                        <div className="card-body">
                            <h3 className="dinoName">Parasaurilohpus</h3>    
                            <button className="adoptBtn">I will love you forever!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={StegaImage}
                                alt="Stegasaurus"
                                className="card-img-top"
                            />

                        <div className="card-body">
                            <h3 className="dinoName">Stegasaurus</h3>    
                            <button className="adoptBtn">I will love you forever!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={TriImage}
                                alt="Triceratops"
                                className="card-img-top"
                            />

                        <div className="card-body">
                            <h3 className="dinoName">Triceratops</h3>    
                            <button className="adoptBtn">I will love you forever!!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={PachyImage}
                                alt="Pachycephalosaurus"
                                className="card-img-top"
                            />

                        <div className="card-body">
                            <h3 className="dinoName">Pachycephalosaurus</h3>    
                            <button className="adoptBtn">I will love you forever!!</button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </main>
    )
};

export default AdoptionPage;