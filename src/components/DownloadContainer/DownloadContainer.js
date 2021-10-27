import React from 'react'
import './DownloadContainer.css'
import strelka from '../assets/images/strelka.png'
import pdf from '../assets/images/pdf.png'
function DownloadContainer(){
    return (
        <div className='downloadContainer'>
            <img src={pdf} alt='rasm'/>
            <p>NH40 - Паспорт устройства</p>
            <p>Cкачать</p>
            <img src={strelka} alt='rasm'/>
        </div>
    )
}

export default DownloadContainer
