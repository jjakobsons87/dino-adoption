import React from 'react';

import TRexImage from "../../assets/images/trex.jpg"
import SpinoImage from "../../assets/images/spinosaurus.png"
import RaptorImage from "../../assets/images/raptor.jpg"
import DilophImage from "../../assets/images/dilophosaurus.png"
import AlloImage from "../../assets/images/allosaurus.jpg"
import AnkylImage from "../../assets/images/ankylosaurus.jpg"
import BrontoImage from "../../assets/images/brontosaurus.jpg"
import ParaImage from "../../assets/images/parasaurilophus.jpg"
import StegaImage from "../../assets/images/stegasaurus.jpg"
import TriImage from "../../assets/images/Triceratops.jpg"
import PteroImage from "../../assets/images/pterandon.jpg"
import PachyImage from "../../assets/images/pachy.jpg"

function AdoptionPage() {
    return (

        <main id="dinoSale">
             <h1 id="mainAdoptTitle" className="text-center font-weight-bold">The Dilusional Dinosaur Adoption Agency</h1>

             <div id="siteDesc">
                <div id="description">
                    <h2 className="text-center text-white">The DDAA is here to fullfill all of your Dino-Related needs!</h2>
                    <p className="text-center text-white">The DDAA, after much work and toil, has finally acquired the much sought after Dino-DNA, and, with the aquisition, we have also gained the ability to successfully clone our very own Dinosaurs! Who hasn't dreamed of riding a Triceratops to work, or having a Raptor rip your school bully to shreds? ...not that we recommend that, but you get the idea! Thanks to our own patented brand of genetic engineering you can own your very own dinosaur! But, be warned... this type of responsible will not come easy, and is not going to be cheap...
                    <br></br><br></br>
                    There are two main categories of dinosaurs to choose from: Carnivores and Herbivores. Want to know more about a specific breed? Click on the images to visit their wikipedia page! Above all else, though... choose wisely!
                    </p>
                </div>
            </div>

            <section id="carnivores">

            <h2 className="sectTitle text-center">Carnivores</h2>
            <p className="text-white text-center">Expert mode for Dino-Ownership! Our carnivores, despite their terrifying appearances, will protect you if well maintained and well trained. Be warned! They can be unpredictable! Adopt at your own risk!</p>

                <div id= "dinosaurs" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">

                    <div className="col">
                        <div className="card">
                            <a href ="https://en.wikipedia.org/wiki/Tyrannosaurus">
                                <img
                                    src={TRexImage}
                                    alt="Tyranasaurus Rex"
                                    className="card-img-top"
                                />
                            </a>
                    
                        <div className="card-body">
                            <h3 className="dinoName">Tyranasaurus Rex</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <a href="https://en.wikipedia.org/wiki/Spinosaurus">
                                <img
                                    src={SpinoImage}
                                    alt="Spinosaurus"
                                    className="card-img-top"
                                />
                            </a>
                    
                        <div className="card-body">
                            <h3 className="dinoName">Spinosaurus</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <a href="https://en.wikipedia.org/wiki/Velociraptor">
                                <img
                                    src={RaptorImage}
                                    alt="Velociraptor"
                                    className="card-img-top"
                                />
                            </a>
                            
                        <div className="card-body">
                            <h3 className="dinoName">Velociraptor</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <a href="https://en.wikipedia.org/wiki/Allosaurus">
                                <img
                                    src={AlloImage}
                                    alt="Allosaurus"
                                    className="card-img-top"
                                />
                            </a>
                    
                        <div className="card-body">
                            <h3 className="dinoName">Allosaurus</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <a href ="https://en.wikipedia.org/wiki/Dilophosaurus">
                                <img
                                    src={DilophImage}
                                    alt="Dilophosurus"
                                    className="card-img-top"
                                />
                            </a>
                    
                        <div className="card-body">
                            <h3 className="dinoName">Dilophosaurus</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <a href="https://en.wikipedia.org/wiki/Pteranodon">
                                <img
                                    src={PteroImage}
                                    alt="Pteranodon"
                                    className="card-img-top"
                                />
                            </a>
                    
                        <div className="card-body">
                            <h3 className="dinoName">Pteranodon</h3>    
                            <button className="adoptBtn">Adopt me, I dare you!</button>
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
                            <a href="https://en.wikipedia.org/wiki/Ankylosaurus">
                                <img
                                    src={AnkylImage}
                                    alt="Ankylosaurus"
                                    className="card-img-top"
                                />
                            </a>

                        <div className="card-body">
                            <h3 className="dinoName">Ankylosaurus</h3>    
                            <button className="adoptBtn">I will love you forever!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <a href="https://en.wikipedia.org/wiki/Brachiosaurus">
                                <img
                                    src={BrontoImage}
                                    alt="Brachiosaurus"
                                    className="card-img-top"
                                />
                            </a>

                        <div className="card-body">
                            <h3 className="dinoName">Brachiosaurus</h3>    
                            <button className="adoptBtn">I will love you forever!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <a href="https://en.wikipedia.org/wiki/Parasaurolophus">
                                <img
                                    src={ParaImage}
                                    alt="Parasaurilohpus"
                                    className="card-img-top"
                                />
                            </a>

                        <div className="card-body">
                            <h3 className="dinoName">Parasaurilohpus</h3>    
                            <button className="adoptBtn">I will love you forever!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <a href="https://en.wikipedia.org/wiki/Stegosaurus">
                                <img
                                    src={StegaImage}
                                    alt="Stegasaurus"
                                    className="card-img-top"
                                />
                            </a>

                        <div className="card-body">
                            <h3 className="dinoName">Stegasaurus</h3>    
                            <button className="adoptBtn">I will love you forever!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <a href="https://en.wikipedia.org/wiki/Triceratops">
                                <img
                                    src={TriImage}
                                    alt="Triceratops"
                                    className="card-img-top"
                                />
                            </a>

                        <div className="card-body">
                            <h3 className="dinoName">Triceratops</h3>    
                            <button className="adoptBtn">I will love you forever!!</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <a href="https://en.wikipedia.org/wiki/Pachycephalosaurus">
                                <img
                                    src={PachyImage}
                                    alt="Pachycephalosaurus"
                                    className="card-img-top"
                                />
                            </a>

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