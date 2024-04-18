import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const LibraryContext = createContext();

function CustomProvider({ children }) {
	const [message, setMessage] = useState('Hello from context!');
	const [bookData, setBookData] = useState([]);

	const loadBooks =  async() => {
		const resp = await axios.get('http://localhost:3001/books');
		setBookData(resp.data);
	};

	const stableLoadBooks = useCallback(loadBooks, []) // Could just wrap loadbooks with useCallback but its easier to read like this

	const handleAddNewBook = async (newBook) => {
		const resp = await axios.post('http://localhost:3001/books', {
			title: newBook,
		});
		setBookData([...bookData, resp.data]);
	};

	const handleDeleteBook = async (idToRemove) => {
		await axios.delete(`http://localhost:3001/books/${idToRemove}`);
		const newBookList = bookData.filter((book) => book.id !== idToRemove);
		setBookData(newBookList);
	};

	const handleEditBook = async (idToEdit, title) => {
		const resp = await axios.put(`http://localhost:3001/books/${idToEdit}`, {
			title,
		});
		const newBookList = bookData.map((book) => {
			if (book.id === idToEdit) {
				return { ...bookData, ...resp.data };
			}
			return book;
		});
		setBookData(newBookList);
	};

	const stateWrapper = {
		bookData,
		message,
		getBooks: () => loadBooks(),
		stableLoadBooks, // Note this will only work with a direct ref, referencing a ref like above will cause recursion bug
		handleAddNewBook,
		handleEditBook,
		handleDeleteBook,
	};

	return <LibraryContext.Provider value={stateWrapper}>{children}</LibraryContext.Provider>;
}

export { CustomProvider };
export default LibraryContext;
