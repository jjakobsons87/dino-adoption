import React, { useState } from 'react';
import Card from '../Card';
import TRexImage from "../../assets/images/trex.jpg";
import SpinoImage from "../../assets/images/spinosaurus.png";
import RaptorImage from "../../assets/images/raptor.jpg";
import DilophImage from "../../assets/images/dilophosaurus.png";
import AlloImage from "../../assets/images/allosaurus.jpg";
import AnkylImage from "../../assets/images/ankylosaurus.jpg";
import BrontoImage from "../../assets/images/brontosaurus.jpg";
import ParaImage from "../../assets/images/parasaurilophus.jpg";
import StegaImage from "../../assets/images/stegasaurus.jpg";
import TriImage from "../../assets/images/Triceratops.jpg";
import PteroImage from "../../assets/images/pterandon.jpg";
import PachyImage from "../../assets/images/pachy.jpg";


export default function DinoList({ name }) {

    const [currentDino, setCurrentDino] = useState();
    // const [isCardOpen, setIsCardOpen] = useState(false);
    
    const [dinos] = useState([
        {
            name: 'Tyrannasaurus Rex',
            diet: 'Carnivore',
            source: TRexImage

        },
        {
            name: 'Spinosaurus',
            diet: 'Carnivore',
            source: SpinoImage
        },
        {
            name: 'Utahraptor',
            diet: 'Carnivore',
            source: RaptorImage
        },
        {
            name: 'Dilophosaurus',
            diet: 'Carnivore',
            source: DilophImage
        },
        {
            name: 'Allosaurus',
            diet: 'Carnivore',
            source: AlloImage
        },
        {
            name: 'Ankylosaurus',
            diet: 'Herbivore',
            source: AnkylImage
        },
        {
            name: 'Brachiosaurus',
            diet: 'Herbivore',
            source: BrontoImage
        },
        {
            name: 'Parasaurilophus',
            diet: 'Herbivore',
            source: ParaImage
        },
        {
            name: 'Stegasaurus',
            diet: 'Herbivore',
            source: StegaImage
        },
        {
            name: 'Triceratops',
            diet: 'Herbivore',
            source: TriImage
        },
        {
            name: 'Pterandon',
            diet: 'Carnivore',
            source: PteroImage
        },
        {
            name: 'Pachycepalosaurus',
            diet: 'Herbivore',
            source: PachyImage
        }
    ]);

    const currentDinos = dinos.filter(dino => dino.name === name);

    // const toggleCard = (image, i) => {
    //     setCurrentDino({...image, index:i})
    //     setIsCardOpen(!isCardOpen);
    // }

  return (
    <div>
        {isCardOpen && (
            <Card currentDino={currentDino} onClose={toggleCard} />
        )}
        <div>
            {currentDinos.map((dino, i) => ())}
        </div>

    </div>
  )
}
