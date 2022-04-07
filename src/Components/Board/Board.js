import React, {useState, useEffect} from 'react';
import Gon from '../../Assets/AngeredGon.jpg';
import Abreath from '../../Assets/ABreath.jpg';
import Leave from '../../Assets/Leave.png';
import Panda from '../../Assets/Panda.jpg';
import Accompany from '../../Assets/Accompany.jpg';
import Pendulum from '../../Assets/Pendulum.png';
import Genie from '../../Assets/Genie.png';
import Card from '../Card/card'; 
import flip_audio from '../../Assets/card_flip.mp3';

import './Board.css';


export default function Board() {

    const images = [Abreath,Leave,Panda,Accompany,Pendulum,Genie]

    const [turned, flip] = useState(false);

    const [carta,setCarta] = useState({
      image: Leave,
      flipped: false,
      found: false,
    });
    
    const audio = new Audio(flip_audio);

    const flipping = ($event) => {
      $event.preventDefault();

      let temp = carta.flipped
      let temp_image = carta.image
      let temp_found = carta.found

      setCarta({
        image:temp_image,
        flipped:!temp,
        found:temp_found

      })
      audio.play();
    }



    return (
      <>
      <h1>MEMORIA</h1>
        <div className="board">
            <Card image = {carta.image} flipped = {carta.flipped} func = {flipping}/>
            <Card image = {Abreath}/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <h1></h1>
        </div> 
      </>
    );
  }

