import React from 'react'
import '../ProductsHover2.css'
function ProductCatolog1(props) {
    return (
        <div className={'catalog'}>
            <div className="catalog-img">

        <object data={props.data.img} type="image/svg+xml">img</object>

            </div>
            <div className="tit">
                <h1>{props.data.title}</h1>
            </div>
        </div>
    )
}

export default ProductCatolog1
