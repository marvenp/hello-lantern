import logo from './lanternLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Join <code>Lantern</code> and get your client exciting Deals, ARTEM!
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know Lantern
        </a>
      </header>
    </div>
  );
}

export default App;
