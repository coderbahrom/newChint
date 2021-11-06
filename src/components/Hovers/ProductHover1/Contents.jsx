import React from "react";
import { useState } from "react";
import LeftContent from "./LeftContent";
import LeftContent1 from "./LeftContent1";
import "./ProductsHover.css";
function Contents(props) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [transform, setTransform] = useState(false);
  console.log(opacity);
  const stil = {
    transform: "rotate(180deg)",
    fill: "#ffffff",
    transition: "transform 0.7s",
  
    display:"flex",
    justifyContent:"center",
    alignItems:'center'
    
    
  };
  console.log(setOpacity);
  const stil1 = {
    transform: "rotate(0deg)",
    transition: "transform backgroundColor 0.7s",
    
  };
  const bgcolor={
    backgroundColor:"rgb(34, 137, 255)",
   color:"#ffffff",
   marginBottom:"1vw",
   marginTop:"10px"
    
  }
  const bgcolor1={
   
    // color:"black"

  }
  const arrowTop={
    fill:"#ffffff",
  }

  function toggle() {
    setShow1((prev) => !prev);
    setShow2((prev) => !prev);
    setTransform((prev) => !prev);
  }

  return (
    <>
      <div  style={transform === true ? bgcolor : bgcolor1} className={"foot"} onClick={toggle}>
        <div className={'title'}>
          <h1 style={transform === true ? bgcolor : bgcolor1}>{props.data.title}</h1>
         
        </div>
        <div style={transform === true ? stil : stil1} className="arrow1">
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style={ transform === true ? arrowTop:stil1 } d="M9.76758 1.49412L5.55955 5.70215L1.35153 1.49412" stroke="#1E59A4" stroke-width="1.5677" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
      </div>
      <LeftContent show1={show1} id={props.data.id} />
      <LeftContent1 show2={show2} id={props.data.id} />
      {/* {show1 && props.data.id===2 ? <LeftContent/>:null}
                {show2 && props.data.id===3 ? <LeftContent1/>:null} */}
    </>
  );
}

export default Contents;
