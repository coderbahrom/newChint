import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="wrapper">
          <img src="./assets/images/chint.png" alt="" />
          <ul>
              <li>Продукция</li>
              <li>О компании</li>
              <li>Скачать</li>
              <li>Где купить</li>
              <li>Поддержка</li>
              <li>Контакты</li>
          </ul>
          <button><img src="./assets/images/Vector.png" alt="" /> (95) 476 76 76 </button>
       </div>
   
    )
}

export default Header
