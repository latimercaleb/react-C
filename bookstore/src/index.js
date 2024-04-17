import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LibraryContext from './context/books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<LibraryContext.Provider value={"Hello World"}>
			<App />
		</LibraryContext.Provider>
	</React.StrictMode>
);
