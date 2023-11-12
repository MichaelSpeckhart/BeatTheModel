import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import './App.css';
import lafpic from './leopards.png';
import lepic from './hawks.png';
import rivalry from './rivalry.png';
import football from './college_football.png';

const dataURL = "https://hcjsx6yqmh2qa76n3wg6eifj2a0odcja.lambda-url.us-east-1.on.aws/";

const generateRandomStats = () => {
  return {
    team1: Math.floor(Math.random() * 100),
    team2: Math.floor(Math.random() * 100),
  };
};


var featureValues;
const featureNames = [
  "Temperature (F)", "Raining?", "Lehigh Home?", "Last Year Win", "2 Years Ago Lehigh Won?", "3 Years Ago Lehigh Won?",
  "Lehigh Win Percentage", "Lafayette Win Percentage", "Avg Win Lehigh", "Diff"
];

const FeatureBox = ({ name, value }) => (
  <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
    <strong>{name}:</strong> {value}
  </div>
);

function App() {
  const [rounds, setRounds] = useState(0);
  const [stats, setStats] = useState(generateRandomStats());
  const [playerScore, setPlayerScore] = useState(0);
  const [modelScore, setModelScore] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null);
  const [features, setFeatures] = useState([]);
  const [winner, setWinner] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = () => {
    fetch(dataURL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Map feature names to their corresponding values
         featureValues = data.features.map((feature, index) => ({
          name: featureNames[index],
          value: feature
        }));

        featureValues.push({
          name: "Winner",
          value: data.winner === 0 ? "Lafayette" : "Lehigh"
        });

        featureValues.push({
          name: "prediction",
          value: data.prediction === 0 ? "Lafayette" : "Lehigh"
        });

        setFeatures(featureValues);
        setWinner(data.winner === 0 ? "Lafayette" : "Lehigh");
        setPrediction(data.prediction === 0 ? "Lafayette" : "Lehigh");
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    if (rounds === 10) {
      alert(`Game Over! Your score: ${playerScore}`);
      alert(`Game Over! Your score: ${modelScore}`);
      setRounds(0);
      setPlayerScore(0);
      setStats(generateRandomStats());
      setFeatures([]); // Clear features on game over
    }
  }, [rounds, playerScore]);

  const handleButtonClick = (selectedTeam) => {
    setSelectedButton(selectedTeam);
    console.log(winner);

    if (selectedTeam === winner) {
      setPlayerScore((prevScore) => prevScore + 1);
    }
    if (winner == prediction) {
      setModelScore((prevModelScore) => prevModelScore + 1);
    }

    setRounds((prevRounds) => prevRounds + 1);
    setStats(generateRandomStats());
    fetchStatistics(); // Fetch new features on each round
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: selectedButton === 'Lehigh' ? '#5C4033' : '#800000',
      }}
    >

      <h1>Le-Laf Beat The Model</h1>

      <div className='team-button'>
        <button
          onClick={() => handleButtonClick('Lafayette')}
          style={{
            padding: '10px',
            backgroundColor: selectedButton === 'Lafayette' ? '#A52A2A' : '#ddd',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Lafayette
        </button>
        <button
          onClick={() => handleButtonClick('Lehigh')}
          style={{
            padding: '10px',
            backgroundColor: selectedButton === 'Lehigh' ? '#6F4E37' : '#ddd',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Lehigh
        </button>
      </div>

      <div className="scoreboard">
        <p>Player Score: {playerScore}</p>
        <p>Model Score: {modelScore}</p>
        <progress value={rounds} max={10}></progress>
      </div>

      {/* Display features in boxes */}
      <div>
        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            name={feature.name}
            value={feature.value}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
