import React from 'react';

export default function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <p>Score: {props.score}</p>
            <p>High Score: {props.highScore}</p>
        </div>
    );
}
