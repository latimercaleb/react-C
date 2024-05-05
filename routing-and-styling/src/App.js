import './App.css';
import Dropdown from './components/Dropdown';
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
  function handleClick (){
    console.log('Clicked')
  }
  return (
    <div className="App">
      <Dropdown options ={items} />
    </div>
  );
}

export default App;
