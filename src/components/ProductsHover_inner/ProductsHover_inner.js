import React from 'react'
import Navbar from '../Navbar/Header'
import './ProductsHover_inner.css'
import Head from '../Hovers/ProductHover1/Head'
import rasm1 from '../assets/images/rasm1.png'
import Content_data_left from './Content_data_left'
import {Link} from 'react-router-dom'

function ProductsHover_inner() {
    return (
        <>
        <div className='container'> 
            <Navbar/>
        </div>
        <div className='content'> 
            <div className='container'>
                    <Head title1='Главная /Каталог продукции/Автоматические выключатели' title2='Автоматические выключатели'/>
                    <div className='content_data'>
                        <Content_data_left/>
                        <div className='content_data_right'>
                            <div className='right_inner'>
                                 <Link className='right_inner_1'>
                                     <img src={rasm1} alt="rasmbor"></img>
                                     <p><font>DZ47-60, 1-63А, 4.5кА</font></p>
                                 </Link>
                                 <div className='right_inner_1'>
                                     <img src={rasm1} alt="rasmbor"></img>
                                     <p><font>DZ47-60, 1-63А, 4.5кА</font></p>
                                 </div>
                                 <div className='right_inner_1'>
                                     <img src={rasm1} alt="rasmbor"></img>
                                     <p><font>DZ47-60, 1-63А, 4.5кА</font></p>
                                 </div>
                                 <div className='right_inner_1'>
                                     <img src={rasm1} alt="rasmbor"></img>
                                     <p><font>DZ47-60, 1-63А, 4.5кА</font></p>
                                 </div>
                                 <div className='right_inner_1'>
                                     <img src={rasm1} alt="rasmbor"></img>
                                     <p><font>DZ47-60, 1-63А, 4.5кА</font></p>
                                 </div>
                                 <div className='right_inner_1'>
                                     <img src={rasm1} alt="rasmbor"></img>
                                     <p><font>DZ47-60, 1-63А, 4.5кА</font></p>
                                 </div>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
        </>
    )
}

export default ProductsHover_inner
