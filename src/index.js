require('file-loader?name=[name].[ext]!./index.html')
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <App />
);