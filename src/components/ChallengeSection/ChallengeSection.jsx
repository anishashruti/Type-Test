import React from "react"
import TestContainer from "../TestContainer/TestContainer"
import './ChallengeSection.css'
const ChallengeSection = () => {
    return (
        <div className="challenge-section-container">
            <h1 className="challenge-section-header">
                Take Your Speed Test Right Here &#x261F;
            </h1>
            <TestContainer words={4} characters={24} wpm={5}/>
        </div>
    );
}

export default ChallengeSection;