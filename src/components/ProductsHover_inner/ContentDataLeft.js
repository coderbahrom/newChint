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
    const [show, setShow] = useState(false)


    function checkedPole(index){
        SqurePoleData.forEach((item,ind )=> {
            if(index===ind){
                SqurePoleData[index].still = !SqurePoleData[index].still
            }
            else{
                item.still=false;
            }
            
        });
        
        setCollectData({...collectData, pole:SqurePoleData[index].pole})
    }

    function checkedAmper(index){
         SqureAmperData.forEach((item,ind ) => {
            if(index===ind){
                SqureAmperData[index].still=!SqureAmperData[index].still
            }
            else{
                item.still=false;
            }
           
        });
        
        setCollectData({...collectData,Amper:SqureAmperData[index].Amper})
    }
    function checkedCapacity(index){
        ultimateCapacity.forEach((item,ind )=> {
             if(index===ind){
                ultimateCapacity[index].still=!ultimateCapacity[index].still
            }
            else{
                item.still=false;
            }
            
            
        });
        
        setCollectData({...collectData,capacity:ultimateCapacity[index].capacity})
       
    }
     function checkedVolt(index){
         
        VoltData.forEach((item,ind ) => {
            if(index===ind){
                VoltData[index].still=!VoltData[index].still
            }
            else{
                item.still=false;
            }
            
        });
        
        setCollectData({...collectData,volt:VoltData[index].volt})
    }
      function checkedCharacter(index){
           characteristicData.forEach((item,ind ) => {
            if(index===ind){
                characteristicData[index].still=!characteristicData[index].still
            }
            else{
                item.still=false;
            }
           
        });
          
          setCollectData({...collectData,char:characteristicData[index].char})
    }
      function checkedserya(index){
           seryaData.forEach((item,ind ) => {
            if(index===ind){
                seryaData[index].still = !seryaData[index].still
            }
            else{
                item.still=false;
            }
           
        });
         
          setCollectData({...collectData,serya:seryaData[index].serya})
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
                                        return <Squre still={item.still}   show={show} checking ={checkedPole} index={index} filterTitle1={item.pole} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre  still={item.still}  show={show} checking={checkedAmper} index={index} filterTitle1={item.Amper} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre still={item.still} show={show} checking= {checkedCapacity} index={index} filterTitle1={item.capacity} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre still={item.still}  show={show} checking= {checkedserya} index={index} filterTitle1={item.serya} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre still={item.still}  show={show}  checking= {checkedVolt} index={index}filterTitle1={item.volt} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre still={item.still}  show={show} checking= {checkedCharacter} index={index} filterTitle1={item.char} filterTitle2={item.parenthesis}/>
                                   })  
                                 }
                                
                            </div>
                      </div>

    )
}

export default ContentDataLeft
