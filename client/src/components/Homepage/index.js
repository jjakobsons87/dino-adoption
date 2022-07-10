import React from 'react';
import RaptorBaby from '../../assets/homepage/raptorbaby.webp'

function Homepage() {
    return (

        <main>

            <h1 className="mainPageTitle text-center font-weight-bold">The Delusional Dinosaur Adoption Agency</h1>

            <div id="siteDesc">
                <div className="description">
                    <h2 className="text-center sectTitle">The DDAA: Dino Engineering</h2>
                    <p className="text-center text-white">After many years of research, the Delusional Dinosaur Adoption Agency, or DDAA, have "acquired" genuine Dino DNA through very specific, non Government related channels. Thanks to the hard work of us and others, you too now have the distinct opportunity of owning your very own dinosaur! From the Tyrant King itself, the Tyrannasauus Rex, to the legendary long-neck, the Brachiosaurus, we have many options to choose from! Our organization is funded publicly by contributors and dinosaur lovers all over the world. This is a chance for, after millions of years of seperation, dinosaurs and humans to live alongside one another. It's a dream come true for many.
                    <br></br><br></br>
                    Experience may vary, modifying DNA to control the size of your dinosaur at birth costs extra.
                    <br></br><br></br>
                    We DO NOT condone these animals for military use.
                    </p>
                </div>
            </div>

            <section>

            <div className="description">
                    <h2 className="text-center sectTitle">The Challenges</h2>
                    <p className="text-center text-white">We never said that owning a dinosaur would be easy. These animals require A LOT of space to roam around, they need to remain active or these is a "small" chance that they will become aggressive. Plenty of stimulation will be required! Fortunately, we do offer accessories, food and toys to make the transition easier for both you and the dino.
                    <br></br><br></br>
                    This will not be like owning a dog, cat or even more exotic animals from our time. Are current lineup is far bigger, meaner and far more dangerous than anything you can imaging; but don't let that deter you! They can be loving and protective under the right circumstances, and believe us... no one will think twice of invading your home or doing you and your family harm, lest they get blinded and mauled by your pet Dilophosaurus.
                    </p>
            </div>

            <div id="birthDiv" className="description">
                    <h2 className="text-center sectTitle">Adopt from birth to adult</h2>
                    <div className="homeDinos">
                        <img className="homeDinosPics"
                            src={RaptorBaby}
                            alt="Infant Raptor"
                        />
                    </div>
                    <p className="text-center text-white">You have two adoptions in terms of the age that you will purchase: fully grown or the infant stage. Infant is recommended as it makes imprinting on the dinosaurs easier, thus they wil be more loyal to you. This has additional costs due to the care that comes with the adoption, but you will find it to be a much better route to go. It is a far greater risk to adopt a full grown, set in it's ways Raptor, as opposed to an infant that you can develop a stronger bond with. Of course, adults have the advantage of protection, savagery, and striking fear in the hearts of your enemies. 
                    </p>
                </div>
            </section>
        
        </main>
    )
}

export default Homepage;