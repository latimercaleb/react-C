import { useState } from "react";

function Search({ onSearch }) {
	const [usrInput, setusrInput] = useState('')
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log('Test');
		onSearch(usrInput);
	}

	const handleInputChange = (evt) => {
		setusrInput(evt.target.value)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleInputChange} value={usrInput}/>
			</form>
		</div>
	);
}

export default Search;
