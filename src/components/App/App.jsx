import React from 'react';
import "./App.css"
import NavBar from "../NavBar/NavBar"
import LandingPage from '../Landing/LandingPage';
import Footer from '../Footer/Footer'
import ChallengeSection from '../ChallengeSection/ChallengeSection'
class App extends React.Component{
    render(){
        return (
            <div className="app">
                <NavBar />
                <LandingPage />
                <ChallengeSection/>
                <Footer />
            </div>
        );
    }
}

export default App;