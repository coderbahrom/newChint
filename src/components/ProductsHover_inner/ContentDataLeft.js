import React from 'react'
import Squre from './Squre'

import filter1 from '../assets/images/filter1.png'
import './Content_data_left.css'
import {useState,useEffect} from 'react'


const SqurePoleData1 = [
    {id:1, pole:'1P',parenthesis:'14',checked:false,disabled:false},
    {id:2, pole:'2P',parenthesis:'14',checked:false,disabled:false},
    {id:3,pole:'3P',parenthesis:'14',checked:false,disabled:false},
    {id:4,pole:'4P',parenthesis:'14',checked:false,disabled:false}
]

const SqureAmperData1 =[
    {id:1,amper:'1A',parenthesis:'1',checked:false,disabled:false},
    {id:2,amper:'2A',parenthesis:'1',checked:false,disabled:false},
    {id:3,amper:'3A',parenthesis:'1',checked:false,disabled:false},
    {id:4,amper:'4A',parenthesis:'1',checked:false,disabled:false},
    {id:5,amper:'6A',parenthesis:'1',checked:false,disabled:false},
    {id:6,amper:'10A',parenthesis:'1',checked:false,disabled:false},
    {id:7,amper:'13A',parenthesis:'1',checked:false,disabled:false},
    {id:8,amper:'16A',parenthesis:'1',checked:false,disabled:false},
    {id:9,amper:'20A',parenthesis:'1',checked:false,disabled:false},
    {id:10,amper:'25A',parenthesis:'1',checked:false,disabled:false},
    {id:11,amper:'32A',parenthesis:'1',checked:false,disabled:false},
    {id:12,amper:'40A',parenthesis:'1',checked:false,disabled:false},
    {id:13,amper:'50A',parenthesis:'1',checked:false,disabled:false},
    {id:14,amper:'63A',parenthesis:'1',checked:false,disabled:false},
]
const ultimateCapacity1 =[
    {id:1,capacity:'6kA',parenthesis:'42',checked:false,disabled:false}
]

const VoltData1 = [
    {id:1,volt:'250B',parenthesis:'15',checked:false,disabled:false},
    {id:2,volt:'500B',parenthesis:'15',checked:false,disabled:false},
    {id:3,volt:'1000B',parenthesis:'12',checked:false,disabled:false},
]
const characteristicData1 = [
    {id:3,char:'C', parenthesis:'42',checked:false,disabled:false}
]

const seryaData1 =[
    {id:4,serya:'NM8',parenthesis:'S',checked:false,disabled:false}
]

function ContentDataLeft(){
    const [collectData,setCollectData] = useState({pole:[], amper:[], capacity:[], serya:[], volt:[], char:[]})
    const [SqurePoleData, setSqurePoleData] = useState(SqurePoleData1)
    const [SqureAmperData, setSqureAmperData] = useState(SqureAmperData1)
    const [ultimateCapacity, setUltimateCapacity] = useState(ultimateCapacity1)
    const [VoltData, setVoltData] = useState(VoltData1)
    const [characteristicData, setCharacteristicData] = useState(characteristicData1)
    const [seryaData, setSeryaData] = useState(seryaData1)
  
    function checkedPole(index='false'){
        
        const temporary = SqurePoleData
        if(index !== 'false'){temporary[index].checked = !temporary[index].checked }
        
        if (collectData.amper.length > 0 || collectData.capacity.length > 0 || collectData.serya.length > 0  || collectData.volt.length > 0  || collectData.char.length > 0 ) {
                temporary.forEach((item,ind)=>{
                    item.checked===true ? item.disabled=false : item.disabled=true
                    
                })
                var result = temporary.every((item)=>{
                    return item.disabled===true
                })
                result && temporary.forEach(item=>item.disabled=false)
        } 
        if (collectData.amper.length === 0 && collectData.capacity.length === 0 && collectData.serya.length === 0  && collectData.volt.length  ===0  && collectData.char.length === 0 ) {
                temporary.forEach((item,ind)=>{
                    item.disabled=false 
                    
                })
        } 

        if(index !== 'false'){ var d = new Set(collectData.pole)
                if(temporary[index].checked===true){
                    d.add(SqurePoleData[index].pole)
                }
                else{
                    d.delete(SqurePoleData[index].pole)
                }
                setCollectData({...collectData, pole:[...d]})
        }

        setSqurePoleData([...temporary])
        
        
    } 

    function checkedAmper(index='false'){
        
        const temporary = SqureAmperData
        if(index !== 'false'){temporary[index].checked = !temporary[index].checked}

        if (collectData.pole.length > 0 || collectData.capacity.length > 0 || collectData.serya.length > 0  || collectData.volt.length > 0  || collectData.char.length > 0 ) {
            temporary.forEach((item,ind)=>{
                 item.checked===true ? item.disabled = false  : item.disabled=true
            })
            var result = temporary.every((item)=>{
                return item.disabled===true
            })
            result && temporary.forEach(item=>item.disabled=false)
        }  
       
        if (collectData.pole.length === 0 && collectData.capacity.length === 0 && collectData.serya.length === 0  && collectData.volt.length  ===0  && collectData.char.length === 0 ) {
            temporary.forEach((item,ind)=>{
                item.disabled=false 
                
            })
        } 
        
        if(index !== 'false'){ var d = new Set(collectData.amper);
            if(temporary[index].checked===true){
                d.add(SqureAmperData[index].amper)
            }
            else{
                d.delete(SqureAmperData[index].amper)
            }
            setCollectData({...collectData,amper:[...d]})
        }
        setSqureAmperData([...temporary])
        
        
      
        
    }

    function checkedCapacity(index='false'){
        const temporary = ultimateCapacity
        if(index !== 'false'){ temporary[index].checked = !temporary[index].checked}

        if (collectData.pole.length > 0 || collectData.amper.length > 0 || collectData.serya.length > 0  || collectData.volt.length > 0  || collectData.char.length > 0 ) {
                temporary.forEach((item,ind)=>{
                    item.checked===true ? item.disabled=false   : item.disabled=true
                })
                var result = temporary.every((item)=>{
                    return item.disabled===true
                })
                result && temporary.forEach(item=>item.disabled=false)
            
        }  

        if (collectData.amper.length === 0 && collectData.pole.length === 0 && collectData.serya.length === 0  && collectData.volt.length  ===0  && collectData.char.length === 0 ) {
                temporary.forEach((item,ind)=>{
                    item.disabled=false 
                    
                })
        } 
        if(index !== 'false'){
                var d = new Set(collectData.capacity);
                if(temporary[index].checked===true){
                    d.add(ultimateCapacity[index].capacity)
                }
                else{
                    d.delete(ultimateCapacity[index].capacity)
                }
                setCollectData({...collectData,capacity:[...d]})
        }
        setUltimateCapacity([...temporary])
       

    }

    function checkedserya(index='false'){
        const temporary = seryaData
        if(index !== 'false'){ temporary[index].checked = !temporary[index].checked }

        if (collectData.pole.length > 0 || collectData.amper.length > 0 || collectData.capacity.length > 0  || collectData.volt.length > 0  || collectData.char.length > 0 ) {
            temporary.forEach((item,ind)=>{
                 item.checked===true ? item.disabled=false   : item.disabled=true
            })
            var result = temporary.every((item)=>{
                return item.disabled===true
            })
            result && temporary.forEach(item=>item.disabled=false)
           
        } 

        if (collectData.amper.length === 0 && collectData.capacity.length === 0 && collectData.pole.length === 0  && collectData.volt.length  === 0  && collectData.char.length === 0 ) {
            temporary.forEach((item,ind)=>{
                item.disabled=false 
                
            })
        } 
        if(index !== 'false'){
                var d = new Set(collectData.serya);
                if(temporary[index].checked===true){
                    d.add(seryaData[index].serya)
                }
                else{
                    d.delete(seryaData[index].serya)
                }
                setCollectData({...collectData,serya:[...d]})
        }
        setSeryaData([...temporary])   
  }

     function checkedVolt(index='false'){
        const temporary = VoltData
        if(index !== 'false'){ temporary[index].checked = !temporary[index].checked}
        if (collectData.pole.length > 0 || collectData.amper.length > 0 || collectData.serya.length > 0  || collectData.capacity.length > 0  || collectData.char.length > 0 ) {
            temporary.forEach((item,ind)=>{
                 item.checked===true ? item.disabled=false   : item.disabled=true
            })
            var result = temporary.every((item)=>{
                return item.disabled===true
            })
            result && temporary.forEach(item=>item.disabled=false)
           
        } 
        if (collectData.amper.length === 0 && collectData.capacity.length === 0 && collectData.serya.length === 0  && collectData.pole.length  ===0  && collectData.char.length === 0 ) {
            temporary.forEach((item,ind)=>{
                item.disabled=false 
                
            })
        } 
        if(index !== 'false'){
                var d = new Set(collectData.volt);
                if(temporary[index].checked===true){
                    d.add(VoltData[index].volt)
                }
                else{
                    d.delete(VoltData[index].volt)
                }
                setCollectData({...collectData,volt:[...d]})
        }

        setVoltData([...temporary])
        
    }
    

      function checkedCharacter(index='false'){
        const temporary = characteristicData
        if(index !=='false'){ temporary[index].checked = !temporary[index].checked}
        if (collectData.pole.length > 0 || collectData.amper.length > 0 || collectData.serya.length > 0  || collectData.capacity.length > 0  || collectData.amper.length > 0 ) {
            temporary.forEach((item,ind)=>{
                 item.checked===true ? item.disabled=false   : item.disabled=true
            })
            var result = temporary.every((item)=>{
                return item.disabled===true
            })
            result && temporary.forEach(item=>item.disabled=false)
           
        } 
        if (collectData.amper.length === 0 && collectData.capacity.length === 0 && collectData.serya.length === 0  && collectData.pole.length  ===0  && collectData.volt.length === 0 ) {
            temporary.forEach((item,ind)=>{
                item.disabled=false 
                
            })
        } 
        if(index !== 'false'){
                var d = new Set(collectData.char);
                if(temporary[index].checked===true){
                    d.add(characteristicData[index].char)
                }
                else{
                    d.delete(characteristicData[index].char)
                }
                setCollectData({...collectData,char:[...d]})
        }

        setCharacteristicData([...temporary])
    }
    

    useEffect(() => {  
    console.log(collectData);
    checkedPole();
    checkedAmper();
    checkedCapacity();
    checkedserya();
    checkedVolt();
    checkedCharacter();
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
                                        return <Squre CommonItem={item} checking={checkedPole} index={index} filterTitle1={item.pole} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre  CommonItem={item} checking={checkedAmper} index={index} filterTitle1={item.amper} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre CommonItem={item} checking= {checkedCapacity} index={index} filterTitle1={item.capacity} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre CommonItem={item} checking= {checkedserya} index={index} filterTitle1={item.serya} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre CommonItem={item}  checking= {checkedVolt} index={index} filterTitle1={item.volt} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre CommonItem={item} checking= {checkedCharacter} index={index} filterTitle1={item.char} filterTitle2={item.parenthesis}/>
                                   })  
                                 }
                                
                            </div>
                      </div>

    )
}

export default ContentDataLeft
