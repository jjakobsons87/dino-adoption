import React from 'react';
import RaptorBaby from '../../src/assets/homepage/raptorbaby.webp'
import CaptiveDinos from "../../src/assets/homepage/captivedinos.jpg"
import DinoVariety from "../../src/assets/homepage/dinovariety.jpg"
import TRex from "../../src/assets/homepage/TRex.jpg"
import DeadDino from "../../src/assets/homepage/deaddino.webp"

import AdoptionPage from '../components/AdoptionPage';
import Login from '../components/Login/index';
import SignUp from '../components/SignUp/signup';

const Home = () => {
    return (
        <div>
        <Login />
        <SignUp />
        <main>

            <h1 className="mainPageTitle text-center font-weight-bold">The Delusional Dinosaur Adoption Agency</h1>

            <nav>
                <ul className="nav flex-row justify-content-center justify-content-around">
                    <li className="nav-item"><a href="#siteDesc">The DDAA</a></li>
                    <li className="nav-item"><a href="#infantAdopt">Infant Adoption</a></li>
                    <li className="nav-item"><a href="#captDinos">Captivity and Breeding</a></li>
                    <li className="nav-item"><a href="#dinoVar">Dino Variety</a></li>
                    <li className="nav-item"><a href="#escape">Escape Protocol</a></li>
                    <li className="nav-item"><a href="#future">The Future</a></li>
                </ul>
            </nav>

            <div id="siteDesc">
                <div className="aboutSect imageDivs">
                    <h2 className="text-center sectTitle">The DDAA: Dino Engineering</h2>
                    <p className="text-center">After many years of research, the Delusional Dinosaur Adoption Agency, 
                    or DDAA, has "acquired" genuine Dino DNA through very specific, non Government related channels. Thanks to 
                    the hard work of us and others, you too now have the distinct opportunity of owning your very own dinosaur! 
                    From the Crocidile-esqu Spinosaurus to the legendary long-necked Brachiosaurus, we have 
                    many options to choose from! Our organization is funded publicly by contributors and dinosaur lovers all over 
                    the world. This is a chance for, after millions of years of seperation, dinosaurs and humans to live 
                    alongside one another. It's a dream come true for many.
                    <br></br><br></br>
                    Experience may vary, modifying DNA to control the size of your dinosaur when it's full-grown birth costs extra.
                    <br></br><br></br>
                    Want these animals for more... physical... jobs? Go through the proper channels to contact us directly and we 
                    will be happy to accomodate you!
                    </p>
                    <br></br>
                </div>
                <div className="aboutSect imageDivs">
                    <h2 className="text-center sectTitle">Our Mission: A New World</h2>
                    <p className="text-center">Humans and Dinosaurs are seperated by millions of years and now we are 
                    together at last. Our goal is to build a relationship with these almost mythical beasts of nature. A world 
                    filled with dinosaurs is something you've only ever read about in stories but now we have a world where 
                    dinosaurs exist. All we want is humans and dinosaurs to live side-by-side, to create a bond even greater than 
                    man and dog.
                    <br></br>
                    We also want to better understand the animals that once ruled the Earth, millons of years before humans walked 
                    its plains and constructed its towers. We seek to not only improve upon humanity but to humble it.
                    </p>
                    <br></br>
                </div>
                <div className="aboutSect imageDivs">
                    <h2 className="text-center sectTitle">The Challenges and Risks</h2>
                    <p className="text-center">We never said that owning a dinosaur would be easy. These animals require 
                    A LOT of space to roam around, they need to remain active or these is a "small" chance that they will become 
                    aggressive. Plenty of stimulation will be required! Fortunately, we do offer accessories, food and toys to make 
                    the transition easier for both you and the dino. Give these animals as much attention as you can. It will make 
                    imprinting on them at a young age much quicker and avoid any unnecessary injuries and bodily harm
                    <br></br><br></br>
                    This will not be like owning a dog, cat or even more exotic animals from our time. Our current lineup is much 
                    bigger, meaner and far more dangerous than anything you can imagine; but don't let that deter you! They can be 
                    loving and protective under the right circumstances, and believe us... no one will think twice of invading your 
                    home or doing you and your family harm, lest they get blinded and mauled by your pet Dilophosaurus. But, take 
                    great care around these animals. They are unpredictable and can be exceedingly vicious. We are not responsible 
                    for anythng that occurs after the animal leaves our facility.
                    <br></br><br></br>
                    We have dinosaurs that are proven tanks, have built in weapons, are faster than Cheetahs, stealthy in water, 
                    and feared by all. Take caution with these animals.
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
                    <p className="text-center">Your dinosaurs will be sent to you as infants to make both delivery 
                    and the transitions safer. Infant is highly recommended as it makes imprinting on the dinosaurs easier, thus 
                    they wil be more loyal to you. This has additional costs due to the care that comes with the adoption, but 
                    you will find it to be a much better route to go. It is a far greater risk to adopt a full grown, set in it's 
                    ways Raptor, as opposed to an infant that you can develop a stronger bond with. Of course, adults have the 
                    advantage of protection, savagery, and striking fear in the hearts of your enemies. 
                    <br></br><br></br>
                    These animals are not like yor typical ones, as we've already said. A lot more works needs to go into their 
                    training since these are more than just wild and exotic. With an infant, it wil be easier to accomplish this, 
                    but we make no promises if you choose to neglect your responsiblity to the dinosaur. It could easily rip you 
                    to sheds or crush your skull when it gets old enough, and you would do well to keep that in mind as you 
                    adopt and raise.
                    <br></br><br></br>
                    The above image shows a full-grown Raptor alongside an infant Raptor. AS you can see, the size difference is 
                    considerable and it doesn't take long for these Dinosaurs to grow to full size. The time you have to develop 
                    a bond will be limited, do not take your time in doing so! Spend time with your dinosaurs as much as possible!
                    </p>
                </div>

                <div id="captDinos" className="description imageDivs">
                    <h2 className="text-center sectTitle">Captivity and Breeding</h2>
                    <div className="homeDinos">
                        <img className="homeDinosPics"
                            src={CaptiveDinos}
                            alt="Captive Dinos"
                        />
                    </div>
                    <p className="text-center">The dinosaurs that we keep at our island facility are loved and 
                    cared for. We pride ourselves in the safety and understanding of these animals. We control any and all 
                    breeding, once the dinosaur is mature, and each dinosaur sent out is genetically modified so that they 
                    CANNOT breed. What that mean is if you want another dinosaur, you will have to adopt a new one. This 
                    is to avoid the dinosaurs proliferating outside of our control, and to also avoid any dino-related crises 
                    that could arise from unauthorized breeding. 
                    <br></br><br></br>
                    We normally breed for two sole reasons: demand and our personal supply. This is avoid ourselves being
                    overwhelmed. It may take up to 6 months to receive your adopted dino because they are bred when we receieve 
                    payment. It takes time for the eggs to be laid and for the infant to get used to the outside world so that it 
                    can properly eat, walk and function. Like a puppy that needs to be able to eat it's own food before you can 
                    take it home.
                    <br></br><br></br>
                    Safety is our top priority. We have tall, stone, electrificed fences that act as the pens to protect our staff, 
                    but we give the dinosaurs more than enough room to grow, roam and eat. In the above image, you can see two 
                    Brachiosauruses roaming in one of these pens. There is no fence in site because the pen is just that big. 
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
                    <p className="text-center">Currently we have 12 variety of dinosaurs that consist of 6 Carnivores 
                    and 6 Herbivores. For those who don't know, Carnivores have a meat based diet while Herbivores have a strictly 
                    plant-based diet, both of which we accomodate in our shop. Herbivores are far more self-sufficient since they 
                    eat plants, and only attack when threatened... normally. We consider these to be the "Easy Mode" of dinosaurs. 
                    Carnivores are much more malicious and are more like the "Expert Mode", and will you see as their next meal if 
                    not given the proper care. We have many options to suit your needs, as well as several that we haven't yet showcased yet.
                    <br></br><br></br>
                    They will cost money and time to raise, especially the Carnivores considering the threat they pose to you. 
                    Do not take any lightly, but if you choose to adopt a Carnivore take even more precautions. We have harnesses 
                    and muzzles available in our shop. We also recommend doing your own research before adopting to better understand 
                    the nature of these animals.
                    <br></br><br></br>
                    The above image shows several of our dinosaurs together in a pen. Of course, we typcially keep Carnivores in 
                    their own pens due to their more vicious nature. Herbivores, however, are more tolerant of other Herbivores, and 
                    typcially have no issues living within the same enclosure. Think "The Land Before Time" and all those dinosaurs 
                    living together in harmony, terrified of the dreaed "Sharp Teeth". Suprisingly, it's relatively accurate to the 
                    actual nature of these beasts.
                    </p>

                </div>

                <div id="escape" className="description imageDivs">
                    <h2 className="text-center sectTitle">Escape Protocol</h2>
                    <div className="homeDinos">
                        <img className="homeDinosPics"
                            src={DeadDino}
                            alt="Captive Dinos"
                        />
                    </div>
                    <p className="text-center">Unfortunately, escapes are bound to happen; whether it be from careless 
                    ownership or the dinosaur has gone rogue. To that end, we have a contingency plan 
                    to take care of the dinosaurs should they get free and begin harming other residents. Of course, we prefer 
                    that the dinosaurs return safely, but should they escape, we will know and be forced to kill it. Each animal is 
                    equipped with a sensor in their chests that we ourselves monitor. This isn't an attempt to spy on you, and we 
                    were given the full rights to do this, given the circumstances.
                    <br></br><br></br>
                    We will supply invisible fences to each owner to be placed around the animals living area, with a radius large 
                    enough for most ranches. Should the animal cross that fence, we will be alerted and will contact you immediately. 
                    We ask that, if the situation is under control that you answer or contact us promptly. After 10 minutes of no 
                    contact, we will send a powerful electric pulse into the heart of the dinosaur, stopping the heart and 
                    killing it. This is to protect your friends and neighbors.
                    <br></br><br></br>
                    In the end it will be your responsiblity and, should anything terrible happen, you will be charged to the fullest 
                    extent of the law. Our only rights is killing the dinosaur after 10 minutes of escape, but we waive all others to 
                    it after it leaves our facility. Please review your states dinosaur laws for more details.
                    </p>

                </div>
                
                <div id="future" className="description imageDivs">
                    <h2 className="text-center sectTitle">The Future of the DDAA</h2>
                    <div className="homeDinos">
                        <img className="homeDinosPics"
                            src={TRex}
                            alt="TRex"
                        />
                    </div>
                    <p className="text-center">The DDAA will keep growing and expanding our influence throughout the world. 
                    Eventually, we will be able to clone new species of dinosaur, and engineer them however we see fit to better 
                    transition into today's world. We will continue to spearhead this movement as we introduce these animals into 2022, 
                    millions of years after their original extinction, and in doing so will shape the entire world as we know it. The DDAA 
                    will continue to work tirelessly to meet these goals, and with that and mind we call on the support of not only the 
                    common folk, but the 1% as well! Help us to bring dinosaurs to you!
                    <br></br><br></br>
                    This process will not be easy and will definitely not be cheap. We ask that you adopt one of our Jurassic 
                    Creations and also visit our shop to by accessories, toys and food. By suporting us, you will support 
                    the bright future we seek to create! The more funds we gather, the more our business will expand, and the more 
                    dinosaurs you and your families will be able to enjoy.
                    <br></br><br></br>
                    As we've already stated, for more... involved... uses, we are easy to contact and you know who we are. We will 
                    work with whatever your needs are! We have different plans to suit your budget!
                    <br></br><br></br>
                    And yes, we do have a T-Rex. 
                    </p>
                </div>



            </section>
        
        </main>
        </div>
    )
}

export default Home;