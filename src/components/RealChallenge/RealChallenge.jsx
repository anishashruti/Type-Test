import React from "react"
import Letter from "../Letter/Letter"
import "./RealChallenge.css"

const RealChallenge = ({    selectedParagraph,
    timerStarted,
    timeRemaining,
    words,
    characters,
    wpm,
    testInfo,
    inputValue,
}) => {
    //console.log(testInfo);
    return (
        
        <div className="real-challenge-container">
            <div className="timer-container">
                <p className="timer">00:{timeRemaining > 10 ? timeRemaining : `0${timeRemaining}` }</p>
                <p className="description">    
                     {!timerStarted && "Start Typing to start the test"}
                </p>
            </div>
            <div className="test-area">
                <div className="test-area-left">
                    <div className="test-area-paragraph">
                      
                        {
                            testInfo.map((individualLetterInfo,index) => {
                                return <Letter
                                    key={index}
                                    individualLetterInfo={individualLetterInfo} />
                            })
                         }
                    </div> 
                </div>
                <div className="test-area-right">
                    <textarea
                        className="typing-test"
                        placeholder="Start Typing.."
                        onChange={(e) => inputValue(e.target.value)}>                   
                    </textarea>
                </div>
            </div>
        </div>

    );

}

export default RealChallenge;