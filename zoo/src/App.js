import { useState } from "react";
import Show from './Show';
import './App.css';
function getRandAnimal() {
  const animals = ['bird', 'cat', 'dog', 'horse', 'cow', 'snake', 'rat'];
  const randNum = Math.floor(Math.random() * animals.length);
  return animals[randNum]
}

function App() {
  const [counter, setCounter] = useState(0);
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    console.log('Click evt');
    setCounter(counter + 1);
    console.log(getRandAnimal())
    setAnimals([...animals, getRandAnimal()])
  }
  return (
    <div className="App">
      <p className="title">Sample App 2: Zoo App</p>
      <button onClick={handleClick}>Add Animal</button>
      <Show animalType={animals}></Show>
      <p>Number of animals: {counter}</p>
    </div>
  );
}

export default App;
