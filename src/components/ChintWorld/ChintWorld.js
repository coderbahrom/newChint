import React from 'react'
import './ChintWorld.css'
import Navbar from '../Navbar/Header'
import NavbarButtom from './NavbarButtom'
import ShowImage from './ShowImage'

function ChintWorld() {
    return (
        <>
            <div className='container'>
                <Navbar/>
            </div>
            <div className='second_content'>
                <NavbarButtom link1={"Главная / "} link2={'О компании'} link3={''}/>
                <ShowImage/>
            </div>
        </>
    )
}

export default ChintWorld;
