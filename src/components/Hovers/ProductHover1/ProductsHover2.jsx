import React from 'react'
import Header from '../../Navbar/Header'
import Head from './Head'
import "./ProductsHover2.css";
 const data=[
   {}
 ]
function ProductsHover2() {
    return (
        <>
        <div className="wrapper">
        <Header />
      </div>
      <div className="body">
        <div className="wrapall">
          <Head
            title1={"Главная /Каталог продукции"}
            title2={"Каталог продукции"}
          />
          </div>
          <div className="tab">
          <button>Низковольтное оборудование</button>
          <button>Солнечные батареи</button>
          </div>
          </div>
          </>
    )
}


export default ProductsHover2
