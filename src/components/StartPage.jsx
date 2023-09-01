import React from 'react';

export default function StartPage({ onClick }) {
    return (
        <div className="start-page">
            <p>Pick a card, but not the same one twice.</p>
            <img
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTgwbjMwbXhvampxaDdraTR4N2sweXJiM2E0bWl6bmN2a2FpdWVpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/da75JuW2HHuBNqOHHE/giphy.gif"
                className="gif"
            />
            <button onClick={onClick}>Start Game</button>
        </div>
    );
}
