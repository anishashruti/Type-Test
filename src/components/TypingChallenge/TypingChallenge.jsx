import React from "react"
import './TypingChallenge.css'
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard"

const TypingChallenge = ({ words, characters, wpm }) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={ words}/>
                <ChallengeDetailsCard cardName="Characters" cardValue={ characters}/>
                <ChallengeDetailsCard cardName="Words Per Minute" cardValue={wpm} />
            </div>
            {/* <div className="challenges-container">
            
            </div> */}
            <div className="real-container">
            <p>The real challenge</p>
            </div>
        </div>

    );
}

export default TypingChallenge;