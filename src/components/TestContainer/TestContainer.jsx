import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import './TestContainer.css'

const TestContainer = (
    {
        selectedParagraph,
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
        <div className="test-container">
            {
                timeRemaining < 1  ?
                (
                     <div className="try-again-container">       
                        <TryAgain words={words}
                            characters={characters}
                                wpm={wpm}
                                startAgain={startAgain}
                            />
                            
                        </div> 
                ) :
                (
                        <div className="test-container">
                
                        <TypingChallenge words={words}
                                characters={characters}
                                wpm={wpm}
                                selectedParagraph={selectedParagraph}
                                timerStarted={timerStarted}
                                timeRemaining={timeRemaining}
                                testInfo={testInfo}
                                inputValue={inputValue}
                            />
            
                        </div>
                )
                    
            }
        </div>
    );
}

export default TestContainer;