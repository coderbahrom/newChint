import React from 'react'
import './NavbarButtom.css'
import {Link} from 'react-router-dom'
const stylelink = {
    textDecoration: 'none',
    fontFamily: 'Urbanist',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '15px',
    color:'#CACACA',

}
function NavbarButtom({link1,link2,link3}) {
    return (
        <div className='NavbarButton_container'>
            <Link style={stylelink}>{link1}</Link>
            <Link style={stylelink}>{link2}</Link>
            <Link style={stylelink}>{link3}</Link>
        </div>
    )
}

export default NavbarButtom
