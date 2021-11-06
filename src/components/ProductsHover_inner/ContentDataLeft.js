import React from 'react'
import Squre from './Squre'
import filter1 from '../assets/images/filter1.png'
import './Content_data_left.css'
function ContentDataLeft() {
    return (
        <div className='content_data_left'>
                            <div className='filter_justify'>
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
                                         return  <Squre/>
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

                            <div className='checkedData'>
                                
                            </div>
                      </div>

    )
}

export default ContentDataLeft
