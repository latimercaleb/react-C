import { useState } from 'react';

function BookEdit({ defaultTitle, saveTitle }) {
	const [title, setTitle] = useState(defaultTitle);

	const handeSubmit = (evt) => {
		evt.preventDefault();
		saveTitle(title);
		setTitle('');
	};
	return (
		<div>
			<form
				className="book-edit"
				onSubmit={handeSubmit}>
				<label>Title</label>
				<input
					className="input"
					onChange={(e) => setTitle(e.target.value)}
					value={title}></input>
				<button className="button is-primary">Save</button>
			</form>
		</div>
	);
}

export default BookEdit;
