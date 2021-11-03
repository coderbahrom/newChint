import React from 'react'
import { useState } from 'react'
import LeftContent from './LeftContent';
import LeftContent1 from './LeftContent1';
import "./ProductsHover.css";
function Contents(props) {

    const [show1, setShow1]=useState(false)
    const [show2, setShow2]=useState(false)
    const [opacity, setOpacity]=useState(1)
    const [transform, setTransform] =useState(false)
  console.log(opacity)
    const stil={
      transform:"rotate(180deg)",
      backgroundColor:'rgba(30, 89, 164, 1)',
    }
    console.log(setOpacity)
    const stil1={
      transform:"rotate(0deg)"
    }
    // const styles={
    //   transition:"all 1s ease-out"
    // }
    const bgcolor={
        fill: "white",
    }
    const bgcolor1={
        // 
        fill:"#1E59A4",
        backgroundColor:'rgba(30, 89, 164, 1)',
    }
    function toggle(){
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
                <div  style={transform===true ? stil:stil1 }  className="arrow1">
                <svg  id="bgcolor" width="12px" height="13px" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  style={transform===true? bgcolor1:bgcolor } id="tine" d="M5.55273 1.3353L5.55273 11.6216" stroke="#1E59A4" stroke-width="10.5677" stroke-linecap="round" stroke-linejoin="round"/>
<path style={transform===true? bgcolor:bgcolor1 }  d="M9.76074 7.41356L5.55272 11.6216L1.34469 7.41356" stroke="#1E59A4" stroke-width="3.5677" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div> 
        </div>
                {show1 && props.data.id===2 ? <LeftContent/>:null}
                {show2 && props.data.id===3 ? <LeftContent1/>:null}
                </>
    )
}

export default Contents
