import React from 'react'
import './ChintWorld.css'
import Navbar from '../Navbar/Header'
import NavbarButtom from './NavbarButtom'
import ShowImage from './ShowImage'
import downloadStrelka from '../assets/images/downloadStrelka.png'
import Case1 from './Case1'
import './rectengular.css'
import './rectengular2.css'
import './Case2.css'
import rightcase1 from '../assets/images//rightcase1.png'
const arr = ['О компании','Группа компаний CHINT основана в 1984','На сегодняшний день является лидером мирового рынка в области электротехнической промышленности. Корпорация имеет в своем составе множество предприятий и подразделений, каждое из которых отвечает за различные сегменты разработки и производства.',downloadStrelka ,'Презентация о компании']
const arr2 = ['Дочернее подразделение международной корпорации CHINT, главным направлением деятельности которого является производство низковольтного оборудования.','На российском рынке компания существует с 2010 года, активно развивая свое присутствие как в центральной часaти страны, так и в остальных регионах. Поставки электротехнической продукции Chint осуществляются по всей территории России и странам СНГ.','Товарный ряд низковольтного оборудования Chint насчитывает более 4000 изделий различного назначения. Мы предлагаем, как отдельные серии продуктов, направленные на выполнение узких задач, так и комплексные решения для крупных объектов.']
const arr3 = ['','','']

const styleImage = {
    // backgroundImage:"url('../assets/images//rightcase1.png'),
    // backgroundColor:'None',
}


function ChintWorld() {
    return (
        <>
            <div className='container'>
                <Navbar/>
            </div>
            <div className='second_content'>
                <NavbarButtom link1={"Главная / "} link2={'О компании'} link3={''}/>
                <ShowImage show_titl1={arr[0]} show_titl2={arr[1]} show_titl3={arr[2]} show_titl4={arr[3]} show_titl5={arr[4]} />
                <div className='second_content_title'>
                        <p>Компания Chint Electric</p>
                </div>
                <div className={'second_content_row1'}>
                    <Case1 case1_title1={arr2[0]} case1_title2={arr2[1]} case1_title3={arr2[2]}/>
                    <div className={'second_content_row1_right'}>
                        <div className='rectengular'>
                            <h5>50</h5>
                        </div>
                    </div>
                </div>
                <div className='second_content_row2'>
                    <div className={'second_content_row2_left'}>
                        <div className='rectengular2'>
                                <p>Более</p>
                                <h5>32 000</h5>
                                <p>сертификатов качества</p>
                        </div>  
                    </div>
                    <div className="case2">    
                    </div>
                </div>

                <div className={'second_content_row3'}>
                    <Case1 styleImage={styleImage} case1_title1={arr3[0]} case1_title2={arr3[1]} case1_title3={arr3[2]}/>
                    <div className={'second_content_row1_right'}>
                        <div className='rectengular'>
                            <h5>50</h5>
                        </div>
                    </div>
                </div>
                

            </div>

        </>
    )
}

export default ChintWorld;
