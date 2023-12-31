import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/app.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <React.StrictMode>
            <header></header>
            <App />
            <footer></footer>
        </React.StrictMode>
    </>
);