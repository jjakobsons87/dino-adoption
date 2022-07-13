import React from "react";
import DinoCard from "../SelectedDino/index";

function Adoption() {
    return (
        <main id="dinoSale">
            <div id="siteDesc">
                <div className="description imageDivs">
                    <h2 className="text-center sectTitle">
                        The DDAA is here to fullfill all of your Dino-Related
                        needs!
                    </h2>
                    <p className="text-center">
                        The DDAA, after much work and toil, has finally acquired
                        the much sought after Dino-DNA, and, with the
                        aquisition, we have also gained the ability to
                        successfully clone our very own Dinosaurs! Who hasn't
                        dreamed of riding a Triceratops to work, or having a
                        Raptor rip your school bully to shreds? ...not that we
                        recommend that, but you get the idea! Thanks to our own
                        patented brand of genetic engineering you can own your
                        very own dinosaur! But, be warned... this type of
                        responsible will not come easy, and is not going to be
                        cheap...
                        <br></br>
                        <br></br>
                        There are two main categories of dinosaurs to choose
                        from: Carnivores and Herbivores. Each dinosaur has specific 
                        traits that it is recommended you read. 
                        Above all else, though... choose wisely!
                    </p>
                </div>
            </div>
            <div>
            <DinoCard />
            </div>
        </main>
    );
}

export default Adoption;
