import React from 'react'
import Navbar from '../Navbar/Header'
import './ProductsHover_inner2.css'
import Head from '../Hovers/ProductHover1/Head'
import ContentDataLeft from '../ProductsHover_inner/ContentDataLeft'
import doc from '../assets/images/doc.png'
import ProductContainer from './Product_container'
import Footer from '../Footer/Footer'
import {useState} from 'react'

function ProductsHover_inner2(){
    const [proContainerData, setProContainerData] = useState([
        {title1:'284003',title2:'Автоматический выключатель NB1-63 1Р 6А 6кА х-ка C (CHINT)'},
        {title1:'284003',title2:'Автоматический выключатель NB1-63 1Р 6А 6кА х-ка C (CHINT)'},
        {title1:'284003',title2:'Автоматический выключатель NB1-63 1Р 6А 6кА х-ка C (CHINT)'},
        {title1:'284003',title2:'Автоматический выключатель NB1-63 1Р 6А 6кА х-ка C (CHINT)'},
        {title1:'284003',title2:'Автоматический выключатель NB1-63 1Р 6А 6кА х-ка C (CHINT)'},
        {title1:'284003',title2:'Автоматический выключатель NB1-63 1Р 6А 6кА х-ка C (CHINT)'},
        {title1:'284003',title2:'Автоматический выключатель NB1-63 1Р 6А 6кА х-ка C (CHINT)'},
        {title1:'284003',title2:'Автоматический выключатель NB1-63 1Р 6А 6кА х-ка C (CHINT)'},
    ])

    const [boxData, setBoxData] = useState(
        {
            boxTitle1:'Автоматические выключатели CHINT DZ47-60',
            boxTitle2:'защищают распределительные и групповые цепи от перегрузок и токов короткого замыкания. Применяются во вводно-распределительных щитах жилых и административных зданий.',
            docTitle:'Посмотреть брошюру DZ47-60',
            amper:'1–63 А',
            pole:'1P, 2P, 3P, 4P',
            char:'B, C, D',
            capacity:'4.5 кА'
        }
    )

    console.log(setBoxData)
    console.log(setProContainerData)
    return (
        <>
        <div className='pro_inner2_main_container'> 
            <Navbar/>
        </div>
        <div className='pro_inner2_content'> 
            <div className='pro_inner2_container'>
                    <Head title1='Главная /Каталог продукции/Автоматические выключатели/DZ47-60, 1-63А, 4.5кА' title2='Автоматические выключатели DZ47-60'/>
                    <div className='pro_inner2_content_data'>
                        <ContentDataLeft/>
                        <div className='pro_inner2_content_data_right'>
                            <div className='pro_inner2_right_inner'>
                                 <div className='right_inner_1'>
                                    <p> {boxData.boxTitle1}</p>
                                    <p>
                                       {boxData.boxTitle2}
                                    </p>
                                    <div className='right_inner_doc'>
                                        <img src={doc} alt='rasm'/>
                                        <p className='P_Inside_doc'>{boxData.docTitle}</p>
                                    </div>
                                 </div> 
                                 <div className='right_inner_2'>
                                     <div className='right_inner_2_1'>
                                        <p>Номинальный ток (In)</p>
                                        <p>{boxData.amper}</p>
                                     </div>
                                     <div className='right_inner_2_1'>
                                        <p>Количество полюсов</p>
                                        <p>{boxData.pole}</p>
                                     </div>
                                     <div className='right_inner_2_1'>
                                        <p>Характеристика кривой</p>
                                        <p>{boxData.char}</p>
                                     </div>
                                     <div className='right_inner_2_1'>
                                        <p>Предельная отключающая способность</p>
                                        <p>{boxData.capacity}</p>
                                     </div>
                                     
                                 </div>
                            </div>

                            <div className='right_inner2'>
                                {
                                proContainerData.map((item,index)=>{
                                    return  <div key={index}> 
                                    <ProductContainer proConainet_title1={item.title1} proConainet_title2={item.title2}/>
                                    </div>
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

export default ProductsHover_inner2
