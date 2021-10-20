import React from 'react'
import './NavbarButtom.css'
import {Link} from 'react-router-dom'
function NavbarButtom({link1,link2,link3}) {
    return (
        <div className='NavbarButton_container'>
            <Link>{link1}</Link>
            <Link>{link2}</Link>
            <Link>{link3}</Link>
        </div>
    )
}

export default NavbarButtom
