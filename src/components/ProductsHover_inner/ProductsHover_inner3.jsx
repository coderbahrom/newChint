import React from "react";
import Head from "../Hovers/ProductHover1/Head";
import Header from "../Navbar/Header";
import "./ProductsHover_inner3.css";
import Numbers from "./Numbers";
const data = [
  { id: 1, title: "1A" },
  { id: 2, title: "2A" },
  { id: 3, title: "3A" },
  { id: 4, title: "4A" },
  { id: 5, title: "5A" },
  { id: 6, title: "6A" },
  { id: 8, title: "10A" },
  { id: 9, title: "16A" },
  { id: 10, title: "20A" },
  { id: 11, title: "25A" },
  { id: 12, title: "32A" },
  { id: 13, title: "40A" },
  { id: 14, title: "50A" },
  { id: 15, title: "53A" },
];
function ProductsHover_inner3(props) {
  return (
    <div className={"wrapping"}>
      <div>
        <Header />
        <Head
          title1="Главная /Каталог продукции/Автоматические выключатели/DZ47-60, 1-63А, 4.5кА"
          title2="Автоматический выключатель DZ47-60 1P 16А 4.5кА х-ка C (CHINT)"
        />{" "}
      </div>
      <div className="body2">
        <div className="switch">
          <img src="./assets/images/switch1.jpg " alt="" />
        </div>
        <div className={"numbers"}>
          <h1>Номинальный ток:</h1>
          <div className="container1">
            {data.map((value, index) => {
              return <Numbers data={value} />;
            })}
          </div>
          <h1>Количество полюсов:</h1>
          <div className="container1">
            {data.slice(0, 4).map((value, index) => {
              return <Numbers data={value} />;
            })}
          </div>
          <h1>Характеристика кривой:</h1>
          <div className="container1">
            <div className={"squer"}> B</div>
            <div className={"squer"}> C</div>
            <div className={"squer"}> D</div>
          </div>
          <h1>Характеристика кривой:</h1>
          <ul className={"characters"}>
            <li>
              Артикул: <font>187974</font>{" "}
            </li>
            <li>
              Производитель:<font> CHINT </font>
            </li>
            <li>
              Количество полюсов:<font> 1P</font>
            </li>
            <li>
              Номинальный ток:<font> 16А</font>
            </li>
            <li>
              Предельная отключающая способность:<font> 4.5кА</font>
            </li>
            <li>
              Характеристика кривой: <font>C</font>
            </li>
          </ul>
          <div className="docs">
            <h1>Документация</h1>
            <ul className=" documents">
              <li>
                {" "}
                <img src="./assets/images/pdf.png" alt="" />{" "}
                <font>Посмотреть брошюру DZ47-60</font>{" "}
              </li>
              <li>
                <img src="./assets/images/pdf.png" alt="" />{" "}
                <p>Каталог продукции CHINT для инженеров.pdf </p>{" "}
              </li>
              <li>
                <img src="./assets/images/pdf.png" alt="" />{" "}
                <p> 2D-модель DZ47-60 1P 16A 4.5kA х-ка C.dwg</p>
              </li>
              <li>
                <img src="./assets/images/pdf.png" alt="" />{" "}
                <p>Каталог продукции CHINT с ценами.pdf </p>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn">
        <button>Описание</button>
        <button>Статьи</button>
        <button>Задать вопрос</button>
      </div>
      <div className="content">
        <p>
          Автоматический выключатель DZ47-60 представляет собой незаменимый
          компонент электрощитового оборудования. Благодаря ему обеспечивается
          защита сети и потребителей электроэнергии от сверхтоков и короткого
          замыкания. Устройство имеет надежную и проверенную временем
          конструкцию. В случае перегрузки или возникновения токов КЗ аппарат
          автоматически разрывает цепь. Отключающая способность данного
          модульного выключателя составляет 4,5 кА. Срабатывание по току КЗ
          соответствует характеристикам B, C, D. Автоматический выключатель
          DZ47-60 находит применение в энергосистемах на различных объектах
          жилищного строительства, коммунального хозяйства и сферы услуг.
        </p>
        <p>
          Модульные устройства данного модельного ряда предназначены для
          номинальных токов от 1 ампера до 63 ампер. Для более высоких
          номинальных токов стоит рассмотреть линейку модульных <font>автоматов DZ158</font>
          (до 125 А). Также компания CHINT выпускает другое модульное
          оборудование серии DZ — это <font> дифавтомат DZ47LE </font> и <font> выключатель нагрузки
          NH2.</font> На все устройства серии DZ получены международные сертификаты.
          Вот почему автоматы CHINT популярны во многих странах мира, включая
          страны Европейского союза. К выключателям серии DZ можно присоединить
          дополнительные аксессуары, которые расширят функционал устройства.
          Среди таких аксессуаров можно выделить вспомогательные <font>  контакты и
          расцепители.</font>
        </p>
      </div>
      <div className="advantages">
          <h1>Преимущества</h1>
          <div className={'container2'}>
            <div className={'content2'}> 
              <div className="content3">

                  <img src="./assets/icons/tick.png" alt="" />
                  Высокое качество<br /> комплектующих
              </div>
              </div>
               <div className={'content2'}> 
               <div className="content3">
 
                   <img src="./assets/icons/doc.png" alt="" />
                   Высокое качество<br /> комплектующих
               </div>
               </div>
               <div className={'content2'}> 
              <div className="content3">

                  <img src="./assets/icons/point2.png" alt="" />
                  Высокое качество<br /> комплектующих
              </div>
              </div>
              <div className={'content2'}> 
              <div className="content3">

                  <img src="./assets/icons/point.png" alt="" />
                  Высокое качество<br /> комплектующих
              </div>
              </div>
              <div className={'content2'}> 
              <div className="content3">

                  <img src="./assets/icons/like.png" alt="" />
                  Высокое качество<br /> комплектующих
              </div>
              </div>
              <div className={'content2'}> 
              <div className="content3">

                  <img src="./assets/icons/tick.png" alt="" />
                  Высокое качество<br /> комплектующих
              </div>
              </div>
               
             
          </div>
      </div>
      <div className="vedios">
        <h1>Обзор автоматов DZ и производства CHINT</h1>
        <div className={'youtube'}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8xVNgGYIsRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FQO_erp_vqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div className="textarea">
        <h1>3 причины выбрать модульные автоматы CHINT</h1>
        <div className={'rec'}>
          <img src="./assets/images/rec.png" alt="" />
          <p>Контроль качества. В составе холдинга есть собственная лаборатория для испытания новинок и выдачи сертификатов DEKRA. Каждое изделие проходит тщательную проверку перед продажей.</p>
        </div>
        <div className={'rec'}>
          <img src="./assets/images/rec.png" alt="" />
          <p>Доступные цены. На заводах CHINT полностью автоматизированное производство, поэтому уходит меньше затрат на человеческие ресурсы. Так компания поддерживает низкие цены на продукцию.</p>
        </div>
        <div className={'rec'}>
          <img src="./assets/images/rec.png" alt="" />
          <p>Все товары сертифицированы. Качество подтверждено международными сертификатами UL (США), VDE (Германия), KEMA (Нидерланды), EAC (Таможенный союз), RoHS. Последний заверяет, что продукция не вредит окружающей среде и не угрожает здоровью человека.</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsHover_inner3;
