import React from 'react'
import Navbar from '../Navbar/Header'
import './ProductsHover_inner2.css'
import Head from '../Hovers/ProductHover1/Head'
import filter1 from '../assets/images/filter1.png'
import Squre from '../ProductsHover_inner/Squre'
import rasm1 from '../assets/images/rasm1.png'
import Content_data_left from '../ProductsHover_inner/Content_data_left'
import doc from '../assets/images/doc.png'
import Product_container from './Product_container'


function ProductsHover_inner2(){
    return (
        <>
        <div className='container'> 
            <Navbar/>
        </div>
        <div className='content'> 
            <div className='container'>
                    <Head title1='Главная /Каталог продукции/Автоматические выключатели/DZ47-60, 1-63А, 4.5кА' title2='Автоматические выключатели DZ47-60'/>
                    <div className='content_data'>
                        <Content_data_left/>
                        <div className='content_data_right'>
                            <div className='right_inner'>
                                 <div className='right_inner_1'>
                                    <p>Автоматические выключатели CHINT DZ47-60</p>
                                    <p>защищают распределительные и групповые цепи от перегрузок и токов короткого замыкания. Применяются во вводно-распределительных щитах жилых и административных зданий.</p>
                                    <div className='doc'>
                                    <img src={doc} alt='rasm'/>
                                    <p id={'child'}>Посмотреть брошюру DZ47-60</p>
                                    </div>
                                 </div>
                                 <div className='right_inner_2'>
                                     <div className='right_inner_2_1'>
                                        <p>Номинальный ток (In)</p>
                                        <p>1–63 А</p>
                                     </div>
                                     <div className='right_inner_2_1'>
                                        <p>Количество полюсов</p>
                                        <p>1P, 2P, 3P, 4P</p>
                                     </div>
                                     <div className='right_inner_2_1'>
                                        <p>Характеристика кривой</p>
                                        <p>B, C, D</p>
                                     </div>
                                     <div className='right_inner_2_1'>
                                        <p>Предельная отключающая способность</p>
                                        <p>4.5 кА</p>
                                     </div>
                                     
                                 </div>
                            </div>

                            <div className='right_inner2'>
                                {
                                [1,2,3,4,5,6,7,8,9,10,11,12,13].map((item,index)=>{
                                    return <Product_container/>
                                })
                                }
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>

        </>
    )
}

export default ProductsHover_inner2
