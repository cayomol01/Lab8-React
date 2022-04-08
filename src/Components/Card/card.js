/*create a card component with hooks*/
import React, { useState, useEffect } from 'react';
import flip_audio from '../../Assets/card_flip.mp3';
import correct from '../../Assets/correct.mp3';
import back from '../../Assets/Back.png';
import './card.css';
import theme from "../../Assets/Theme1.mp3";




let clicked = []
let same = []
let contador = 0
let nice = new Audio(correct);
let tema = new Audio(theme);
tema.volume = 0.2;

export default function Card({image,index}) {
    const [card, setCard] = useState(false);
    const audio = new Audio(flip_audio);

    let backStyle={
        backgroundImage:`url(${back})`,
        backgroundSize: 'cover',
        backgroundRepeat:'repeat',
        };
    let frontStyle ={
        backgroundImage:`url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
    
    }


    /*Create a function that changes the card className to "flipped"*/
    const flip = ($event) => {
        tema.play();
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
            if(!same.includes(parseInt(flipped.id))){
                flipped.className = 'card';
            }
        });

    }

    const match = (arr) =>{
        if(arr[0]===arr[1]){
            same.push(parseInt(arr[0]))
            same.push(parseInt(arr[1]))
            nice.play();
            if (same.length === 12){
                setTimeout(alert,1000,"Felicidades, has ganado!")
            }
            clicked = []
        }

        else{
            setTimeout(revert,1000,false)
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