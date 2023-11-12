// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// function Home() {
//     const [selectedButton, setSelectedButton] = useState(null);
// //   const navigate = useNavigate();

//   const handleButtonClick = (button) => {
//     setSelectedButton(button);
//   };
//   return (
//     <div
//         style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         background: selectedButton === 'Lehigh' ? '#5C4033' : '#800000',
//         color: '#fff',
//       }}
//       >

//       <h2>Le-Laf Beat The Model</h2>

//       <div>
//         <button
//           onClick={() => handleButtonClick('Lafayette')}
//           style={{
//             padding: '10px',
//             backgroundColor: selectedButton === 'Lafayette' ? '#A52A2A' : '#ddd',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             marginRight: '10px',
//           }}
//         >
//           Lafayette
//         </button>

//         <button
//           onClick={() => handleButtonClick('Lehigh')}
//           style={{
//             padding: '10px',
//             backgroundColor: selectedButton === 'Lehigh' ? '#6F4E37' : '#ddd',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           Lehigh
//         </button>
//       <Link to="/another-page">
//         <button>Game</button>
//       </Link>
//     </div>
//     </div>
//   );
// }

// export default Home;

import lafpic from './leopards.png'; 
import lepic from './hawks.png'; 
import rivalry from './rivalry.png'
import football from './college_football.png'
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="Intro"> 
      <ul className='list'>
          <li><a href="default.asp"><img src={rivalry} width="65px"></img></a></li>
          <li><a href="news.asp">Learn</a></li>
          <Link to="/another-page">
            <button>Beat The Model</button>
          </Link>
          {/* <li><a href="contact.asp" target="_blank" >Beat The Model</a></li> */}
      </ul>
      <header className="title">
        <img src={lafpic} className="Lafpic" alt="logo" />
        <img src={lepic} className="Lepic" alt="logo" />
        <h1>
          Beat The Model
        </h1>
      </header>
        <h2 className="text">
          Welcome to Beat The Model, an educational module that will teach you about statistics and statistical modeling by predicting the outcome of Lehigh-Lafayette football games. Click on the football to learn more!
        </h2>
    
        <a className="menu" href="./src/2ndpage.html" target="_blank" rel="noopener noreferrer"><img src={football} className="football" alt="football"></img></a>
    </div>
  );
}

export default Home;
