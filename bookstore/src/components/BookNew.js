import { useState } from 'react';
function BookNew({ newBook }) {
	const [bookTitle, setBookTitle] = useState('');
	const handleNewBookTitle = (inputBookTitleEvent) => {
		console.log(inputBookTitleEvent);
		const newBookTitle = inputBookTitleEvent.target.value;
		setBookTitle(newBookTitle);
	};
	const handleSubmit = (submitEvent) => {
		console.log(submitEvent);
		submitEvent.preventDefault();
		newBook(bookTitle);
		setBookTitle('');
	};
	return (
		<div className='book-create'>
            <h3>Add a new book</h3>
			<form onSubmit={handleSubmit}>
				<div >
					<label htmlFor="Book Create" >Title</label>
					<input
						type="text"
						value={bookTitle}
						onChange={handleNewBookTitle}
                        className='input'
					/>
					<button className='button'>Create New Book</button>
				</div>
			</form>
		</div>
	);
}

export default BookNew;
