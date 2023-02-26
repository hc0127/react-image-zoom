import logo from './logo.svg';
import './App.css';
import ReactImageZoom from 'react-image-zoom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ReactImageZoom {...props} />, document.getElementById('react-app')
      </header>
    </div>
  );
}

export default App;
