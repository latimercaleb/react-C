import Search from './Search';

const handleSearch = (query) => {
  console.log(`Search on: ${query}`)
}

function App() {
  return (
    <div className="App">
      <p>App 3: Google search clone</p>
      <Search onSearch={handleSearch}></Search>
    </div>
  );
}

export default App;
