import logo from './logo.svg';
import './App.css';
import Button from './Button'
import { FiAperture } from "react-icons/fi";

function ButtonPage() {
  function handleClick (){
    console.log('Clicked')
  }
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
      </header>
      <div>
        <h1 className='opener'>App 5: The component library</h1>

        <Button primary onClick={handleClick}>
          <FiAperture></FiAperture>
          Test 1
        </Button>
      </div>
      <div>
        <Button secondary>Two 2</Button>
      </div>
      <div>
        <Button success>3</Button>
      </div>
      <div>
        <Button warning>4</Button>
      </div>
      <div>
        <Button danger>5</Button>
      </div>
      <div>
        <Button success rounded outlined>6</Button>
      </div>
      <div>
        <Button success rounded>7</Button>
      </div>
      <div>
        <Button primary outlined>8</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
