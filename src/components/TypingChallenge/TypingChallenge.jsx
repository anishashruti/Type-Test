import React from "react"
import './TypingChallenge.css'
import RealChallenge from "../RealChallenge/RealChallenge"
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard"

const TypingChallenge = ({    selectedParagraph,
    timerStarted,
    timeRemaining,
    words,
    characters,
    wpm,
    testInfo,
    inputValue
}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={ words}/>
                <ChallengeDetailsCard cardName="Characters" cardValue={ characters}/>
                <ChallengeDetailsCard cardName="Words Per Minute" cardValue={wpm} />
            </div>
            <div className="real-container">
                <RealChallenge words={words}
                    characters={characters}
                    wpm={wpm}
                    selectedParagraph={selectedParagraph}
                    timerStarted={timerStarted}
                    testInfo={testInfo}
                    timeRemaining={timeRemaining}
                    inputValue={inputValue}
                />
            </div>
        </div>

    );
}

export default TypingChallenge;