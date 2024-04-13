import { useState } from 'react';
import 'bulma';

function Search({ onSearch }) {
	const [usrInput, setusrInput] = useState('');
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log('Event hit');
		onSearch(usrInput);
	};

	const handleInputChange = (evt) => {
		setusrInput(evt.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label
						className="label"
						htmlFor="searchText">
						Search Query
					</label>
					<div className="control">
						<input
							onChange={handleInputChange}
							value={usrInput}
							type="text"
							className="is-info input"
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Search;
