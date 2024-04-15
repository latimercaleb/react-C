import useState from 'react'
import './index.css'
function App() {
  const [bookData, setBookData] = useState([]);
  const handleAddNewBook = (newBook) => {
    setBookData([...bookData, newBook])
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>App 4: The bookstore</h1>
        <BookNew></BookNew>
        <BookShelf></BookShelf>
      </header>
    </div>
  );
}

export default App;
