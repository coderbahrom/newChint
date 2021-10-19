import React from 'react'
import Navbar from '../Navbar/Header'
import './ProductsHover_inner.css'
import Head from '../Hovers/ProductHover1/Head'
function ProductsHover_inner() {
    return (
        <>
        <div className='container'> 
            <Navbar/>
        </div>
        <div className='content'> 
            <div className='container'>
                    <Head title1='Главная /Каталог продукции/Автоматические выключатели' title2='Автоматические выключатели'/>
            </div>
        </div>
        </>
    )
}

export default ProductsHover_inner
