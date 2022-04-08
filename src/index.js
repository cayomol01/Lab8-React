import React from "react";
import reactDom from "react-dom";
import Board from "./Components/Board/Board.js";
import Card from "./Components/Card/card.js";
import fondo from "./Assets/Fondo.gif";
import theme from "./Assets/Theme1.mp3";
import './main.css'

document.body.style.backgroundImage = `url(${fondo})`
const tema = new Audio(theme);
tema.volume = 0.02;
tema.loop = true;
tema.autoplay = true;


reactDom.render(
    <Board/>,
    document.getElementById("root"),

);

