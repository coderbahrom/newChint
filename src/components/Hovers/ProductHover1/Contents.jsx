import React from 'react'
import { useState } from 'react'
import LeftContent from './LeftContent';
import LeftTextHover from './LeftTextHover';
import LeftContent1 from './LeftContent1';
import "./ProductsHover.css";
function Contents(props) {
    const [show, setShow]=useState(false)
    const [show1, setShow1]=useState(false)
    const [show2, setShow2]=useState(false)
    const [transform, setTransform] =useState(false)

    const stil={
      transform:"rotate(180deg)",
    //   background:'blue',
      fill:'white'
    }
    const stil1={
      transform:"rotate(0deg)"
    }
    function toggle(){
        setShow(prev=>!prev)
        setShow1(prev=>!prev)
        setShow2(prev=>!prev)
        setTransform(prev=>!prev)
      }
    return (
        <>
        <div className={'foot'} onClick={toggle}>
            <div>
               <h1>{props.data.title}</h1>
               <hr className={"hr1"} />
               </div>
                <div  style={transform===true ?stil:stil1 }  className="arrow1">
                <svg  width="11" height="13" viewBox="0 0 11 13"  xmlns="http://www.w3.org/2000/svg">
                    <g>
<path id="bgcolor"  d="M5.55273 1.3353L5.55273 11.6216" stroke="#1E59A4" stroke-width="1.5677" stroke-linecap="round" stroke-linejoin="round"/>
<path id="bgcolor" d="M9.76074 7.41356L5.55272 11.6216L1.34469 7.41356" stroke="#1E59A4" stroke-width="1.5677" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
                </div> 
        </div>
                {show && props.data.id===1 ? <LeftTextHover  /> :null}
                {show1 && props.data.id===2 ? <LeftContent/>:null}
                {show2 && props.data.id===3 ? <LeftContent1/>:null}
                </>
    )
}

export default Contents
