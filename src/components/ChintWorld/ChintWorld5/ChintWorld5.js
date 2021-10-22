import React from "react";
import Header from "../../Navbar/Header";
import NavbarButtom from "../NavbarButtom";
import "./ChintWorld5.css";
import ImageAndData from "./ImageAndData";
import Footer from "../../Footer/Footer";
const styleTop = {
    marginTop:'100px'
}
function ChintWorld5() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="world5_content">
        <NavbarButtom
          link1={"Главная / "}
          link2={"О компании"}
          link3={"/ CHINT в мире"}
        />
        
        <div className="world5_container">
            <div className='world5_title_top'>
                <p>Новости и газета</p>
            </div>
          <ImageAndData/>
          <ImageAndData/>
          <ImageAndData/>
          <ImageAndData/>
          <ImageAndData/>
          <ImageAndData/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ChintWorld5;
