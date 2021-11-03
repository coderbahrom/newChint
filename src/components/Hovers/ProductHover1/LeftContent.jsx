import React from 'react'

export default function LeftContent(props) {
    return (
        <div>
             <div style={{...props.styles, opacity:props.setOpacity}} className="left-text">
           
            <ul className="list">
              <li>Second One</li>
              <li>Модульное оборудование</li>
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
            </div>
        </div>
    )
}
