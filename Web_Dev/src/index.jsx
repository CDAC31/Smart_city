import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App/>{/*App.js is loaded on root in public/index.html*/}
  </BrowserRouter>,
  document.getElementById('root')
);
