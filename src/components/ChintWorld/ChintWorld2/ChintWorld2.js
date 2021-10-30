import React from 'react'
import Header from '../../Navbar/Header';
import './ChintWorld2.css'
import NavbarButtom from '../NavbarButtom';
import ShowImage from '../ShowImage';
import Case1 from '../Case1';
import '../rectengular2.css'

import Map from '../../HomePage/Map';
import Footer from '../../Footer/Footer';
const hidden = {
    display:'none'
}

const arr2 = ['Дочернее подразделение международной корпорации CHINT, главным направлением деятельности которого является производство низковольтного оборудования.','На российском рынке компания существует с 2010 года, активно развивая свое присутствие как в центральной часaти страны, так и в остальных регионах. Поставки электротехнической продукции Chint осуществляются по всей территории России и странам СНГ.','Товарный ряд низковольтного оборудования Chint насчитывает более 4000 изделий различного назначения. Мы предлагаем, как отдельные серии продуктов, направленные на выполнение узких задач, так и комплексные решения для крупных объектов.']

function ChintWorld2() {
    return (
        <>
            <div className='world2_main_container'>
                <Header/>
            </div>

            <div className='main_container'>
                <NavbarButtom link1={'Главная / '} link2={'О компании'} link3={'/ CHINT в мире'}/>
                <ShowImage hidden={hidden} show_titl1='CHINT в мире' show_titl3='Корпорация CHINT основана в 1984 году и за более чем 30 лет существования стала ведущим брендом на рынке электротехнической промышленности в мире. В данный момент CHINT представляет высокотехнологичную продукцию и решения на всех этапах промышленной цепи.' />        
                <div className='second_content_title'>
                        <p>Компания Chint Electric</p>
                </div>
                <div className={'main_container_row1'}>
                    <Case1 case1_title1={arr2[0]} case1_title2={arr2[1]} case1_title3={arr2[2]}/>
                    <div className={'main_contaner_right'}>
                        <div className='rectengular2'>
                            <p>Более</p>
                            <h5>47000</h5>
                            <p>изделий различного назанчения</p>
                        </div>
                    </div>
                </div>
                    <Map/>
            </div>
            <Footer/>
        </>
    )
}

export default ChintWorld2;
