import React from 'react';

export default function Scoreboard(props) {
    return (
        <>
            <p>
                Score: {props.score} | Best Score: {props.highScore}
            </p>
        </>
    );
}
