import './Footer.css'

function Footer() {
  return (
    <>
      <footer id="footer">
      <div class="container">
        <div class="footer_columns">
          <div class="footer_column">
            <h2 class="footer_col_title">Низковольтное оборудование</h2>
            <div class="low_volt_links">
              <a class="low_volt_link" href="#">Низковольтное оборудование</a>
              <br />
              <a class="low_volt_link" href="#">Модульное оборудование</a>
              <br />
              <a class="low_volt_link" href="#"
                >Силовое оборудование защиты и коммутации</a
              >
              <br />
              <a class="low_volt_link" href="#">Контакторы, реле, пускатели</a>
              <br />
              <a class="low_volt_link" href="#"
                >Компенсации реактивной мощности</a
              >
              <br />
              <a class="low_volt_link" href="#"
                >Кнопки управления, индикаторы</a
              >
              <br />
              <a class="low_volt_link" href="#">Оборудование электропитания</a>
              <br />
              <a class="low_volt_link" href="#"
                >Выключатель-разъединители/рубильники</a
              >
              <br />
              <a class="low_volt_link" href="#">Приводная техника</a>
              <br />
              <a class="low_volt_link" href="#">Щиты и шкафы</a>
              <br />
              <a class="low_volt_link" href="#"
                >Аксессуары для шкафов и щитов</a
              >
              <br />
              <a class="low_volt_link" href="#"
                >Цифровые измерительные приборы
              </a>
            </div>
          </div>
          <div class="footer_column">
            <h2 class="footer_col_title">
              Оборудование распределения <br />
              и передачи электроэнергии
            </h2>
            <h2 class="footer_col_title">Солнечные батареи</h2>
            <h2 class="footer_col_title">Электроустановочные изделия</h2>
          </div>
          <div class="footer_column">
            <div class="footer_oultined_btns">
              <button class="footer_oultined_btn">
                Подписаться на рассылку
              </button>
              <br />
              <button class="footer_oultined_btn">Скачать каталог</button>
            </div>
            <div class="low_volt_links">
              <a class="low_volt_link" href="#">О компании </a>
              <br />
              <a class="low_volt_link" href="#">Скачать</a>
              <br />
              <a class="low_volt_link" href="#">Где купить </a>
              <br />
              <a class="low_volt_link" href="#">Мероприятия</a>
              <br />
              <a class="low_volt_link" href="#">Поддержка</a>
              <br />
              <a class="low_volt_link" href="#">Контакты</a>
            </div>
            <div class="footer_socials">
              <div class="footer_social_circle">
                <object
                  class="map_svg"
                  class="advantage_cards__icon2"
                  data="./assets/icons/facebook.svg"
                  type="image/svg+xml"
                > </object>
              </div>
              <div class="footer_social_circle">
                <object
                  class="map_svg"
                  class="advantage_cards__icon2"
                  data="./assets/icons/twitter.svg"
                  type="image/svg+xml"
                > </object>
              </div>
              <div class="footer_social_circle">
                <object
                  class="map_svg"
                  class="advantage_cards__icon2"
                  data="./assets/icons/telegram.svg"
                  type="image/svg+xml"
                > </object>
              </div>
              <div class="footer_social_circle">
                <object
                  class="map_svg"
                  class="advantage_cards__icon2"
                  data="./assets/icons/insta.svg"
                  type="image/svg+xml"
                > </object>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;