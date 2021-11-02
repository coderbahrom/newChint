import React from 'react'
import './product_container.css'
import rasm2 from '../assets/images/rasm2.png'
import strelka1 from '../assets/icons/strelka1.svg'
import strelka1_2 from '../assets/icons/strelka1_2.svg'
import { Link } from 'react-router-dom'
function Product_container() {
    return (
        <>
        <Link to='/avtomaticheskiy' className={'pro_hover_inner2_box'}>
                <img src={rasm2} alt='rasm'/>
                <div className='pro_hover_inner2_box_title'>
                    <p>284003</p>
                    <p>Автоматический выключатель NB1-63 1Р 6А 6кА х-ка C (CHINT)</p>
                </div>
                <object
                className='pro_hover_inner2_box_svg1'
                data={strelka1}
                type="image/svg+xml"
                >
                </object>
                <object
                className='pro_hover_inner2_box_svg1_2'
                data={strelka1_2}
                type="image/svg+xml"
                >
                </object>
        </Link>
        </>
    )
}

export default Product_container
