import React from 'react';
import RaptorBaby from '../../assets/homepage/raptorbaby.webp'

function Homepage() {
    return (

        <main>

            <h1 className="mainPageTitle text-center font-weight-bold">The Delusional Dinosaur Adoption Agency</h1>

            <div id="siteDesc">
                <div className="description">
                    <h2 className="text-center sectTitle">The DDAA: True innovation</h2>
                    <p className="text-center text-white">After many years of research, the Delusional Dinosaur Adoption Agency, or DDAA, has "acquired" genuine Dino DNA through very specific, non Government related channels. Thanks to the hard work of us and others. you too now have the distinct opportunity of owning your very own dinosaur! Fron the Tyrant King itself, the Tyrannasauus Rex, to the legendary long-neck, the Brachiosaurus, we have many options to choose from! 
                    <br></br><br></br>
                    Experience may vary, modifying DNA to control the size of your dinosaur at birth costs extra.
                    </p>
                </div>
            </div>

            <section>

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