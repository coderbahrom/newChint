import React from 'react'
import './productbox.css'
function ProductBox({pro_box_img,pro_box_title,imghidden}) {
    return (
        <div className='product_box'>
            <div className='product_box_innerimg'>
                <img  style={imghidden} src={pro_box_img} alt='rasm'/>
            </div>
            <p>{pro_box_title}</p>
        </div>
    )
}

export default ProductBox
