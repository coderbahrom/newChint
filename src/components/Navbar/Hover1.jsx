import React from "react";
import "../Navbar/Header.css";
import { Link } from "react-router-dom";
function Hover1() {
  return (
    <div id="Hover">
      <div className="hoverContainer">
        <div className={"about"}>
          <h1>Низковольтное оборудование</h1>

          <Link className={"linking"} to="/catalog">
          
            <p> Модульное оборудование</p>
          </Link>
          <Link className={"linking"} to="/product-detail">
            <p>Силовое оборудование защиты и коммутации</p>
          </Link>
          <p> Контакторы, реле, пускатели</p>
          <p> Компенсации реактивной мощности</p>
          <p> Кнопки управления, индикаторы</p>
          <p>Оборудование электропитания</p>
          <p>Выключатель-разъединители/рубильники</p>
          <p> Приводная техника</p>
          <p> Щиты и шкафы</p>
        </div>
        <div className={"middle"}>
          <p> Аксессуары для шкафов и щитов</p>
          <p> Цифровые измерительные приборы</p>
        </div>
        <div className={"down"}>
          <h1>Оборудование распределения и передачи электроэнергии</h1>
          <h1>Электроустановочные изделия</h1>
        </div>
      </div>
    </div>
  );
}

export default Hover1;
