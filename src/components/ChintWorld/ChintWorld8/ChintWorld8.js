import React from 'react'
import Header from '../../Navbar/Header'
import NavbarButtom from '../NavbarButtom'
import './ChintWorld8.css'
import ShowImage from '../ShowImage'
import Shid from '../../assets/images/shid.png'
import Footer from '../../Footer/Footer'
const hidden = {
    display:'none'
}
const styleTop={
    marginTop: '6vw'
}
const styleBackground ={
    backgroundImage: `url(${Shid})`,
    backgroundSize:'fit-content fit-content',
}
function ChintWorld8(){
    return (
        <>
            <div className="container">
                <Header />
            </div>

            <div className="world8_content">
                <NavbarButtom
                link1={"Главная / "}
                link2={"О компании"}
                link3={"/ CHINT в мире"}
                />
                <ShowImage show_titl1='Гарантия и ремонт' hidden={hidden} styleTop={styleTop} styleBackground={styleBackground}/>
                <div className="world8_container">
                    <p>Мы глубоко признательны Вам за выбор продукции Chint Electric. Предлагая надежные и качественные решения, наша компания готова обеспечить им соответствующий сервис, в том числе и услуги по гарантийному и постгарантийному обслуживанию</p>

                    <p> Реализуемая в компании стратегия, нацеленная на повышение надежности, охватывает весь жизненный цикл изделия, начиная от проектирования и заканчивая анализом результатов эксплуатации в реальных условиях. В случае возникновения ситуации, когда появилась необходимость произвести ремонт, наши специалисты сделают всё, чтобы он был выполнен качественно и в минимальные сроки.</p>

                    <p> В случае возникновения возможных неисправностей или иных вопросов по продукции Chint Electric Вы всегда можете обратиться в технический отдел:</p>
                    
                    <p>
                        Тел: +7 (495) 540-61-41 (доб. 106)<br/>
                        E-mail: pyanykhl@chintglobal.com 
                     </p>
                    
                </div>
            </div> 
            <Footer/> 
        </>
    )
}

export default ChintWorld8
