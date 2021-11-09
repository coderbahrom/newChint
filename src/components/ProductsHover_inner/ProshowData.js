import React from 'react'
import {Link} from 'react-router-dom'

function ProshowData({picture,picture_title}) {
    return (
        <Link to='/productHover1/products/product-info' className='right_inner_one'>
             <img src={picture} alt="rasmbor"/>
             <p>{picture_title}</p>
        </Link>
    )
}

export default ProshowData
