import Search from './Search';
import searchImg from './Api';
import List from './List';
import { useState } from 'react';
import 'bulma';
// TODO: Try out some styling with either bulma or tailwind run it and take some pics, of the pics that you render

function App() {
	const [imgMap, setImgMap] = useState([]);

	const handleSearch = async (query) => {
		console.log(`Search on: ${query}`);
		const imgList = await searchImg(query);
		setImgMap([...imgMap, ...imgList]);
		console.log(imgMap);
	};

	return (
		<div className="m-4 p-2">
			<h1 className="is-size-2 has-text-weight-semibold">App 3: Google search clone</h1>
			<div className="p-4 m-4">
				<Search onSearch={handleSearch}></Search>
				<List imgs={imgMap}></List>
			</div>
		</div>
	);
}

export default App;
