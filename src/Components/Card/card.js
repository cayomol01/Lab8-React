/*create a card component with hooks*/
import React, { useState, useEffect } from 'react';
import flip_audio from '../../Assets/card_flip.mp3';
import back from '../../Assets/Back.png';
import './card.css';



let clicked = []
let same = []
let comparador = []
let contador = 0

export default function Card({image,index}) {
    const [card, setCard] = useState(false);
    const [pointer, setPointer] =  useState({
        pointerEvent: 'auto'
    })
    const audio = new Audio(flip_audio);

    let backStyle={
        backgroundImage:`url(${back})`,
        backgroundSize: 'cover',
        };
    let frontStyle ={
        backgroundImage:`url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
}


    const revertir = () =>{
        const flippers = document.querySelectorAll('.card.is-flipped');
        flippers.forEach(flipped => {
          flipped.style.pointerEvents = 'none';
        });
    }
    /*Create a function that changes the card className to "flipped"*/
    const flip = ($event) => {
        console.log($event.target.parentElement)
        if($event.target.className === 'carta card_back'){
            if (clicked.length <2){
                clicked.push(parseInt(index))
                $event.target.parentElement.className = 'card is-flipped';
            
                if(clicked.length===2){
                    match(clicked)
                }
                audio.play();
                document.getElementsByClassName('turnos')[0].innerHTML = "Turnos: " + ++contador
            }
        }

    }
    
    const revert = () =>{
       
        const flippers = document.querySelectorAll('.card.is-flipped');
        flippers.forEach(flipped => {
            console.log(flipped.id)
            console.log(same[0])
            console.log(same[0]-flipped.id === 0)
            if(same.includes(parseInt(flipped.id))){
            }
            else{
                flipped.className = 'card';
            }
        });

    }

    const match = (arr) =>{
        if(arr[0]===arr[1]){
            console.log(arr)
            same.push(parseInt(arr[0]))
            same.push(parseInt(arr[1]))
            console.log(same)
            if (same.length === 12){
                alert('¡Ganaste!')
            }
            clicked = []
        }

        else{
            setTimeout(revert,2000,false)
            clicked = []

        }
    }


    
    return (
        <>
        
            <div className="card-container">
                <div className={`card ${card ?'is-flipped': ''}`} onClick={flip} id = {index}>
                    <div className="carta card_back" style = {backStyle}></div>
                    <div className="carta card_front" style = {frontStyle}></div>
                </div>
            </div>
        </>
    )
}