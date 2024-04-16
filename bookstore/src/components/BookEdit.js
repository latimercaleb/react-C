import { useState } from 'react';
function BookEdit({defaultTitle, saveTitle,}) {
	const [title, setTitle] = useState(defaultTitle);
	const handeSubmit = (evt) => {
		evt.preventDefault();
        console.log(title);
        setTitle('');
        saveTitle(title)
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
