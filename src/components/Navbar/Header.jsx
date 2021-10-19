import React from 'react'
import '../App.css' 
function Header() {
    return (
        <div wrapper>
          <img src="public\assets\images\chint.png" alt="" />
          <ul>
              <li>Продукция</li>
              <li>О компании</li>
              <li>Скачать</li>
              <li>Где купить</li>
              <li>Поддержка</li>
              <li>Контакты</li>
          </ul>
          <button><img src="public\assets\images\Vector.png" alt="" /> (95) 476 76 76 </button>
        </div>
    )
}

export default Header
