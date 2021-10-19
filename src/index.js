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
<<<<<<< HEAD
      <ProductsHover/>
=======
      <ProductsHover_inner/>
>>>>>>> 6315bec93898dd5660b0ef3a03d73e092ba2ac6a
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

