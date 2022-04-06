import React, {useState, useEffect} from 'react';
import Card from '../Card/card';
import './Board.css';


export default function Board() {

    return (
      <>
      <h1>MEMORIA</h1>
        <div className="board">
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
            <Card/>
            <Card/>
        </div> 
      </>
    );
  }

