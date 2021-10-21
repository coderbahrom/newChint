import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Navbar/Header";
import campus1 from "./chintasset/campus1.png";
import campus from "./chintasset/campus.png";
import ChintServices from "./ChintServices";
import product1 from  './chintasset/production-icon-3.png'
import product2 from  './chintasset/production-icon-2.png'
import product3 from  './chintasset/production-icon-1.png'
import product4 from  './chintasset/production-icon-4.png'
import product5 from  './chintasset/production-icon-5.png'

import "./ChintInWorld3.css";
const data = [
  {
    id: 1,
    img: product1,
    title: "Внедрению передовых технологий",
  },
  {
    id: 2,
    img: product2,
    title: 'Автоматизации производственных процессов',
  },
  {
    id: 3,
    img: product3,
    title: "Использованию современного высокотехнологич-го оборудования",
  },
  {
    id: 4,
    img: product4,
    title: "Модернизации и расширению производства",
  },
  {
    id: 5,
    img: product5,
    title: "Контролю качества продукции на всех этапах ее изготовления",
  },
];
function ChintInWorld3() {
  return (
    <>
      <div className={"wrapper2"}>
        <Header />
      </div>

      <div className="bigContainer">
        <div className="containers">
          <div className="contents">
            <p>
              За 30 лет разработок группа компаний превратилась в крупнейшего в
              Азии поставщика низковольтной электротехнической продукции и
              является лидером всей электротехнической промышленности.
            </p>
            <span>
              <p>
                Корпорация имеет три научно-исследовательских центра,
                расположенные в Европе, Северной Америке и Китае, а также
                филиалы в более чем 50 странах мира. Штат корпорации насчитывает
                более 30 000 сотрудников по всему миру. CHINT предлагает
                надежные продукты , системные решения и услуги в более чем 100
                странах по всему миру.
              </p>
            </span>
          </div>
          <div className="number">
            <span className={"number1"}>
              <h1>3</h1>
              <div className={"rec1"}>
                <h1>Научно -исследовательских института</h1>
                <p>изделий различного назанчения</p>
              </div>
            </span>
            <div className="campus">
              <img src={campus} alt="" />
            </div>
          </div>
          <div className="number3">
            <div className="campus1">
              <img src={campus1} alt="" />
            </div>

            <div className="fifty">
              <h4>Более</h4>
              <h2>50</h2>
              <p>изделий различного назанчения</p>
            </div>
          </div>
        </div>
        <div className="Products">

        <div className="production">

{       
    data.map((value,index)=>{
        return(
            <div key={data.id}>
                <ChintServices data={value}/>
            </div>
        )
    })

}
        </div>
        </div>
        <div className="text">
            <p>
            Группа компаний имеет в своем портфеле ряд подразделений, деятельность которых направлена на отдельные сегменты и сферы деятельности в рамках рынка электротехнической продукции. Данные бренды охватывают такие области как: производство электроэнергии фотоэлектрическими установками, промышленная автоматизация, оборудование для передачи и распределения энергии, низковольтные электротехнические приборы, инструменты и счетчики, электроприборы для помещений, автоэлектрика и т.д.
            </p>
<p>


Это обеспечивает корпорации непревзойденное качество на всем пути: от производства, передачи, перераспределения и распределения электрической энергии до конечного потребления. Для заказчиков по всему миру CHINT обеспечивает системную поддержку продуктов, решений и услуг. 
            </p>
        </div>
        <div className="footer">

        <Footer/>
        </div>
      </div>
    </>
  );
}

export default ChintInWorld3;
