import React from 'react'
import './productbox.css'
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
function ProductBox({images,pro_box_title,imghidden}) {
    return (
        <div className='product_box'>
          <Roll right>
            <div className='product_box_innerimg'>
                <object
                  style={imghidden} 
                  class="product_box_icon1"
                  data={images.img1}
                  type="image/svg+xml"
                > </object>
                <object
                  style={imghidden}
                  class="product_box_icon2"
                  data={images.img2}
                  type="image/svg+xml"
                > </object>
            </div>
            </Roll>
            <Zoom>
            <p>{pro_box_title}</p>
            </Zoom>
        </div>
    )
}

export default ProductBox
