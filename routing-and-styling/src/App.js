import logo from './logo.svg';
import './App.css';
import Button from '../src/components/Button'
import { FiAperture } from "react-icons/fi";
import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      label: 'Hello',
      content: 'Testing Content'
    },
    {
      label: 'Something else',
      content: 'More Content'
    },
    {
      label: 'Final',
      content: 'Last Content'
    }
  ]
  function handleClick (){
    console.log('Clicked')
  }
  return (
    <div className="App">
      <Accordion displayData={items} />
    </div>
  );
}

export default App;
