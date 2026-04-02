import './App.css';
import Dropdown from './components/Dropdown';
import {useState} from 'react';
function App() {
  const items = [
    {
      label: 'Hello',
      value: 'x'
    },
    {
      label: 'Goodbye',
      value: 'x2'
    },
    {
      label: 'Suprise',
      value: 'x3'
    }
  ]

  const [selection, setSelection] = useState(null);

  const handleSelect = (newOpt) => {
    setSelection(newOpt);
  } 

  function handleClick (){
    console.log('Clicked')
  }
  return (
    <div className="App">
      <label>Custom Dropdown Basic</label>
        <Dropdown options ={items} select={selection} onSelect ={handleSelect}/>
    </div>
  );
}

export default App;
