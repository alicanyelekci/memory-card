import React from 'react';

export default function ResultPage({ score, onClick, status }) {
    return (
        <div className="result-page">
            {status === 'high' ? (
                <>
                    <p>New High Score!</p>
                    <p>Final Score: {score}</p>
                    <img
                        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW0xZGViNWpsbnZwbmxlMGh1bnZweWw4azZuczJvMXhqNzU1bHg3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vzoYZ7Ef9clbO/giphy.gif"
                        className="gif"
                    />
                </>
            ) : status === 'lose' ? (
                <>
                    <p>Game Over!</p>
                    <p>Final Score: {score}</p>
                    <img
                        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3lvd21tMG5kNGNubDN0Y3VqbjIza25lOHNoMHltczRzbGpxOTV0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hyyV7pnbE0FqLNBAzs/giphy.gif"
                        className="gif"
                    />
                </>
            ) : status === 'win' ? (
                <>
                    <p>You Won!</p>
                    <p>Final Score: {score}</p>
                    <img
                        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnFyZWFqdDd5ejB1b2RrMjRnY3Z0cWxnMnFrdW9sNm5leTQ1cnB5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0amJzVHIAfl7jMDos/giphy.gif"
                        className="gif"
                    />
                </>
            ) : null}

            <button onClick={onClick}>Restart</button>
        </div>
    );
}
