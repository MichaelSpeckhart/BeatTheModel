import lafpic from './leopards.png'; 
import lepic from './hawks.png'; 
import football from './college_football.png'
import './App.css';

function App() {
  return (
    <div className="Intro"> 
      <ul>
          <li><a className="menu" href="default.asp">Home</a></li>
          <li><a className="menu" href="news.asp">Learn</a></li>
          <li><a className="menu" href="contact.asp" target="_blank" >Beat The Model</a></li>
        </ul>
      <header className="title">
        <img src={lafpic} className="Lafpic" alt="logo" />
        <img src={lepic} className="Lepic" alt="logo" />
        <h1>
          Beat The Model
        </h1>
      </header>
        <h2 className="text">
          Welcome to Beat The Model, an educational module that will teach you about statistics and statistical modeling by predicting the outcome of Lehigh-Lafayette football games.
        </h2>
    
        <a className="menu" href="./src/2ndpage.html" target="_blank" rel="noopener noreferrer"><img src={football} className="football" alt="football"></img></a>
    </div>
  );
}

export default App;
