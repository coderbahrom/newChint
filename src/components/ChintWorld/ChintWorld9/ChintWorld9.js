import React from 'react'
import Header from '../../Navbar/Header'
import NavbarButtom from '../NavbarButtom'
import './ChintWorld9.css'
import ShowImage from '../ShowImage'
import operator from '../../assets/images/operator.png'
import Footer from '../../Footer/Footer'

const hidden = {
    display:'none'
}
const styleTop={
    marginTop: '6vw',
    fontFamily: 'Urbanist',
    fontSize: '3.51vw',
    fontStyle: 'normal',
    fontWeight: '800',
}
const styleBackground ={
    backgroundImage: `url(${operator})`,
}
function ChintWorld9() {
    return (
        <>
            <div className="container">
                <Header />
            </div>

            <div className="world9_content">
                <NavbarButtom
                link1={"Главная / "}
                link2={"О компании"}
                link3={"/ CHINT в мире"}
                />
                <ShowImage show_titl1='Техническое консультирование' hidden={hidden} styleTop={styleTop} styleBackground={styleBackground}/>
                <div className="world9_container">
                    <p>В случае возникновения нетривиальных ситуаций или иных вопросов, касающихся продукции Chint Electric, специалисты технического отдела готовы оказать качественное и оперативное консультирование.</p>

                    <p>Мы поможем вам ответить на вопросы, связанные с эксплуатацией приобретенного оборудования, подобрать аналоги по заданным параметрам, окажем помощь в устранении возникших трудностей при монтаже.</p>

                    <p>Служба технической поддержки работает по будням с 9:00 до 18:00. Для обращения вы можете:</p>
                    
                    <ul>
                        <li>Позвонить по телефону +7 (495) 540-61-41 (доб. 113)</li>
                        <li>Написать на почту pyanykhl@chintglobal.com </li>
                        <li>Оставить заявку в форме обратной связи</li>
                    </ul>



                </div>

            </div> 
            <Footer/>
        </>
    )
}

export default ChintWorld9
