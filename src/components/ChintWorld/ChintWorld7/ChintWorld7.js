import React from 'react'
import Header from '../../Navbar/Header'
import './ChintWorld7.css'
import NavbarButtom from '../NavbarButtom'
import './world7_content_main_row123.css'
import DownloadContainer from '../../DownloadContainer/DownloadContainer'
import Footer from '../../Footer/Footer'
import {useState} from 'react'
var arrData = [
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement',certificate:'certificate',documentation:'documentation'},
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement'},
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement'},
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement'},
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement'},
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement'},
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement'},
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement'},
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement'},
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement'},
    {docTitle:'NH40 - Паспорт устройства',advertisement:'advertisement'},
    {docTitle:'NH40 - Паспорт устройства',certificate:'certificate'},
    {docTitle:'NH40 - Паспорт устройства',certificate:'certificate'},
    {docTitle:'NH40 - Паспорт устройства',certificate:'certificate'},
    {docTitle:'NH40 - Паспорт устройства',certificate:'certificate'},
    {docTitle:'NH40 - Паспорт устройства',certificate:'certificate'},
    {docTitle:'NH40 - Паспорт устройства',certificate:'certificate'},
    {docTitle:'NH40 - Паспорт устройства',certificate:'certificate'},
    {docTitle:'NH40 - Паспорт устройства',certificate:'certificate'},
    {docTitle:'NH40 - Паспорт устройства',certificate:'certificate'},
    {docTitle:'NH40 - Паспорт устройства',certificate:'certificate'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc1:'doc1'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc1:'doc1'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc1:'doc1'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc1:'doc1'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc1:'doc1'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc1:'doc1'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc1:'doc1'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc2:'doc2'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc2:'doc2'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc2:'doc2'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc2:'doc2'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc2:'doc2'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc2:'doc2'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc2:'doc2'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc3:'doc3'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc3:'doc3'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc3:'doc3'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc3:'doc3'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc3:'doc3'},
    {docTitle:'NH40 - Паспорт устройства',documentation:'documentation', doc3:'doc3'},


]

function ChintWorld7(){
    const [downloadDocData,setDownloadDocData] = useState(arrData)
    const [downloadDocDataMain,setDownloadDocDataMain] = useState(arrData)
    const [extraDownloadDocData,setExtraDownloadDocData] = useState([])
    const [showData,setShowData] = useState({display:'none'})
    console.log(setDownloadDocDataMain)
    const [world7Active, setWorld7Active] = useState({world7ActiveState1:true,world7ActiveState2:false,world7ActiveState3:false,world7ActiveState4:false})
    function displayNone1(){
        setShowData({display:'none'})
        setWorld7Active({world7ActiveState1:true,world7ActiveState2:false,world7ActiveState3:false,world7ActiveState4:false})
        setDownloadDocData(downloadDocDataMain)
    }
    function displayNone2(){
        setShowData({display:'none'})
        setWorld7Active({world7ActiveState1:false,world7ActiveState2:true,world7ActiveState3:false,world7ActiveState4:false})
        const newFilteredData = downloadDocDataMain.filter((item,index)=>{
                return item.advertisement
        })
        setDownloadDocData(newFilteredData)
    }
    function displayNone3(){
        setShowData({display:'none'})
        setWorld7Active({world7ActiveState1:false,world7ActiveState2:false,world7ActiveState3:true,world7ActiveState4:false})
        const newFilteredData = downloadDocDataMain.filter((item,index)=>{
            return item.certificate
    })
    setDownloadDocData(newFilteredData)
    }

    function displayBlock(){
        setShowData({display:'flex'})
        setWorld7Active({world7ActiveState1:false,world7ActiveState2:false,world7ActiveState3:false,world7ActiveState4:true})
        const newFilteredData = downloadDocDataMain.filter((item,index)=>{
            return item.documentation
    })
    setDownloadDocData(newFilteredData)
    setExtraDownloadDocData(newFilteredData)
    }

    function displayBlockInnerFun1(){
        const newFilteredData = extraDownloadDocData.filter((item,index)=>{
            return item.doc1
    })
    setDownloadDocData(newFilteredData)
    }
    
    function displayBlockInnerFun2(){
        const newFilteredData = extraDownloadDocData.filter((item,index)=>{
            return item.doc2
    })
    setDownloadDocData(newFilteredData)
    }
    function displayBlockInnerFun3(){
        const newFilteredData = extraDownloadDocData.filter((item,index)=>{
            return item.doc3
    })
    setDownloadDocData(newFilteredData)
     
    }

    const world7ActvieStyle={
        backgroundColor:'#1E59A4',
        color:'#FFFEFE' 
    }

    return (
        <>
        <div className='world7_container'>
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
                    <button style={world7Active.world7ActiveState1 ? world7ActvieStyle : {}} onClick={displayNone1}> Все</button>
                    <button style={world7Active.world7ActiveState2 ? world7ActvieStyle : {}} onClick={displayNone2}> Рекламные материалы</button>
                    <button style={world7Active.world7ActiveState3 ? world7ActvieStyle : {}} onClick={displayNone3}> Сертификаты</button>
                    <button style={world7Active.world7ActiveState4 ? world7ActvieStyle : {}} onClick={displayBlock}>Техническая документация</button>
                </div>
                <div className='world7_content_main_row2_display_buttomData' style={showData} >
                    <p onClick={displayBlockInnerFun1}>Руководства по эксплуатации</p>
                    <p onClick={displayBlockInnerFun2}>Инструкции по монтажу</p>
                    <p onClick={displayBlockInnerFun3}>Паспорта устройств</p>
                </div>
                <div className='world7_content_main_row3'>
                    <input type='search' placeholder='Найти нужный материал' />
                </div>
                <div className='world7_content_main_row4'>
                    { 
                        downloadDocData.map((item,index)=>{
                            return <DownloadContainer docTitle={item.docTitle}/>
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
