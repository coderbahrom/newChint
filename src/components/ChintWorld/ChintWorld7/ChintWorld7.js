import React from 'react'
import Header from '../../Navbar/Header'
import './ChintWorld7.css'
import NavbarButtom from '../NavbarButtom'
import './world7_content_main_row123.css'
import DownloadContainer from '../../DownloadContainer/DownloadContainer'
import Footer from '../../Footer/Footer'
var arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,]

function ChintWorld7() {
    return (
        <>
        <div className='container'>
            <Header/>
        </div>
        <div className="world7_content">
            <NavbarButtom
            link1={"Главная / "}
            link2={"О компании"}
            link3={"/ CHINT в мире"}
            />
            <div className='world7_content_main'>
                <div className='world7_content_main_row1'>
                    <p>Скачать</p>
                    <p>Всю техническую документацию, а также программное обеспечение, которые помогут, в работе с нашим оборудованием и программным обеспечением Вы найдёте в данном разделе. Для просмотра документации Вам потребуется программа Adobe Acrobat Reader. Бесплатно загрузить Acrobat Reader можно на сайте разработчика перейдя по ссылке.</p>
                </div>
                <div className='world7_content_main_row2'>
                    <button>Все</button>
                    <button>Рекламные материалы</button>
                    <button>Сертификаты</button>
                    <button>Техническая документация</button>
                </div>
                <div className='world7_content_main_row3'>
                    <input type='search' placeholder='Найти нужный материал' />
                </div>
                <div className='world7_content_main_row4'>
                    { 
                        arr.map((item,index)=>{
                            return <DownloadContainer/>
                        })
                    }
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ChintWorld7
