import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HomePage/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
