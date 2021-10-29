import React from 'react'
import './ChintWorld.css'
import Navbar from '../Navbar/Header'
import NavbarButtom from './NavbarButtom'
import ShowImage from './ShowImage'
import downloadStrelka from '../assets/images/downloadStrelka.png'
import Case1 from './Case1'
import './rectengular.css'
import './rectengular2.css'
import './rectengular3.css'
import './rectengular4.css'
import './Case2.css'
import './Case4.css'
import Footer from '../Footer/Footer'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import rightcase1 from '../assets/images//rightcase1.png'
const arr = ['О компании','Группа компаний CHINT основана в 1984','На сегодняшний день является лидером мирового рынка в области электротехнической промышленности. Корпорация имеет в своем составе множество предприятий и подразделений, каждое из которых отвечает за различные сегменты разработки и производства.',downloadStrelka ,'Презентация о компании']
const arr2 = ['Дочернее подразделение международной корпорации CHINT, главным направлением деятельности которого является производство низковольтного оборудования.','На российском рынке компания существует с 2010 года, активно развивая свое присутствие как в центральной часaти страны, так и в остальных регионах. Поставки электротехнической продукции Chint осуществляются по всей территории России и странам СНГ.','Товарный ряд низковольтного оборудования Chint насчитывает более 4000 изделий различного назначения. Мы предлагаем, как отдельные серии продуктов, направленные на выполнение узких задач, так и комплексные решения для крупных объектов.']
const arr3 = ['','','']

const styleImage = {
    backgroundImage:`url(${rightcase1})`,
    backgroundSize:'100%',
    backgroundRepeat:'no-repeat',
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
                        <div className='rectengular3'>
                            <h5>30</h5>
                            <p>на рынке электротехнической продукции</p>
                        </div>
                    </div>
                </div>


                <div className={'second_content_row4'}>
                    <div className={'second_content_row4_left'}>
                        <div className='rectengular4'>
                            <h5>380</h5>
                            <p>сертификатов качества</p>
                        </div>
                    </div>
                    <div className="case4">
                        <p>Концепция качества Chint Electric основана на четырех ключевых этапах:</p>
                        <div className='case4_container'>
                            <div className='case4_container_inner'>
                                <img src={icon1} alt='rasm1'/>
                                <p>Научные исследования</p>
                            </div>
                            <div className='case4_container_inner2'>
                                <img src={icon2} alt='rasm1'/>
                                <p>Контроль качества</p>
                            </div>
                            <div className='case4_container_inner3'>
                                <img src={icon3} alt='rasm1'/>
                                <p>Маркетинговые услуги</p>
                            </div>
                            <div className='case4_container_inner4'>
                                <img src={icon4} alt='rasm1'/>
                                <p>Логистика</p>
                            </div>
                        </div>
                    
                        <p>Данный метод позволяет обеспечить всестороннее качество продукции и предоставляемых услуг. Это позволяет тщательно контролировать выпуск каждой линейки продуктов и повсеместно реализовывать процедуры улучшения качества.</p>
                        <p>Превосходное качество - это не только девиз, но и стремление, заложенное в работу каждого сотрудника. Высокое качество и точность - ключевые требования, предъявляемые на любом этапе работы.</p>
                    
                    </div>
                </div>
                
                

            </div>
            <Footer/>
        </>
    )
}

export default ChintWorld;
