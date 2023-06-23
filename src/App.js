
import './App.css';
import logo from './lanternLogo.svg';

function App() {
  return (
    <div className="App">
       <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Join <code>Lantern</code> and get your client exciting Deals, {process.env.REACT_APP_USERNAME || "Username"}!
        </p>
        <a
          className="App-link"
          href="/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know Lantern
        </a>
        <p>Solutions Team: {process.env.REACT_APP_COMPANY_NAME || "Company Name"}</p>
        <p>Solutions Manager: {process.env.REACT_APP_ARTEM || "Company Name"}</p>
      </header>
    </div>
    </div>
    
  );
}

export default App;
