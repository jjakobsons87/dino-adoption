import React from 'react';

import TRexImage from "../assets/images/trex.jpg"
import SpinoImage from "../assets/images/spinosaurus.png"
import RaptorImage from "../assets/images/raptor.jpg"
import DilophImage from "../assets/images/dilophosaurus.png"
import AlloImage from "../assets/images/allosaurus.jpg"
import AnkylImage from "../assets/images/ankylosaurus.jpg"
import BrontoImage from "../assets/images/brontosaurus.jpg"
import ParaImage from "../assets/images/parasaurilophus.jpg"
import StegaImage from "../assets/images/stegasaurus.png"
import TriImage from "../assets/images/Triceratops.png"

function AdoptionPage() {
    return (
        <main id="dinoSale">

            <section id="carnivores">
                <div id= "dinosaurs" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">

                    <div className="col">
                        <div className="card">
                            <img
                                src={TRexImage}
                                alt="Tyranasaurus Rex"
                                className="card-img-top"
                            />
                    
                        <div className="card-body">
                            <h3 id="dinoName">Tyranasaurus Rex</h3>    
                            <button>Adopt me if you dare!</button>
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
                            <h3 id="dinoName">Spinosaurus</h3>    
                            <button>Adopt me if you dare!</button>
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
                            <h3 id="dinoName">Velociraptor</h3>    
                            <button>Adopt me if you dare!</button>
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
                            <h3 id="dinoName">Allosaurus</h3>    
                            <button>Adopt me if you dare!</button>
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
                            <h3 id="dinoName">Dilophosaurus</h3>    
                            <button>Adopt me if you dare!</button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </section>

            <section id="herbivores">

                <div id= "dinosaurs" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">

                    <div className="col">
                        <div className="card">
                            <img
                                src={AnkylImage}
                                alt="Ankylosaurus"
                                className="card-img-top"
                            />

                        <div className="card-body">
                            <h3 id="dinoName">Ankylosaurus</h3>    
                            <button>Adopt me if you dare!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={BrontoImage}
                                alt="Brontosaurus"
                                className="card-img-top"
                            />

                        <div className="card-body">
                            <h3 id="dinoName">Brontosaurus</h3>    
                            <button>Adopt me if you dare!</button>
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
                            <h3 id="dinoName">Parasaurilohpus</h3>    
                            <button>Adopt me if you dare!</button>
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
                            <h3 id="dinoName">Allosaurus</h3>    
                            <button>Adopt me if you dare!</button>
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
                            <h3 id="dinoName">Velociraptor</h3>    
                            <button>Adopt me if you dare!</button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </main>
    )
};

export default AdoptionPage;