import "./Footer.css";
import { Link } from "react-router-dom";
import face from '../assets/images/face.png'
import twit from '../assets/images/twitter.png'
import teg from '../assets/images/telegram.png'
import ins from '../assets/images/instagram.png'
function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer_container">
          <div className="footer_columns">
            <div className="footer_column">
              <h2 className="footer_col_title">Низковольтное оборудование</h2>
              <div className="low_volt_links">
                <a className="low_volt_link" href>
                  Низковольтное оборудование
                </a>
                <br />
                <a className="low_volt_link" href>
                  Модульное оборудование
                </a>
                <br />
                <a className="low_volt_link" href>
                  Силовое оборудование защиты и коммутации
                </a>
                <br />
                <a className="low_volt_link" href>
                  Контакторы, реле, пускатели
                </a>
                <br />
                <a className="low_volt_link" href>
                  Компенсации реактивной мощности
                </a>
                <br />
                <a className="low_volt_link" href>
                  Кнопки управления, индикаторы
                </a>
                <br />
                <a className="low_volt_link" href>
                  Оборудование электропитания
                </a>
                <br />
                <a className="low_volt_link" href>
                  Выключатель-разъединители/рубильники
                </a>
                <br />
                <a className="low_volt_link" href>
                  Приводная техника
                </a>
                <br />
                <a className="low_volt_link" href>
                  Щиты и шкафы
                </a>
                <br />
                <a className="low_volt_link" href>
                  Аксессуары для шкафов и щитов
                </a>
                <br />
                <a className="low_volt_link" href>
                  Цифровые измерительные приборы
                </a>
              </div>
            </div>
            <div class="footer_column">
              <h2 class="footer_col_title">
                Оборудование распределения <br />и передачи электроэнергии
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
                <Link to="/download">
                  <button class="footer_oultined_btn">Скачать каталог</button>
                </Link>
              </div>
              <div className="low_volt_links">
                <a className="low_volt_link" href>
                  О компании{" "}
                </a>
                <br />
                <Link to="/download">
                  {" "}
                  <a className="low_volt_link" href>
                    Скачать
                  </a>{" "}
                </Link>
                <br />
                <a className="low_volt_link" href>
                  Где купить{" "}
                </a>
                <br />
                <a className="low_volt_link" href>
                  Мероприятия
                </a>
                <br />
                <a className="low_volt_link" href>
                  Поддержка
                </a>
                <br />
                <a className="low_volt_link" href>
                  Контакты
                </a>
              </div>
              <div class="footer_socials">
              <div class="footer_social_circle">
                  <img
                    className="advantage_cards__icon2"
                    src={face}
                    alt="ins"
                  />
                </div>
                <div class="footer_social_circle">
                  <img
                    className="advantage_cards__icon2"
                    src={twit}
                    alt="ins"
                  />
                </div>
                <div class="footer_social_circle">
                  <img
                    className="advantage_cards__icon2"
                    src={teg}
                    alt="ins"
                  />
                </div>
                <div class="footer_social_circle">
                  <img
                    className="advantage_cards__icon2"
                    src={ins}
                    alt="ins"
                  />
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
