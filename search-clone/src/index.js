import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  searchImg  from './Api';
const root = ReactDOM.createRoot(document.getElementById('root'));
searchImg();
root.render(
    <App />
);

