import React from 'react';
import RaptorBaby from '../../assets/homepage/raptorbaby.webp'
import CaptiveDinos from "../../assets/homepage/captivedinos.jpg"
import DinoVariety from "../../assets/homepage/dinovariety.jpg"

function Homepage() {
    return (

        <main>

            <h1 className="mainPageTitle text-center font-weight-bold">The Delusional Dinosaur Adoption Agency</h1>

            <nav>
                <ul className="nav flex-row justify-content-center justify-content-around">
                    <li className="nav-item"><a href="#siteDesc">The DDAA</a></li>
                    <li className="nav-item"><a href="#infantAdopt">Infant Adoption</a></li>
                    <li className="nav-item"><a href="#captDinos">Dinos in Captivity</a></li>
                    <li className="nav-item"><a href="#dinoVar">Dino Variety</a></li>
                </ul>
            </nav>

            <div id="siteDesc">
                <div className="description">
                    <h2 className="text-center sectTitle">The DDAA: Dino Engineering</h2>
                    <p className="text-center text-white">After many years of research, the Delusional Dinosaur Adoption Agency, or DDAA, have "acquired" genuine Dino DNA through very specific, non Government related channels. Thanks to the hard work of us and others, you too now have the distinct opportunity of owning your very own dinosaur! From the Tyrant King itself, the Tyrannasauus Rex, to the legendary long-neck, the Brachiosaurus, we have many options to choose from! Our organization is funded publicly by contributors and dinosaur lovers all over the world. This is a chance for, after millions of years of seperation, dinosaurs and humans to live alongside one another. It's a dream come true for many.
                    <br></br><br></br>
                    Experience may vary, modifying DNA to control the size of your dinosaur when it's full-grown birth costs extra.
                    <br></br><br></br>
                    We DO NOT condone these animals for military use.
                    </p>

                    <h2 className="text-center sectTitle">The Challenges and Risks</h2>
                    <p className="text-center text-white">We never said that owning a dinosaur would be easy. These animals require A LOT of space to roam around, they need to remain active or these is a "small" chance that they will become aggressive. Plenty of stimulation will be required! Fortunately, we do offer accessories, food and toys to make the transition easier for both you and the dino. Give these animals as much attention as you can. It will make imprinting on them at a young age much quicker and avoid any unnecessary injuries and bodily harm
                    <br></br><br></br>
                    This will not be like owning a dog, cat or even more exotic animals from our time. Our current lineup is much bigger, meaner and far more dangerous than anything you can imagine; but don't let that deter you! They can be loving and protective under the right circumstances, and believe us... no one will think twice of invading your home or doing you and your family harm, lest they get blinded and mauled by your pet Dilophosaurus. But, take great care around these animals. They are unpredictable and can be exceedingly vicious. We are not responsible for anythng that occurs after the animal leaves our facility.
                    </p>

                    <h2 className="text-center sectTitle">Our Dinosaurs</h2>
                    <p className="text-center text-white">The animals are given plenty of space to roam, plenty to eat and are treated with the utmost care and respect. They are seperated into different pens based upon their temperment and to avoid confrontations between the Dinosaurs. 
                    <br></br><br></br>
                    </p>

                </div>
            </div>

            <section>

            <div id="infantAdopt" className="description imageDivs">
                    <h2 className="text-center sectTitle">Infant Stage Adoption</h2>
                    <div className="homeDinos">
                        <img className="homeDinosPics"
                            src={RaptorBaby}
                            alt="Infant Raptor"
                        />
                    </div>
                    <p className="text-center text-white">Your dinosaurs will be sent to you as infants to make both delivery and the transitions safer. Infant is highly recommended as it makes imprinting on the dinosaurs easier, thus they wil be more loyal to you. This has additional costs due to the care that comes with the adoption, but you will find it to be a much better route to go. It is a far greater risk to adopt a full grown, set in it's ways Raptor, as opposed to an infant that you can develop a stronger bond with. Of course, adults have the advantage of protection, savagery, and striking fear in the hearts of your enemies. 
                    <br></br><br></br>
                    The above image shows a full-grown Raptor alongside an infant Raptor. AS you can see, the size difference is considerable and it doesn't take long for these Dinosaurs to grow to full size. The time you have to develop a bond will be limited, do not take your time in doing so! Spend time with your dinosaurs as much as possible!
                    </p>
                </div>

                <div id="captDinos" className="description imageDivs">
                    <h2 className="text-center sectTitle">Dinosaurs in Captivity</h2>
                    <div className="homeDinos">
                        <img className="homeDinosPics"
                            src={CaptiveDinos}
                            alt="Captive Dinos"
                        />
                    </div>
                    <p className="text-center text-white">The dinosaurs that we keep at our island facility are loved and cared for. We pride ourselves in the safety an understanding of these animals. We control any and all breeding, and each dinosaur sent out is genetically modified so that they CANNOT breed. What that means is if you want another dinosaur, you will have to adopt a new one. This is to avoid the dinosaurs proliferating outside of our control, and to also avoid any dino-related crises that could arise from unauthorized breeding. 
                    <br></br><br></br>
                    The above image shows 2 of our Brachiosauruses in captivity. The fences are secure and electrified, but they have plety of space to roam and eat, much like all of our other dinosaurs.
                    </p>
                </div>

                <div id="dinoVar" className="description imageDivs">
                    <h2 className="text-center sectTitle">Dinosaur Variety</h2>
                    <div className="homeDinos">
                        <img className="homeDinosPics"
                            src={DinoVariety}
                            alt="Captive Dinos"
                        />
                    </div>
                    <p className="text-center text-white">Currently we hae 12 variety of dinosaurs that consist of 6 Carnivores and 6 Herbivores.
                    <br></br><br></br>
                    The above image shows several of our dinosaurs together in a pen. Of course, we typcially keep Carnivores in their own pens due to their more malicious nature. Herbivores, however, are more tolerant of other Herbivores. For those who don't know, Carnivores have a meat based diet while Herbivores have a strictly plant-based diet, both of which we accomodate in our shop Also, just to note: some of these dinosaurs ARE NOT for sale on our website currently.
                    </p>
                </div>

            </section>
        
        </main>
    )
}

export default Homepage;