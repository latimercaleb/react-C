import { useState } from 'react';
import BookNew from './components/BookNew';
import BookShelf from './components/BookShelf';
function App() {
	const [bookData, setBookData] = useState([]);

	const handleAddNewBook = (newBook) => {
		console.log('In parent handler');
		console.log(newBook);
		const randID = Math.round(Math.random() * 9999);
		setBookData([...bookData, { id: randID, title: newBook }]);
		console.log(bookData);
	};

	const handleDeleteBook = (idToRemove) => {
		const newBookList = bookData.filter((book) => book.id !== idToRemove);
		setBookData(newBookList);
	};

	const handleEditBook = (idToEdit, title) => {
		const newBookList = bookData.map((book) => {
			if (book.id === idToEdit) {
				return { ...book, title };
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
