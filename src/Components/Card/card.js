/*create a card component with hooks*/
import React, { useState, useEffect } from 'react';
import flip_audio from '../../Assets/card_flip.mp3';
import back from '../../Assets/Back.png';
import './card.css';


export default function Card({image}) {

    const [card, setCard] = useState(false);
    const audio = new Audio(flip_audio);

    /*Create a function that changes the card className to "flipped"*/
    const flip = ($event) => {
        $event.preventDefault();
        if(card===false){
            audio.play();
        }
        setCard(!card)

    }
    
    const backStyle={
            backgroundImage:`url(${back})`,
            backgroundSize: 'cover',
            };

    
    return (
        <>
        
            <div className="card-container">
                <div className={`card ${card ? 'is-flipped': ''}`} onClick={flip}>
                    <div className="carta card_back" style = {backStyle}></div>
                    <div className="carta card_front"></div>
                </div>
            </div>
        </>
    )
}