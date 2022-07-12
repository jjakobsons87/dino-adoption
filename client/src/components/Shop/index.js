import React from 'react';

import Harness from "../../assets/accessories/harness.jpg"
import Blanket from "../../assets/accessories/blanket.jpeg"
import ChewToy from "../../assets/accessories/chewtoy.jpg"
import BoyHat from "../../assets/accessories/boyhat.jpeg"
import GirlHat from "../../assets/accessories/girlhat.jpg"
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

function ShopPage() {
    return (

        <main id="dinoSale">
             <div id="accessDesc">
                <div className="description imageDivs">
                    <h2 className="text-center sectTitle">Accessories for your dinosaur</h2>
                    <p className="text-center">The DDAA also supplies many different "accessories" to help you both maintain and keep total control over your dinosaur. These are dangerous animals; after all- it would be a shame if these got out and hurt somebody. These will help you avoid any unpleasant circumstances that could be brought on by these animals. 
                    <br></br><br></br>
                    Sizes may vary.
                    </p>
                </div>
            </div>

            <h2 className="sectTitle text-center">Hats, Toys and Accessories</h2>
            <p className="text-center">Style your dinosaur in both a cute and safe way. Harness and Muzzle HIGHLY recommended to avoid any... unpleasant situations, especially for Carnivores!</p>


            <div id= "accessoriesPart1" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">

                <div className="col">
                    <div className="card">
                            <img
                                src={Harness}
                                alt="Harness"
                                className="card-img-top"
                            />
                
                        <div className="card-body">
                            <h3 className="dinoName">Dino Harness $129.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                            <img
                                src={LeashCollar}
                                alt="Leash/Collar"
                                className="card-img-top"
                            />
                
                        <div className="card-body">
                            <h3 className="dinoName">Leash/Collar $99.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                            <img
                                src={Muzzle}
                                alt="Muzzle"
                                className="card-img-top"
                            />
                
                        <div className="card-body">
                            <h3 className="dinoName">Muzzle $89.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                            <img
                                src={BoyHat}
                                alt="Boy Hat"
                                className="card-img-top"
                            />
                
                        <div className="card-body">
                            <h3 className="dinoName">Infant Boy Hat $29.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                            <img
                                src={GirlHat}
                                alt="Girl Hat"
                                className="card-img-top"
                            />
                
                        <div className="card-body">
                            <h3 className="dinoName">Infant Girl Hat $29.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                            <img
                                src={Sword}
                                alt="Sword"
                                className="card-img-top"
                            />
                
                        <div className="card-body">
                            <h3 className="dinoName">Dinosword $49.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>

                </div>
            </div>


            <div id= "accessoriesPart2" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">           

                <div className="col">
                    <div className="card">
                            <img
                                src={Pillow}
                                alt="Pillow"
                                className="card-img-top"
                            />
                        
                        <div className="card-body">
                            <h3 className="dinoName">Pillow $49.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                            <img
                                src={Blanket}
                                alt="Blanket"
                                className="card-img-top"
                            />
                
                        <div className="card-body">
                            <h3 className="dinoName">Blanket $89.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                            <img
                                src={ChewToy}
                                alt="Chew Toy"
                                className="card-img-top"
                            />
                        
                        <div className="card-body">
                            <h3 className="dinoName">Chew Toy $49.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div> ru

            </div>

            <h2 className="sectTitle text-center">Food and Treats</h2>
            <p className="text-white text-center">We have a Variety Meat bag (type may vary), Leaves pick fresh from trees (not ground) as well as food and water dishes! Want to let your dino know it's a good boy/girl? Buy our treats and treat boxes!</p>


            <div id= "foodTreats" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">


            <div className="col">
                            <div className="card">
                                    <img
                                        src={FoodBowl}
                                        alt="Food Bowl"
                                        className="card-img-top"
                                    />
                        
                                <div className="card-body">
                                    <h3 className="dinoName">Food Bowl $99.99</h3>    
                                    <button className="adoptBtn">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                    <img
                                        src={WaterBowl}
                                        alt="Water Bowl"
                                        className="card-img-top"
                                    />
                        
                                <div className="card-body">
                                    <h3 className="dinoName">Water Bowl $89.99</h3>    
                                    <button className="adoptBtn">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                    <img
                                        src={TreatBoxes}
                                        alt="Treat Boxes"
                                        className="card-img-top"
                                    />
                        
                                <div className="card-body">
                                    <h3 className="dinoName">Treat Boxes $49.99</h3>    
                                    <button className="adoptBtn">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                <div className="col">

                    <div className="card">
                            <img
                                src={Meat}
                                alt="Meat"
                                className="card-img-top"
                            />
                
                        <div className="card-body">
                            <h3 className="dinoName">Variety Meat $299.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                            <img
                                src={Leaves}
                                alt="Leaves"
                                className="card-img-top"
                            />
                
                        <div className="card-body">
                            <h3 className="dinoName">Fresh Leaves $199.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                            <img
                                src={Treats}
                                alt="Treats"
                                className="card-img-top"
                            />
                
                        <div className="card-body">
                            <h3 className="dinoName">Bag of Treats $49.99</h3>    
                            <button className="adoptBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </main>
            )
        }

        export default ShopPage;