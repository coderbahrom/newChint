
import NavbarButtom from "../NavbarButtom";
import Header from "../../Navbar/Header";
import ShowImage from "../ShowImage";
import './ChintWorld4.css'
import React, { useState } from 'react';
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChintServices from '../ChintInWorld3/ChintServices'
import product1 from '../ChintInWorld3/chintasset/production-icon-3.png'
import product2 from "../ChintInWorld3/chintasset/production-icon-2.png";
import product3 from "../ChintInWorld3/chintasset/production-icon-1.png";
import product4 from "../ChintInWorld3/chintasset/production-icon-4.png";
import product5 from "../ChintInWorld3/chintasset/production-icon-5.png";
import ModalForm from "./Modal";
import { useForm } from "react-hook-form";

const data3 = [
    {
      id: 1,
      img: product1,
      title: "Внедрению передовых технологий",
    },
    {
      id: 2,
      img: product2,
      title: "Автоматизации производственных процессов",
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
  const hidden = {
      display:'none'
  }
  function ChintWorld4() {
    const { register, handleSubmit, watch , reset, formState: { errors } } = useForm();
    const notify = () => toast("Malumot Saqlandi!");
    const notify1 = () => toast("Malumot Saqlanmadi!");
    const[modalVisible, setModalvisible]=useState(false)

    function toggleModal(){
            setModalvisible(prev=>!prev)
            if(modalVisible===true){

              notify() }
             
          }
          function onSubmit(data){
            console.log(data)
            reset()
   
    }

  return (
    <>
      <div className={"wrapper2"}>
      <ToastContainer />
        <Header />
       
      </div>

      <div className="bigContainer">
        <div className="showimg">
          <NavbarButtom
            link1="Главная /"
            link2=" О компании /"
            link3=" CHINT в мире"
          />
          <ShowImage
            show_titl1="Сотрудничество"
            show_titl3="Компания CHINT является с одним из ведущих производителей электротехнической
          продукции на мировом рынке. 
          В рамках стратегии развития партнерской сети на территории России и СНГ мы активно расширяем присутствие компании во всех регионах."
            hidden={hidden}
         />
        </div>
   
      <div className="Products">

      <div className="production">
            {data3.map((value, index) => {
              return (
                <div key={data3.id}>
                  <ChintServices data={value} />
                </div>
              );
            })}
          </div>
      </div>
      <div className="text">
          <p>Партнерская программа, реализуемая Chint Electric, открывает множество возможностей для взаимного развития бизнеса. Мы предоставляем партнерам набор инструментов для эффективной работы по реализации продукции, а также всегда готовы оказать дополнительную поддержку в случае необходимости.</p>
<p>
Чтобы получить подробную информацию о программе, просто оставьте заявку, и мы обязательно с вами свяжемся!</p>
      </div>
     
      <div className={'btn'}>
          <button onClick={toggleModal}>Оставить заявку</button>
      </div>
      <div className="footer">
          <Footer />
        </div>
      </div>
      <ModalForm isOpen={modalVisible} toggle={toggleModal}  save={onSubmit}/>
     
    </>
  );
}

export default ChintWorld4;
