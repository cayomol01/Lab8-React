/*create a card component with hooks*/
import React, { useState, useEffect } from 'react';
import './card.css';


export default function Card() {

    const [flipped, setFlipped] = useState(false);
    const [card, setCard] = useState('card');

    /*Create a function that changes the card className to "flipped"*/
    const flip = ($event) => {
        $event.preventDefault();
        let temp = card;
        if (temp === 'card is-flipped') {
            setCard('card');
        }
        else{
            setCard('card is-flipped');
        }
        console.log('clicked')
    }

    
    return (
        <>
            <div className="card-container">
                <div className={card} onClick={flip}>
                    <div className="carta card_front">Front</div>
                    <div className="carta card_back">Back</div>
                </div>
            </div>
        </>
    )
}