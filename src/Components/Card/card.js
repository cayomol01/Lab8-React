/*create a card component with hooks*/
import React, { useState, useEffect } from 'react';
import back from '../../Assets/Back.png';
import './card.css';


export default function Card({image,flipped,func,estilo}) {


    /*Create a function that changes the card className to "flipped"*/

    
    const backStyle={
            backgroundImage:`url(${back})`,
            backgroundSize: 'cover',
            };
    const frontStyle ={
        backgroundImage:`url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    
    return (
        <>
        
            <div className="card-container">
                <div className={`card ${flipped ? 'is-flipped': ''}`} onClick={func} style = {estilo}>
                    <div className="carta card_back" style = {backStyle}></div>
                    <div className="carta card_front" style = {frontStyle}></div>
                </div>
            </div>
        </>
    )
}