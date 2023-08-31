import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';
import ResultPage from './components/ResultPage';
import Footer from './components/Footer';
import background from './assets/img/background.jpg';

function App() {
    const [gameStage, setGameStage] = useState('start');
    const [score, setScore] = useState(0);
    const [status, setStatus] = useState('');
    const [highScore, setHighScore] = useState(() => {
        const localValue = localStorage.getItem('HighScore');
        if (localValue === null) return 0;

        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem('HighScore', JSON.stringify(highScore));
    }, [highScore]);

    function increaseScore() {
        setScore(score + 1);
    }

    function gameOver() {
        setStatus('lose');
        if (score > highScore) {
            setHighScore(score);
            setStatus('high');
        }
        setGameStage('over');
    }

    function gameWon() {
        setStatus('win');
        if (score > highScore) {
            setHighScore(score);
        }
        setGameStage('over');
    }

    function restartGame() {
        setGameStage('game');
        setScore(0);
    }

    return (
        <div className="container">
            <Header className="header" score={score} highScore={highScore} />
            <div className="body">
                <img src={background} className="background-img" />
                {gameStage === 'start' ? (
                    <StartPage onClick={() => setGameStage('game')} />
                ) : gameStage === 'game' ? (
                    <GamePage increaseScore={increaseScore} gameOver={gameOver} gameWon={gameWon} />
                ) : (
                    <ResultPage onClick={restartGame} score={score} status={status} />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;
