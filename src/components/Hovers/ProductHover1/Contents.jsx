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
      background:'blue'
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
                <div style={transform===true ?stil:stil1}  className="arrow1">
                  <img 
                   src="./assets/images/arrow1.png" alt="" />
                </div> 
        </div>
                {show && props.data.id===1 ? <LeftTextHover  /> :null}
                {show1 && props.data.id===2 ? <LeftContent/>:null}
                {show2 && props.data.id===3 ? <LeftContent1/>:null}
                </>
    )
}

export default Contents
