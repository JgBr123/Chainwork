import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <strong>This is the first commit out of many.</strong><br/>
          Here, The Blockchain Network starts it's journey.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by React
        </a>
      </header>
    </div>
  );
}

export default App;
