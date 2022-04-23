import React from "react";
import Abreath from "../../Assets/ABreath.jpg";
import Leave from "../../Assets/Leave.png";
import Panda from "../../Assets/Panda.jpg";
import Accompany from "../../Assets/Accompany.jpg";
import Pendulum from "../../Assets/Pendulum.png";
import Golden from "../../Assets/Golden.jpg";
import Card from "../Card/card";
import Logo from "../../Assets/HunterLogo.png";

import "./Board.css";

export default function Board() {
  const images = [Abreath, Leave, Panda, Accompany, Pendulum, Golden];
  let deck = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

  /* Fisher Yates algorithm */

  const shuffleArray = (array) => {
    const lista = array;
    for (let i = lista.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      lista[i] = lista[j];
      lista[j] = temp;
    }
    return lista;
  };

  deck = shuffleArray(deck);
  deck = deck.map((x) => (
    images[x]
  ));

  return (
    <>
      <img className="logo" src={`${Logo}`} alt="" />
      <h2 className="turnos">Turnos: 0</h2>
      <div className="board">
        {deck.map((x) => (
          <Card image={x} index={deck.indexOf(x)} even={null} />))}
      </div>
    </>
  );
}
