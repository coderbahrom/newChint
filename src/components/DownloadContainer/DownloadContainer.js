import React from 'react'
import './DownloadContainer.css'
import strelka from '../assets/images/strelka.png'
import pdf from '../assets/images/pdf.png'
function DownloadContainer({docTitle}){
    return (
        <div className='chintWorld7_skachatContainer'>
            <img src={pdf} alt='rasm'/>
            <p>{docTitle}</p>
            <p>Cкачать</p>
            <img src={strelka} alt='rasm'/>
        </div>
    )
}

export default DownloadContainer
