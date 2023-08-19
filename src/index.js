import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className='upperBar'></div>
    <App />
    <footer></footer>
  </React.StrictMode>
);