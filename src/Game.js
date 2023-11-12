import React, { useState, useEffect } from 'react';
import './Game.css'; 

var jsonFilePath = "/gamedata.json";

const generateRandomStats = () => {
  return {
    team1: Math.floor(Math.random() * 100),
    team2: Math.floor(Math.random() * 100),
  };
};





const parseJson = () => {
    fetch(jsonFilePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(jsonData => {
        const gameDataList = jsonData.map(item => ({
          lehigh_win: item.lehigh_win,
          temperature: item.temperature,
          precipitation: item.precipitation,
          lehigh_home: item.lehigh_home,
          prev_result_1: item.prev_result_1,
          prev_result_2: item.prev_result_2,
          prev_result_3: item.prev_result_3,
          lehigh_win_perc: item.lehigh_win_perc,
          laf_win_perc: item.laf_win_perc,
          win_perc_3: item.win_perc_3,
          diff: item.diff
        }));
        console.log(gameDataList);
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  };


const LafGame = () => {
  const [rounds, setRounds] = useState(0);
  const [stats, setStats] = useState(generateRandomStats());
  const [playerScore, setPlayerScore] = useState(0);



  parseJson();
  useEffect(() => {
    if (rounds === 10) {
      alert(`Game Over! Your score: ${playerScore}`);
      setRounds(0);
      setPlayerScore(0);
      setStats(generateRandomStats());
    }
  }, [rounds, playerScore]);

  const handleButtonClick = (selectedTeam) => {
    const winner = stats.team1 > stats.team2 ? 'team1' : 'team2';

    if (selectedTeam === winner) {
      setPlayerScore((prevScore) => prevScore + 1);
    }

    setRounds((prevRounds) => prevRounds + 1);
    setStats(generateRandomStats());
  };

  return (
    <div className="app-container">
      <h1>Football Game Guessing Game</h1>
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
      <div className="buttons">
        <button className="team-button" onClick={() => handleButtonClick('team1')}>
          Guess Team 1
        </button>
        <button className="team-button" onClick={() => handleButtonClick('team2')}>
          Guess Team 2
        </button>
      </div>
      <div className="scoreboard">
        <p>Player Score: {playerScore}</p>
        <progress value={rounds} max={10}></progress>
      </div>
    </div>
  );
};

export default LafGame;
