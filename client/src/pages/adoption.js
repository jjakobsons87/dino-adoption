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

            <section id="carnivores">

            <h1 className="sectTitle">Carnivores</h1>

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

                <h1 className="sectTitle">Herbivores</h1>

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