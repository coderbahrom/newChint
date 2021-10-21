import React from 'react'
import './showImage.css'
import downloadStrelka from '../assets/images/downloadStrelka.png'
function showImage() {
    return (
        <div className='showimage'>
            <div className={'common_container'}>
                <p>О компании</p>
                <p>Группа компаний CHINT основана в 1984</p>
                <p>На сегодняшний день является лидером мирового рынка в области электротехнической промышленности. Корпорация имеет в своем составе множество предприятий и подразделений, каждое из которых отвечает за различные сегменты разработки и производства.</p>
                <div> 
                    <img src={downloadStrelka} alt='rasm3'/>
                    <p>Презентация о компании</p>
                </div>
            </div>
        </div>
    )
}

export default showImage
