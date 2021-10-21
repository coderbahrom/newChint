import React from 'react';
import ReactDOM from 'react-dom';

// import ProductsHover from './components/Hovers/ProductHover1/ProductsHover';
// import App from './App';
// import HomePage from './components/HomePage/HomePage';
// import ProductsHover_inner from './components/ProductsHover_inner/ProductsHover_inner';

// import ProductsHover from './components/Hovers/ProductHover1/ProductsHover';
// import ChintWorld from './components/ChintWorld/ChintWorld';
// import App from './App';
// import HomePage from './components/HomePage/HomePage';
// import ProductsHover_inner from './components/ProductsHover_inner/ProductsHover_inner';
// import ProductsHover_inner2 from './components/ProductsHover_inner2/ProductsHover_inner2';

import {BrowserRouter as Router} from 'react-router-dom'
import ChintInWorld3 from './components/ChintWorld/ChintInWorld3/ChintInWorld3';
// import ProductsHover_inner3 from './components/ProductsHover_inner/ProductsHover_inner3';
import './index.css'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <HomePage/> */}

      {/* <ProductsHover/> */}

  <ChintInWorld3/>



{/* <ProductsHover_inner3/> */}


      {/* <ProductsHover_inner2/> */}
      {/* <ProductsHover_inner/> */}

      {/* <ChintWorld/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

