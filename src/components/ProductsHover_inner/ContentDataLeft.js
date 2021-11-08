import React from 'react'
import Squre from './Squre'
import filter1 from '../assets/images/filter1.png'
import {useState} from 'react'
import './Content_data_left.css'

const SqurePoleData = [
    {pole:'1P',parenthesis:'14'},
    {pole:'2P',parenthesis:'14'},
    {pole:'3P',parenthesis:'14'},
    {pole:'4P',parenthesis:'14'}
]
const SqureAmperData =[
    {Amper:'1A',parenthesis:'1'},
    {Amper:'2A',parenthesis:'1'},
    {Amper:'3A',parenthesis:'1'},
    {Amper:'4A',parenthesis:'1'},
    {Amper:'6A',parenthesis:'1'},
    {Amper:'10A',parenthesis:'1'},
    {Amper:'13A',parenthesis:'1'},
    {Amper:'16A',parenthesis:'1'},
    {Amper:'20A',parenthesis:'1'},
    {Amper:'25A',parenthesis:'1'},
    {Amper:'32A',parenthesis:'1'},
    {Amper:'40A',parenthesis:'1'},
    {Amper:'50A',parenthesis:'1'},
    {Amper:'63A',parenthesis:'1'},
]
const ultimateCapacity =[
    {capacity:'6kA',parenthesis:'42'}
]

const VoltData = [
    {volt:'250B',parenthesis:'15'},
    {volt:'500B',parenthesis:'15'},
    {volt:'1000B',parenthesis:'12'},
]
const characteristicData = [
    {char:'C', parenthesis:'42'}
]

const seryaData =[
    {serya:'NM8',parenthesis:'S'}
]

function ContentDataLeft(){
    const [collectData,setCollectData] = useState({pole:'', Amper:'', capacity:'', volt:'', char:''})
    function checkedPole(index){
        
    } 
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
                                        return <Squre onClick={()=>checkedPole(index)} filterTitle1={item.pole} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre filterTitle1={item.Amper} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre filterTitle1={item.capacity} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre filterTitle1={item.serya} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre filterTitle1={item.volt} filterTitle2={item.parenthesis}/>
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
                                         return  <Squre filterTitle1={item.char} filterTitle2={item.parenthesis}/>
                                   })  
                                 }
                                
                            </div>
                      </div>

    )
}

export default ContentDataLeft
