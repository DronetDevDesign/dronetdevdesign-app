import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

console.log(666);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={window.location.pathname || ''}>
    <App />
  </BrowserRouter>
);
