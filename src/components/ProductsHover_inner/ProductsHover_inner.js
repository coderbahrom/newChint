import React from 'react'
import Navbar from '../Navbar/Header'
import './ProductsHover_inner.css'
import Head from '../Hovers/ProductHover1/Head'
import filter1 from '../assets/images/filter1.png'
import Squre from './Squre'
import rasm1 from '../assets/images/rasm1.png'

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
                        <div className='content_data_left'>
                            <div className='filter'>
                                <img src={filter1} alt="rasm"/>
                                <h3>Фильтр товаров</h3>
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Количество полюсов</p>
                            </div>
                            <div className='many_button'>
                                 <Squre/>
                                 <Squre/>
                                 <Squre/>
                                 <Squre/>
                                 <Squre/>
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Номинальный ток</p>
                            </div>
                            <div className='many_button'>
                                 {
                                   [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((item)=>{
                                       return <Squre/>
                                   })  
                                 }
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Предельная отключающая способность</p>
                            </div>
                            <div className='many_button'>
                                 <Squre/>
                                 <Squre/>
                                 <Squre/>
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Для серии</p>
                            </div>
                            <div className='many_button'>
                                 <Squre/>
                                 <Squre/>
                                 <Squre/>
                                 <Squre/>
                                 <Squre/>
                                 <Squre/>
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Рабочее напряжение DC</p>
                            </div>
                            <div className='many_button'>
                                 <Squre/>
                                 <Squre/>
                                 <Squre/>
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Характеристика кривой</p>
                            </div>
                            <div className='many_button'>
                                 <Squre/>
                                 <Squre/>
                                 <Squre/>
                            </div>
                        </div>
                        <div className='content_data_right'>
                            <div className='right_inner'>
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
