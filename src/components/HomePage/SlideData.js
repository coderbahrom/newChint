import React from 'react'
import './slideData.css'
import rightArrow from '../assets/images/rightArrow.png'
function SlideData({left_title, right_imge, right_image_width_height,slideImageNone}) {
    return (
        <div className='slidedata'>
            <div className='slidedata_left'>
                <p>
                    {left_title}
                </p>
                <div className='slidedata_left_btn'>
                    <p>
                            Cкачать каталог
                    </p>
                    <img src ={rightArrow} alt='rasm'/>
                </div>
            </div>
            
            <div style={slideImageNone} className='slidedata_right'>
                <img style={right_image_width_height} src={right_imge} alt='rasm' />
            </div>
        </div>
    )
}

export default SlideData
