import React from 'react'
import './showImage.css'

<<<<<<< HEAD
function ShowImage({show_titl1,show_titl2,show_titl3,show_titl4,show_titl5, hidden}) {
=======
function showImage({show_titl1,show_titl2,show_titl3,show_titl4,show_titl5,imageNone}) {
>>>>>>> d71d5e2ed5d6c44399eb545daadcf2fc329cda71
    return (
        <div className='showimage'>
            <div className={'common_container'}>
                <p>{show_titl1}</p>
                <p>{show_titl2}</p>
                <p>{show_titl3}</p>
<<<<<<< HEAD
                <div style={hidden}className='showimage_inner'> 
=======
                <div style={imageNone} className='showimage_inner'> 
>>>>>>> d71d5e2ed5d6c44399eb545daadcf2fc329cda71
                    <img src={show_titl4} alt='rasm3' />
                    <h6>{show_titl5}</h6>
                </div>
            </div>
        </div>
    )
}

export default ShowImage
