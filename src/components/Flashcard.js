import React, { useState } from 'react';
import './Flashcard.css'

const Flashcard = ({ flashcard }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <>
<h1 style={{marginLeft:"30px"}}>FLASH CARDS</h1>        <div className="flashcard-container">
            <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
                <div className="front">
                    <p>{flashcard.question}</p>
                    <button className="reveal-btn" onClick={handleFlip}>Reveal Answer</button>
                </div>
                <div className="back">
                    <p>{flashcard.answer}</p>
                    <button className="reveal-btn" onClick={handleFlip}>Back to Question</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Flashcard;
