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
          {/* <Link to="/another-page">
            <button>Beat The Model</button>
          </Link> */}
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
