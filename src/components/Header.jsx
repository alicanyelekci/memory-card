import React from 'react';
import Scoreboard from './Scoreboard';

export default function Header({ score, highScore }) {
    return (
        <div className="header">
            <h1 className="title">office memory cards</h1>
            <Scoreboard score={score} highScore={highScore} />
        </div>
    );
}
