import BookEdit from './BookEdit';
import { useState, useContext } from 'react';
import LibraryContext from '../context/books';

function Book({ book}) {
	const [showEdit, setShowEdit] = useState(false);
    const {handleDeleteBook, handleEditBook} = useContext(LibraryContext);
	
	const handleClick = () => {
		handleDeleteBook(book.id);
	};

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleSaveTitle = (newTitle) => {
		setShowEdit(!showEdit);
		handleEditBook(book.id, newTitle);
	};

	let content = <h3>{book.title}</h3>;
	if (showEdit) {
		content = (
			<BookEdit
				defaultTitle={book.title}
				saveTitle={handleSaveTitle}></BookEdit>
		);
	}

	return (
		<div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={book.title}></img>
			<div>{content}</div>
			<div className="actions">
				<button
					onClick={handleEditClick}
					className="edit">
					Edit
				</button>
				<button
					onClick={handleClick}
					className="delete">
					Delete
				</button>
			</div>
		</div>
	);
}

export default Book;
