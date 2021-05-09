import React from "react"
import TestContainer from "../TestContainer/TestContainer"
import './ChallengeSection.css'
const ChallengeSection = ({    selectedParagraph,
    timerStarted,
    timeRemaining,
    words,
    characters,
    wpm,
    testInfo,
    inputValue,
    startAgain,
}

) => {
    return (
        <div className="challenge-section-container">
            <h1 className="challenge-section-header">
                Take Your Speed Test Right Here &#x261F;
            </h1>
            <TestContainer words={words} characters={characters} wpm={wpm} selectedParagraph={selectedParagraph} timerStarted={timerStarted} timeRemaining={timeRemaining} testInfo={testInfo} inputValue={inputValue} startAgain={startAgain}/>
        </div>
    );
}

export default ChallengeSection;
