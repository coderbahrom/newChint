import React from 'react'
import Navbar from '../Navbar/Header'
import './ProductsHover_inner.css'
import Head from '../Hovers/ProductHover1/Head'
import rasm1 from '../assets/images/rasm1.png'
import ContentDataLeft from './ContentDataLeft'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import ProshowData from './ProshowData'
import {useState} from 'react'


function ProductsHover_inner() {
    const [proshowMainData, setProshowMainData] = useState( [
    {picture:rasm1,picture_title:'DZ47-60, 1-63А, 4.5кА'},
    {picture:rasm1,picture_title:'DZ47-60, 1-63А, 4.5кА'},
    {picture:rasm1,picture_title:'DZ47-60, 1-63А, 4.5кА'},
    {picture:rasm1,picture_title:'DZ47-60, 1-63А, 4.5кА'},
    {picture:rasm1,picture_title:'DZ47-60, 1-63А, 4.5кА'},
    {picture:rasm1,picture_title:'DZ47-60, 1-63А, 4.5кА'}
])

    return (
        <>
        <div className='pro_inner_main_container'> 
            <Navbar/>
        </div>
        <div className='pro_inner_content'> 
            <div className='pro_inner_container'>
                    <Head title1='Главная /Каталог продукции/Автоматические выключатели' title2='Автоматические выключатели'/>
                    <div className='pro_inner_content_data'>
                        <ContentDataLeft/>
                        <div className='pro_inner_content_data_right'>
                            <div className='rightInner'>
                                {
                                    proshowMainData.map((item,index)=>{
                                        return <ProshowData picture={item.picture} picture_title={item.picture_title}/>
                                    }) 
                                }
                                 
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ProductsHover_inner
