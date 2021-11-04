import React from 'react'

export default function LeftContent(props) {
  const scalling={
    height: "65vh",
    // transform: "scale(1)",
    transition:"height 0.7s"
  }
  const scalling1={
    height: "0",
    transform: "scale(0)"
  }
    return (
        <div>
             <div className="left-text">
           
            <ul style={props.show1===true &&props.id===2? scalling:scalling1} className="list">
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
