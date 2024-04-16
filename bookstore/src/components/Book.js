import BookEdit from './BookEdit';
import { useState } from 'react';
function Book({ book, deleteBook }) {
	const [showEdit, setShowEdit] = useState(false);
	const handleClick = () => {
		deleteBook(book.id);
	};

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

    const handleSaveTitle = (newTitle) => {
        console.log(newTitle);
		setShowEdit(!showEdit);
	};

	let content = <h3>{book.title}</h3>;
	if (showEdit) {
		content = <BookEdit defaultTitle={book.title} saveTitle={handleSaveTitle}></BookEdit>;
	}
	return (
		<div className="book-show">
			<div >{content}</div>
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
