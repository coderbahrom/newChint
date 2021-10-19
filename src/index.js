import React from 'react';
import ReactDOM from 'react-dom';
import ProductsHover from './components/Hovers/ProductHover1/ProductsHover';
// import App from './App';
// import HomePage from './components/HomePage/HomePage';
import ProductsHover_inner from './components/ProductsHover_inner/ProductsHover_inner';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <HomePage/> */}

      <ProductsHover/>

      {/* <ProductsHover_inner/> */}

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

