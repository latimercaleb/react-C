import { useEffect, useContext } from 'react';
import BookNew from './components/BookNew';
import BookShelf from './components/BookShelf';
import LibraryContext from './context/books';

function App() {
	const ctx = useContext(LibraryContext);
	useEffect(() => {
		ctx.getBooks();
	}, []);

	/** Alternatively can leverage this to remove stale ref warning in console about missing dependency without recursive api calls, leverage useCallback() in provider
	 * 	useEffect(() => {
		ctx.stableLoadBooks();
	}, [ctx.stableLoadBooks]);
	 */

	return (
		<div className="app">
			<header className="App-header">
				<h1 className="title">App 4: The bookstore</h1>
				<BookNew></BookNew>
				<BookShelf></BookShelf>
			</header>
		</div>
	);
}

export default App;
