import React from 'react'
import '../ProductsHover2.css'
import { HideUntilLoaded } from 'react-animation'
import LoadingImg from '../../../HomePage/loadingImg'
function ProductCatolog1(props) {
    return (
        <div className={'catalog'}>
            <div className="catalog-img">
            <HideUntilLoaded imageToLoad="https://picsum.photos/2200/1200/"
  Spinner={() =><LoadingImg/> }>
        <object data={props.data.img} type="image/svg+xml">img</object>
        </HideUntilLoaded>
            </div>
            <div className="tit">
                <h1>{props.data.title}</h1>
            </div>
        </div>
    )
}

export default ProductCatolog1
