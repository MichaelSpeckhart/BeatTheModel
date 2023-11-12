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

const FeatureBox = ({ label, value }) => (
  <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
    <strong>{label}:</strong> {value}
  </div>
);

function App() {
  const [rounds, setRounds] = useState(0);
  const [stats, setStats] = useState(generateRandomStats());
  const [playerScore, setPlayerScore] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null);
  const [features, setFeatures] = useState([]);

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
        // Extract features and set them in the state
        setFeatures(data.features.map((feature, index) => ({ label: `Feature ${index + 1}`, value: feature })));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    if (rounds === 10) {
      alert(`Game Over! Your score: ${playerScore}`);
      setRounds(0);
      setPlayerScore(0);
      setStats(generateRandomStats());
      setFeatures([]); // Clear features on game over
    }
  }, [rounds, playerScore]);

  const handleButtonClick = (selectedTeam) => {
    setSelectedButton(selectedTeam);
    const winner = stats.team1 > stats.team2 ? 'Lafayette' : 'Lehigh';

    if (selectedTeam === winner) {
      setPlayerScore((prevScore) => prevScore + 1);
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
      <div className="game-info">
        <p>Round: {rounds}/10</p>
        <div className="team-stats">
          <div className="team-stat">
            <strong>Team 1 Stats:</strong> {stats.team1}
          </div>
          <div className="team-stat">
            <strong>Team 2 Stats:</strong> {stats.team2}
          </div>
        </div>
      </div>

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
        <progress value={rounds} max={10}></progress>
      </div>

      {/* Display features in boxes */}
      <div>
        {features.map((feature, index) => (
          <FeatureBox key={index} label={feature.label} value={feature.value} />
        ))}
      </div>
    </div>
  );
}

export default App;
