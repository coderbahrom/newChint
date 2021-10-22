import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
// import ChintWorld2 from './components/ChintWorld/ChintWorld2/ChintWorld2';
import {BrowserRouter as Router} from 'react-router-dom'
import ChintWorld6 from './components/ChintWorld/ChintWorld6/ChintWorld6';

// import ChintWorld4 from './components/ChintWorld/ChintWorld4/ChintWorld4';

// import ChintInWorld3 from './components/ChintWorld/ChintInWorld3/ChintInWorld3';
// import ProductsHover_inner3 from './components/ProductsHover_inner/ProductsHover_inner3';
// import DownloadContainer from './components/DownloadContainer/DownloadContainer';
import ChintWorld5 from './components/ChintWorld/ChintWorld5/ChintWorld5';
import './index.css'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChintWorld6/>
      {/* <HomePage/> */}
{/* <ChintWorld4/> */}
      {/* <ProductsHover/> */}

  {/* <ChintInWorld3/> */}

     {/* <ChintWorld2/> */}




{/* <ProductsHover_inner3/> */}


      {/* <ProductsHover_inner2/> */}
      {/* <ProductsHover_inner/> */}

      {/* <ChintWorld/> */}
      {/* <ChintWorld5/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

