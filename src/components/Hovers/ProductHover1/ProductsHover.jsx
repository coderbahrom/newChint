import React from 'react'
import './ProductsHover.css'
import Head from './Head'
function ProductHover1() {
    return (
        <div className="wrapper">
          <Head title1={'Главная /Каталог продукции'} title2={'Каталог продукции'}/>
            <div className="body1">

            <div className="left-side">
                <span>

        <h1>Низковольтное оборудование</h1>
        <div className="arrow">

        <img src="./assets/images/arrow.png" alt="" />
        </div>
        </span>
        <hr className={'hr1'} />
        <h2>Модульное оборудование</h2>
        <hr />
        <ul className="list">
            <li>Силовое оборудование защиты и коммутации</li>
            <li>Контакторы, реле, пускатели</li>
            <li>Компенсации реактивной мощности</li>
            <li>Кнопки управления, индикаторы</li>
            <li>Оборудование электропитания</li>
            <li>Выключатель-разъединители/рубильники </li>
            <li>Приводная техника</li>
            <li>Щиты и шкафы CHINT</li>
            <li>Аксессуары для шкафов и щитов CHINT</li>
            <li>Щиты и шкафы CHINT</li>
            <li>Цифровые измерительные приборы</li>
        </ul>
<div className={'foot'}>
        <span>
<h1>Оборудование распределения 
и передачи</h1>
<div className="arrow">

<img src="./assets/images/arrow.png" alt="" />
</div>
</span>
<hr />
<span>

<h1> Оборудование распределения 
и передачи</h1>
<div className="arrow">

<img src="./assets/images/arrow.png" alt="" />
</div>
</span>
<hr />
</div>
            </div>
            
            </div>
        </div>
    )
}

export default ProductHover1
