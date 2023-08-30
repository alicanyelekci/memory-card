import React, { useEffect, useState } from 'react';

import Card from './Card';
import charactersArr from './charactersArr';

export default function GamePage(props) {
    const [level, setLevel] = useState(1);
    const [stack, setStack] = useState([...charactersArr[level - 1]]);
    const [pickedCards, setPickedCards] = useState([]);

    useEffect(() => {
        if (pickedCards.length === stack.length) {
            if (level === 5) {
                props.gameWon();
            } else {
                setLevel(level + 1);
                setStack([...charactersArr[level]]);
                setPickedCards([]);
            }
        }
    }, [pickedCards]);

    function shuffle() {
        let array = stack;
        // Fisher-Yates shuffle
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setStack([...array]);
    }

    function handleCardPick(id) {
        if (pickedCards.length === 0) {
            setPickedCards([...pickedCards, id]);
            props.increaseScore();
        } else {
            const sameCard = pickedCards.filter((card) => card === id);
            if (sameCard.length > 0) {
                props.gameOver();
            } else {
                setPickedCards([...pickedCards, id]);
                props.increaseScore();
            }
        }
        shuffle();
    }

    return (
        <>
            <h2>Level {level}</h2>
            {stack.map((card) => {
                return <Card key={card.id} id={card.id} name={card.name} image={card.image} onClick={handleCardPick} />;
            })}
        </>
    );
}
