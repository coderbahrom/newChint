
import Header from '../Navbar/Header'
import ThreeImageComponent from '../ThreeImageComponent/ThreeImageComponent';
import Footer from '../Footer/Footer';
import ProductsHover1 from '../Hovers/ProductHover1/ProductsHover'
import ProductsHover_inner from '../ProductsHover_inner/ProductsHover_inner';
import ProductsHover_inner2 from '../ProductsHover_inner2/ProductsHover_inner2'
import {Switch,Link,Route } from 'react-router-dom'
import "./search.css"
import './showcase.css'
import './news.css'
import './products.css'
import './custom_radio_lang.css'
import './custom_radio_products.css'
import './advantages.css'
import Map from './Map';

function HomePage() {
  return (
  <>
  <Switch>
  <Route exact path="/">
  <div className="container">
    <Header/>
    {/* search */}
    <div id="search">
      <div class="input_with_prefix">
        <input type="text" placeholder="Поиск по товарам ..." />
        <span class="prefix">Поиск</span>
      </div>
    </div>

    {/* SHOWCASE  */}
      <div id="showcase">
        <div class="showcase_content">
          <h1 class="showcase_title">
            Официальный <br />
            дистрибьютор в Узбекистане
          </h1>
          <button class="text_btn">
            <span>Cкачать каталог</span>
            <svg
              width="30"
              height="14"
              viewBox="0 0 30 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.6364 7.6364C29.9879 7.28493 29.9879 6.71508 29.6364 6.36361L23.9088 0.636041C23.5574 0.284569 22.9875 0.284569 22.636 0.636041C22.2846 0.987513 22.2846 1.55736 22.636 1.90883L27.7272 7L22.636 12.0912C22.2846 12.4426 22.2846 13.0125 22.636 13.364C22.9875 13.7154 23.5574 13.7154 23.9088 13.364L29.6364 7.6364ZM-7.86805e-08 7.9L29 7.9L29 6.1L7.86805e-08 6.1L-7.86805e-08 7.9Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div class="language">
          <form action="#">
            <p class="lang_option_wrap">
              <input type="radio" id="test1" name="radio-group" checked />
              <label class="lang_option_label" for="test1">UZ</label>
            </p>
            <p class="lang_option_wrap">
              <input type="radio" id="test2" name="radio-group" />
              <label class="lang_option_label" for="test2">RU</label>
            </p>
            <p class="lang_option_wrap">
              <input type="radio" id="test3" name="radio-group" />
              <label class="lang_option_label" for="test3">ENG</label>
            </p>
          </form>
        </div>
      </div>
      <ThreeImageComponent/>
      </div>
       {/* PRODUCTS  */}

      <div id="products">
        <div class="container">
          <div class="section_title_wrap">
            <h1 class="section_title">Продукция</h1>
          </div>

          <form action="#" class="custom_radio_container">
            <p class="lang_option_wrap">
              <input type="radio" id="prod1" name="radio-group" checked />
              <label class="lang_option_label" for="prod1"
                >Низковольтное <br />
                оборудование</label
              >
            </p>
            <p class="lang_option_wrap">
              <input type="radio" id="prod2" name="radio-group" />
              <label class="lang_option_label" for="prod2"
                >Оборудование <br />
                распределения и передачи</label
              >
            </p>
            <p class="lang_option_wrap">
              <input type="radio" id="prod3" name="radio-group" />
              <label class="lang_option_label" for="prod3"
                >Электроустановочные изделия</label
              >
            </p>
          </form>

          <div class="products_list">
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
            <div class="products_list__prouduct">
              <object
                class="products_list__prouduct1"
                data="./assets/icons/prod1v1.svg"
                type="image/svg+xml"
              > </object>
              <object
                class="products_list__prouduct2"
                data="./assets/icons/prod1v2.svg"
                type="image/svg+xml"
              > </object>
              <p class="product_name">Модульное оборудование CHINT</p>
              <object
                data="./assets/icons/circle_arrow.svg"
                type="image/svg+xml"
              > </object>
            </div>
          </div>

          <div class="product_bottom_btns">
            <div class="product_bottom_btn outlined">
              <object
                data="./assets/icons/download.svg"
                type="image/svg+xml"
              > </object>
              Cкачать каталог
            </div>
            <div class="product_bottom_btn filled">
              <object
                data="./assets/icons/location.svg"
                type="image/svg+xml"
              > </object>
              Cкачать каталог
            </div>
          </div>
        </div>
      </div>
      
    <div class="container">
      {/* ADVANTAGES  */}
       <div id="advantages">
          <div class="section_title_wrap">
            <h1 class="section_title">Преимущества</h1>
            <div class="section_title_underline"></div>
          </div>

          <div class="showcase">
            <div class="showcase_content">
              <div class="stat_wrap">
                <div class="stat_rect"></div>
                <h1 class="stat_number">32 000</h1>
                <span class="stat_title">Сотрудников</span>
              </div>
              <div class="stat_wrap">
                <div class="stat_rect"></div>
                <h1 class="stat_number">33</h1>
                <span class="stat_title">Года на рынке </span>
              </div>
              <div class="stat_wrap">
                <div class="stat_rect"></div>
                <h1 class="stat_number">47 000</h1>
                <span class="stat_title"
                  >Изделий различного <br />
                  назначения</span
                >
              </div>
              <div class="stat_wrap">
                <div class="stat_rect"></div>
                <h1 class="stat_number">320</h1>
                <span class="stat_title"
                  >Сертификатов <br />
                  качества</span
                >
              </div>
            </div>
          </div>

          <div class="advantage_cards">
            <div class="advantage_cards__card">
              <div class="advantage_cards_rect">
                <object
                  class="advantage_cards__icon1"
                  data="./assets/icons/setting-tools.svg"
                  type="image/svg+xml"
                > </object>
                <object
                  class="advantage_cards__icon2"
                  data="./assets/icons/setting-tools2.svg"
                  type="image/svg+xml"
                > </object>
              </div>
              <h1 class="advantage_card_title">Поддержка</h1>
              <ul>
                <li><span class="advantage_card_sm_rect"></span> Скачать</li>
                <li><span class="advantage_card_sm_rect"></span> Видеоуроки</li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Техническое
                  консультирование
                </li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Программное
                  обеспечение
                </li>
              </ul>
            </div>
            <div class="advantage_cards__card">
              <div class="advantage_cards_rect">
                <object
                  class="advantage_cards__icon1"
                  data="./assets/icons/setting-tools.svg"
                  type="image/svg+xml"
                > </object>
                <object
                  class="advantage_cards__icon2"
                  data="./assets/icons/setting-tools2.svg"
                  type="image/svg+xml"
                > </object>
              </div>
              <h1 class="advantage_card_title">О компании</h1>
              <ul>
                <li><span class="advantage_card_sm_rect"></span> CHINT в мире</li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Наше производство
                </li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Сотрудничество
                </li>
              </ul>
            </div>
            <div class="advantage_cards__card">
              <div class="advantage_cards_rect">
                <object
                  class="advantage_cards__icon1"
                  data="./assets/icons/hand_shake.svg"
                  type="image/svg+xml"
                > </object>
                <object
                  class="advantage_cards__icon2"
                  data="./assets/icons/hand_shake2.svg"
                  type="image/svg+xml"
                > </object>
              </div>
              <h1 class="advantage_card_title">Сотрудничество</h1>
              <ul>
                <li><span class="advantage_card_sm_rect"></span> Скачать</li>
                <li><span class="advantage_card_sm_rect"></span> Видеоуроки</li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Техническое
                  консультирование
                </li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Программное
                  обеспечение
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        
         {/* MAP  */}
          <Map/>
      </div>
      <Footer/>
      <div class="footer_very_bottom"></div>
       </Route>

       <Route exact path="/productHover1">
         <ProductsHover1/>
       </Route>
       <Route exact  path="/productHover1/products" >
         <ProductsHover_inner/>
         </Route>
    
         
  
     </Switch>
  
 
     
    </>
  )
}

export default HomePage;
