import React from 'react'
// import TryAgain from '../TryAgain/TryAgain'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import './TestContainer.css'

const TestContainer = ({ words, characters, wpm }) => {
    return (
        <div className="test-container">
            {/* <div className="try-again-container">
                
                <TryAgain words={words}
                    characters={characters}
                    wpm={wpm}/>
            </div> */}
            <div className="test-container">
                
            <TypingChallenge words={words}
                    characters={characters}
                    wpm={wpm} />

            </div>
        </div>
    );
}

export default TestContainer;