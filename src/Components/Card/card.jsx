/* create a card component with hooks */
import React from "react";
import PropTypes from "prop-types";
import FlipAudio from "../../Assets/card_flip.mp3";
import correct from "../../Assets/correct.mp3";
import back from "../../Assets/Back.png";
import "./card.css";
import theme from "../../Assets/Theme1.mp3";

let clicked = [];
const same = [];
let contador = 0;
const nice = new Audio(correct);
const tema = new Audio(theme);
tema.volume = 0.2;

export default function Card({ image, index, even }) {
  const audio = new Audio(FlipAudio);
  let card;
  const backStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
  };

  const frontStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
  };

  const revert = () => {
    const flippers = document.querySelectorAll(".card.is-flipped");
    flippers.forEach((flipped) => {
      if (!same.includes(parseInt(flipped.id, 10))) {
        const flippin = flipped;
        flippin.className = "card";
      }
    });
  };

  const match = (arr) => {
    if (arr[0] === arr[1]) {
      same.push(parseInt(arr[0], 10));
      same.push(parseInt(arr[1], 10));
      nice.play();
      if (same.length === 12) {
        setTimeout(alert, 1000, "Felicidades, has ganado!");
      }
      clicked = [];
    } else {
      setTimeout(revert, 1000, false);
      clicked = [];
    }
  };
  /* Create a function that changes the card className to "flipped" */
  const flip = ($event) => {
    tema.play();
    if ($event.target.className === "carta card_back") {
      if (clicked.length < 2) {
        const ev = $event;
        clicked.push(parseInt(index, 10));
        ev.target.parentElement.className = "card is-flipped";

        if (clicked.length === 2) {
          match(clicked);
        }
        audio.play();
        contador += 1;
        document.getElementsByClassName("turnos")[0].innerHTML = `Turnos: ${contador}`;
      }
    }
  };

  return (
    <div className="card-container">
      <div className={`card ${card ? "is-flipped" : ""}`} onClick={flip} id={index} role="button" onKeyDown={even} tabIndex={0}>
        <div className="carta card_back" style={backStyle} />
        <div className="carta card_front" style={frontStyle} />
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  even: PropTypes.func.isRequired,
};
