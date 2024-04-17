import { useState, useEffect } from 'react';
import BookNew from './components/BookNew';
import BookShelf from './components/BookShelf';
import axios from 'axios';
function App() {
	const [bookData, setBookData] = useState([]);
  const loadBooks = async() => {
    const resp = await axios.get('http://localhost:3001/books');
    setBookData(resp.data)
  }

  useEffect(() => {
    loadBooks();
  }, []);

	const handleAddNewBook = async (newBook) => {
    const resp = await axios.post('http://localhost:3001/books', {
      title: newBook
    });
    // console.log(resp);
		// console.log('In parent handler');
		// console.log(newBook);
		// const randID = Math.round(Math.random() * 9999);
		setBookData([...bookData, resp.data]);
		// console.log(bookData);
	};

	const handleDeleteBook = async (idToRemove) => {
    await axios.delete(`http://localhost:3001/books/${idToRemove}`);
		const newBookList = bookData.filter((book) => book.id !== idToRemove);
		setBookData(newBookList);
	};

	const handleEditBook = async (idToEdit, title) => {
    const resp = await axios.put(`http://localhost:3001/books/${idToEdit}`, {
      title
    });
		const newBookList = bookData.map((book) => {
			if (book.id === idToEdit) {
				return {...bookData, ... resp.data};
			}
			return book;
		});
		setBookData(newBookList);
	};

	return (
		<div className="app">
			<header className="App-header">
				<h1>App 4: The bookstore</h1>
				<BookNew newBook={handleAddNewBook}></BookNew>
				<BookShelf
					books={bookData}
					onDelete={handleDeleteBook}
          onEdit={handleEditBook}></BookShelf>
			</header>
		</div>
	);
}

export default App;
