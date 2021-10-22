import React from 'react'
import './showImage.css'


function ShowImage({show_titl1,show_titl2,show_titl3,show_titl4,show_titl5, hidden}) {



    return (
        <div className='showimage'>
            <div className={'common_container'}>
                <p>{show_titl1}</p>
                <p>{show_titl2}</p>
                <p>{show_titl3}</p>

                <div style={hidden}className='showimage_inner'> 

              

                    <img src={show_titl4} alt='rasm3' />
                    <h6>{show_titl5}</h6>
                
            </div>
        </div>

        </div>
    )
}

export default ShowImage
