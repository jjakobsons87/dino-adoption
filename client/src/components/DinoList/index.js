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
    const [isCardOpen, setIsCardOpen] = useState(false);
    
    const [dinos] = useState([
        {
            name: 'Tyrannasaurus Rex',
            diet: 'Carnivore',

        },
        {
            name: 'Spinosaurus',
            diet: 'Carnivore'
        },
        {
            name: 'Utahraptor',
            diet: 'Carnivore'
        },
        {
            name: 'Dilophosaurus',
            diet: 'Carnivore'
        },
        {
            name: 'Allosaurus',
            diet: 'Carnivore'
        },
        {
            name: 'Ankylosaurus',
            diet: 'Herbivore'
        },
        {
            name: 'Brachiosaurus',
            diet: 'Herbivore'
        },
        {
            name: 'Parasaurilophus',
            diet: 'Herbivore'
        },
        {
            name: 'Stegasaurus',
            diet: 'Herbivore'
        },
        {
            name: 'Triceratops',
            diet: 'Herbivore'
        },
        {
            name: 'Pterandon',
            diet: 'Carnivore'
        },
        {
            name: 'Pachycepalosaurus',
            diet: 'Herbivore'
        }
    ]);

    const currentDinos = dinos.filter(dino => dino.name === name);

    const toggleCard = (image, i) => {
        setCurrentDino({...image, index:i})
        setIsCardOpen(!isCardOpen);
    }

  return (
    <div>
        {isCardOpen && (
            <Card currentDino={currentDino} onClose={toggleCard} />
        )}

    </div>
  )
}
