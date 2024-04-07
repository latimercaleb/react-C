import logo from './logo.svg';
import './App.css';

function App() {
  const text = "Hello world!"
  const textColor = "teal"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b color='teal' style={{fontSize: "60px", color: "teal"}}>{text}</b>
        <input autoFocus></input>
        <input placeholder="hi there" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
