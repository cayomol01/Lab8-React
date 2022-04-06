import React from "react";
import reactDom from "react-dom";
import Board from "./Components/Board/Board.js";
import Card from "./Components/Card/card.js";
import fondo from "./Assets/Fondo.gif"
import './main.css'

document.body.style.backgroundImage = `url(${fondo})`

reactDom.render(
    <Board/>,
    document.getElementById("root"),

);

