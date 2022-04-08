import React, {useState, useEffect} from 'react';
import Gon from '../../Assets/AngeredGon.jpg';
import Abreath from '../../Assets/ABreath.jpg';
import Leave from '../../Assets/Leave.png';
import Panda from '../../Assets/Panda.jpg';
import Accompany from '../../Assets/Accompany.jpg';
import Pendulum from '../../Assets/Pendulum.png';
import Genie from '../../Assets/Genie.png';
import Card from '../Card/card'; 
import Logo from '../../Assets/HunterLogo.png';
import flip_audio from '../../Assets/card_flip.mp3';

import './Board.css';


export default function Board() {

    const images = [Abreath,Leave,Panda,Accompany,Pendulum,Genie]
    let deck = [0,0,1,1,2,2,3,3,4,4,5,5]
    let logos = new Image(Logo)


    /*Fisher Yates algorithm*/

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    deck = shuffleArray(deck)
    deck = deck.map((x)=> (
      images[x]
    ))



    return (
      <>
      <img className = "logo" src = {`${Logo}`}/>
      <h2 className = 'turnos'>Turnos: 0</h2>
        <div className="board">
        {deck.map((x)=> (
            <Card image={x} index = {deck.indexOf(x)}/>))
            }
        </div> 
      </>
    );
  }

