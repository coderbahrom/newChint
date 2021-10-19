import React from 'react';
import ReactDOM from 'react-dom';
import ProductsHover from './components/Hovers/ProductHover1/ProductsHover';
// import App from './App';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <HomePage/> */}
      <ProductsHover/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


