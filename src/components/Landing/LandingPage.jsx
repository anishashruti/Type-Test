import React from 'react'
import "./LandingPage.css"
import im from "./../../Assets/Naruto.png"
import Typewriter from 'typewriter-effect';

const LandingPage = () => {
    return (
        <div className="Landing-container">
            <div  className="Landing-Left">
                <h1 className="LandingHeader">
                    Can You Type...
                </h1>

                <div className="Typewriter-container">
                <Typewriter
                options={{
                    strings: ['Fast?', 'Correct?','Quick?'],
                    autoStart: true,
                    loop: true,
                }}
                />
                </div>
            </div>
            <div className="Landing-Right">
                <img className="Image" src={im} alt="naruto"></img>
            </div>

        </div>
        );
}

export default LandingPage;