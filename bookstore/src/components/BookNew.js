import { useState, useContext } from 'react';
import LibraryContext from '../context/books';
function BookNew() {
	const [bookTitle, setBookTitle] = useState('');
	const { handleAddNewBook } = useContext(LibraryContext);

	const handleNewBookTitle = (inputBookTitleEvent) => {
		const newBookTitle = inputBookTitleEvent.target.value;
		setBookTitle(newBookTitle);
	};

	const handleSubmit = (submitEvent) => {
		submitEvent.preventDefault();
		handleAddNewBook(bookTitle);
		setBookTitle('');
	};

	return (
		<div className="book-create">
			<h3>Add a new book</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="Book Create">Title</label>
					<input
						type="text"
						value={bookTitle}
						onChange={handleNewBookTitle}
						className="input"
					/>
					<button className="button">Create New Book</button>
				</div>
			</form>
		</div>
	);
}

export default BookNew;
