import React from 'react'
import Squre from './Squre'

import filter1 from '../assets/images/filter1.png'
import './Content_data_left.css'
import {useState,useEffect} from 'react'
const SqurePoleData = [
    {id:1, pole:'1P',parenthesis:'14',still:false,disabled:false},
    {id:2, pole:'2P',parenthesis:'14',still:false,disabled:false},
    {id:3,pole:'3P',parenthesis:'14',still:false,disabled:false},
    {id:4,pole:'4P',parenthesis:'14',still:false,disabled:true}
]
const SqureAmperData =[
    {id:5,Amper:'1A',parenthesis:'1',still:false},
    {id:6,Amper:'2A',parenthesis:'1',still:false},
    {id:7,Amper:'3A',parenthesis:'1',still:false},
    {id:8,Amper:'4A',parenthesis:'1',still:false},
    {id:9,Amper:'6A',parenthesis:'1',still:false},
    {id:10,Amper:'10A',parenthesis:'1',still:false},
    {id:11,Amper:'13A',parenthesis:'1',still:false},
    {id:12,Amper:'16A',parenthesis:'1',still:false},
    {id:13,Amper:'20A',parenthesis:'1',still:false},
    {id:14,Amper:'25A',parenthesis:'1',still:false},
    {id:15,Amper:'32A',parenthesis:'1',still:false},
    {id:16,Amper:'40A',parenthesis:'1',still:false},
    {id:17,Amper:'50A',parenthesis:'1',still:false},
    {id:18,Amper:'63A',parenthesis:'1',still:false},
]
const ultimateCapacity =[
    {id:19,capacity:'6kA',parenthesis:'42',still:false}
]

const VoltData = [
    {id:20,volt:'250B',parenthesis:'15',still:false},
    {id:21,volt:'500B',parenthesis:'15',still:false},
    {id:22,volt:'1000B',parenthesis:'12',still:false},
]
const characteristicData = [
    {id:23,char:'C', parenthesis:'42',still:false}
]

const seryaData =[
    {id:24,serya:'NM8',parenthesis:'S',still:false}
]

function ContentDataLeft(){
    const [collectData,setCollectData] = useState({pole:'', Amper:'', capacity:'', volt:'', char:''})
    const [getActive1, setGetActive1] = useState('')
    const [getActive2, setGetActive2] = useState('')
    const [getActive3, setGetActive3] = useState('')
    const [getActive4, setGetActive4] = useState('')
    const [getActive5, setGetActive5] = useState('')
    const [getActive6, setGetActive6] = useState('')
 



    function checkedPole(index){
        if(getActive1===index){
            setGetActive1('')
        }
        else{
            setGetActive1(index)
        }
        
        setCollectData({...collectData, pole:SqurePoleData[index].pole})
    }

    function checkedAmper(index){
        if(getActive2===index){
            setGetActive2('')
        }
        else{
            setGetActive2(index)
        }
        
        setCollectData({...collectData,Amper:SqureAmperData[index].Amper})
    }
    function checkedCapacity(index){
        if(getActive3===index){
            setGetActive3('')
        }
        else{
            setGetActive3(index)
        }
        setCollectData({...collectData,capacity:ultimateCapacity[index].capacity})
       
    }
    function checkedserya(index){
        if(getActive4===index){
            setGetActive4('')
        }
        else{
            setGetActive4(index)
        }
       
        setCollectData({...collectData,serya:seryaData[index].serya})
  }
     function checkedVolt(index){
        if(getActive5===index){
            setGetActive5('')
        }
        else{
            setGetActive5(index)
        }
        
        setCollectData({...collectData,volt:VoltData[index].volt})
    }
    

      function checkedCharacter(index){
        if(getActive6===index){
            setGetActive6('')
        }
        else{
            setGetActive6(index)
        }
          setCollectData({...collectData,char:characteristicData[index].char})
    }
    
    useEffect(() => {  
    console.log(collectData);
}, [collectData])
    
    return (
        <div className='content_data_left'>
                            <div className='filter_justify'>
                                <img src={filter1} alt="rasm"/>
                                <h3>Фильтр товаров</h3>
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Количество полюсов</p>
                            </div>
                            <div className='many_button'>

                                 {
                                     SqurePoleData.map((item,index)=>{
                                        return <Squre CommongetActive={getActive1} checking={checkedPole} index={index} filterTitle1={item.pole} filterTitle2={item.parenthesis}/>
                                     })
                                 }

                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Номинальный ток</p>
                            </div>
                            <div className='many_button'>
                                 {
                                   SqureAmperData.map((item,index)=>{
                                         return  <Squre  CommongetActive={getActive2} checking={checkedAmper} index={index} filterTitle1={item.Amper} filterTitle2={item.parenthesis}/>
                                   })  
                                 }
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Предельная отключающая способность</p>
                            </div>
                            <div className='many_button'>
                                {
                                   ultimateCapacity.map((item,index)=>{
                                         return  <Squre CommongetActive={getActive3} checking= {checkedCapacity} index={index} filterTitle1={item.capacity} filterTitle2={item.parenthesis}/>
                                   })  
                                 }
                                 
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Для серии</p>
                            </div>
                            <div className='many_button'>
                                  {
                                   seryaData.map((item,index)=>{
                                         return  <Squre CommongetActive={getActive4} checking= {checkedserya} index={index} filterTitle1={item.serya} filterTitle2={item.parenthesis}/>
                                   })  
                                 }
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Рабочее напряжение DC</p>
                            </div>
                            <div className='many_button'>
                                 {
                                   VoltData.map((item,index)=>{
                                         return  <Squre CommongetActive={getActive5}  checking= {checkedVolt} index={index} filterTitle1={item.volt} filterTitle2={item.parenthesis}/>
                                   })  
                                 }
                                
                            </div>
                            <div className='line_title'>
                                <hr/>
                                <p>Характеристика кривой</p>
                            </div>
                            <div className='many_button'>
                                {
                                   characteristicData.map((item,index)=>{
                                         return  <Squre CommongetActive={getActive6} checking= {checkedCharacter} index={index} filterTitle1={item.char} filterTitle2={item.parenthesis}/>
                                   })  
                                 }
                                
                            </div>
                      </div>

    )
}

export default ContentDataLeft
