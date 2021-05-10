import React from 'react';
import './App.css';
import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraphs";
import NavBar from '../NavBar/NavBar';
import LandingPage from '../Landing/LandingPage';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const time = 60;
const surl ='https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text';
const defaultState={
  selectedParagraph: ' ',
  testInfo: [],
  timerStarted: false,
  timeRemaining: time,
  words: 0,
  characters: 0,
  wpm: 0,
};

class App extends React.Component {
  state = defaultState
  
  fetchNewParagraphFallback = () => {
    const information =
        SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];

    const selectedParagraphArray = information.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
        return {
            testLetter: selectedLetter,
            status: "not",
        };
    });

    // Update the testInfo in state
    this.setState({
        ...defaultState,
        selectedParagraph: information,
        testInfo,
    });
};

  fetchNewParagraph = () => {
    fetch(surl)
      .then((response) => response.text())
      .then((information) => {

        const selectedParaArray = information.split("");
        const testInfo = selectedParaArray.map(
          selectedLetter => {
            return {
              testLetter: selectedLetter,
              status: "not",
            };
          }
        );
        
        this.setState({
          ...defaultState,
          testInfo,
          selectedParagraph: information,
        });
      });
  };

  componentDidMount() {
    this.fetchNewParagraphFallback();
  }
  startAgain = () => this.fetchNewParagraphFallback();

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        const timeSpent = time - this.state.timeRemaining;
        const wpm =
                    timeSpent > 0
                        ? (this.state.words / timeSpent) * time
                        : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    
    }, 1000)
  };

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) this.startTimer();
    //console.log(this.state.timerStarted)

      const characters = inputValue.length;
      const words = inputValue.split(" ").length;
      const index = characters - 1;
    
    //setting the state of first letter as not attempted
    if (index < 0) {
      this.setState({
          testInfo: [
              {
                  testLetter: this.state.testInfo[0].testLetter,
                  status: "not",
          },
            //spread method
            //iterate over each array elemnt and put it in the method above
              ...this.state.testInfo.slice(1),
          ],
          characters,
          words,
      });

      return;
    }
    if (index >= this.state.selectedParagraph.length) {
      this.setState({
          characters,
          words,
      });
      return;
    }
    // Make a copy of test info 
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
        testInfo[index + 1].status = "not";

    // Check for mistake
    const isMistake = inputValue[index] === testInfo[index].testLetter;

    // Update the testInfo
    testInfo[index].status = isMistake ? "correct" : "incorrect";

    // Update the state
    this.setState({
        testInfo,
        words,
        characters,
    });
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <LandingPage />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          timerStarted={this.state.timerStarted}
          timeRemaining={this.state.timeRemaining}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          testInfo={this.state.testInfo}
          inputValue={this.handleUserInput}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
