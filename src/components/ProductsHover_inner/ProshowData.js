import React from 'react'
import {Link} from 'react-router-dom'
import { HideUntilLoaded } from 'react-animation'
import LoadingImg from '.././HomePage/loadingImg'
function ProshowData({picture,picture_title}) {
    return (
        <Link to='/productHover1/products/product-info' className='right_inner_one'>
              <HideUntilLoaded imageToLoad="https://picsum.photos/2200/1200/"
  Spinner={() =><LoadingImg/> }>
             <img src={picture} alt="rasmbor"/>
             </HideUntilLoaded>
             <p>{picture_title}</p>
        </Link>
    )
}

export default ProshowData
