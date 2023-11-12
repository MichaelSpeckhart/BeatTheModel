import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
    const [selectedButton, setSelectedButton] = useState(null);
//   const navigate = useNavigate();

  const handleButtonClick = (button) => {
    setSelectedButton(button);
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
        color: '#fff',
      }}
      >

      <h2>Le-Laf Beat The Model</h2>

      <div>
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
      <Link to="/another-page">
        <button>Game</button>
      </Link>
    </div>
    </div>
  );
}

export default Home;
