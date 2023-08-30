import React from 'react';
import Scoreboard from './Scoreboard';
import logo from '../assets/img/dunder-mifflin.jpg';

export default function Header({ score, highScore }) {
    return (
        <>
            <img src={logo} />
            <h1>Office Memory</h1>
            <Scoreboard score={score} highScore={highScore} />
        </>
    );
}
