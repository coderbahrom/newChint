import React from 'react'
import Header from '../../Navbar/Header'
import Head from './Head'
import "./ProductsHover2.css";
import { useState } from 'react';
import image2 from '../ProductHover1/Catalog/catalog-images/image2.svg'
import image3 from '../ProductHover1/Catalog/catalog-images/image3.svg'
import image4 from '../ProductHover1/Catalog/catalog-images/image4.svg'
import image5 from '../ProductHover1/Catalog/catalog-images/image5.svg'
import image6 from '../ProductHover1/Catalog/catalog-images/image6.svg'
import image7 from '../ProductHover1/Catalog/catalog-images/image7.svg'
import image8 from '../ProductHover1/Catalog/catalog-images/image8.svg'
import image9 from '../ProductHover1/Catalog/catalog-images/image9.svg'
import image10 from '../ProductHover1/Catalog/catalog-images/image10.svg'
import image11 from '../ProductHover1/Catalog/catalog-images/image11.svg'
import image12 from '../ProductHover1/Catalog/catalog-images/image12.svg'
import image13 from '../ProductHover1/Catalog/catalog-images/image13.svg'
import image14 from '../ProductHover1/Catalog/catalog-images/image14.svg'
import image15 from '../ProductHover1/Catalog/catalog-images/image15.svg'
import image16 from '../ProductHover1/Catalog/catalog-images/image16.svg'
import image17 from '../ProductHover1/Catalog/catalog-images/image17.svg'
import image18 from '../ProductHover1/Catalog/catalog-images/image18.svg'
import image19 from '../ProductHover1/Catalog/catalog-images/image19.svg'
import image20 from '../ProductHover1/Catalog/catalog-images/image20.svg'
import ProductCatolog1 from '../ProductHover1/Catalog/ProductCatolog1'
import ProductCatalog2 from './Catalog/ProductCatalog2'
 const data=[
   { id:1, img:image2, title:'Модульное оборудование' },
   { id:2, img:image3, title:'Силовое оборудование защиты и коммутации' },
   { id:3, img:image4, title:'Контакторы, реле, пускатели' },
   { id:4, img:image5, title:'Компенсации реактивной мощности' },
   { id:5, img:image6, title:'Кнопки управления, индикаторы' },
   { id:6, img:image7, title:'Оборудование электропитания' },
   { id:7, img:image8, title:'Выключатель-разъединители/рубильники' },
   { id:8, img:image9, title:'Приводная техника' },
   { id:9, img:image10, title:'Щиты и шкафы CHINT' },
   { id:10, img:image11, title:'Аксессуары для шкафов и щитов CHINT' },
   { id:11, img:image12, title:'Цифровые измерительные приборы' },
 ]
 const data1=[
  { id:1, img:image13, title:'Модульное оборудование' },
  { id:2, img:image14, title:'Силовое оборудование защиты и коммутации' },
  { id:3, img:image15, title:'Контакторы, реле, пускатели' },
  { id:4, img:image16, title:'Компенсации реактивной мощности' },
  { id:5, img:image17, title:'Кнопки управления, индикаторы' },
  { id:6, img:image18, title:'Оборудование электропитания' },
  { id:7, img:image19, title:'Выключатель-разъединители/рубильники' },
  { id:8, img:image20, title:'Приводная техника' },

]

function ProductsHover2() {
  const [show, setShow]= useState(true)
   function OnclickOne(){
     setShow(true)
   }
   function OnclickTwo(){
    setShow(false)
  }
const styling={
  color: "#1E59A4",
  border: "1px solid #1E59A4"
}
const styling1={
  color: "#808183",
  border: "1px solid #808183"
}
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
         
          <div className="tab">
          <button onClick={OnclickOne} style={show?styling:styling1}>Низковольтное оборудование</button>
          <button onClick={OnclickTwo} style={show?styling1:styling}>Солнечные батареи</button>
          </div>
          { show?<div className={'product-catalog'} >
            {
              data.map((value,index)=>{

               return <ProductCatolog1 key={index} data={value}/>
              })
            }</div>:
              <div className={'product-catalog'} >
            {
              data1.map((value,index)=>{

               return <ProductCatalog2 key={index} data={value}/>
              })
            }
          </div>}
          
          </div>
          </div>
          </>
    )
}


export default ProductsHover2
