import React from "react";
import { useState } from "react";
import LeftContent from "./LeftContent";
import LeftContent1 from "./LeftContent1";
import "./ProductsHover.css";
import arrowBlue from "../../assets/images/arrow-blue.png";
import arrowWhite from "../../assets/images/arrow-white.png";
function Contents(props) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [transform, setTransform] = useState(false);
  console.log(opacity);
  const stil = {
    transform: "rotate(360deg)",
    backgroundColor: "rgba(30, 89, 164, 1)",
    transition: "transform 0.7s",
  };
  console.log(setOpacity);
  const stil1 = {
    transform: "rotate(0deg)",
    transition: "transform 0.7s",
  };

  function toggle() {
    setShow1((prev) => !prev);
    setShow2((prev) => !prev);
    setTransform((prev) => !prev);
  }

  return (
    <>
      <div className={"foot"} onClick={toggle}>
        <div>
          <h1>{props.data.title}</h1>
          <hr className={"hr1"} />
        </div>
        <div style={transform === true ? stil : stil1} className="arrow1">
          {/* <svg  id="bgcolor" width="12px" height="13px" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  style={transform===true? bgcolor1:bgcolor } d="M5.55273 1.3353L5.55273 11.6216" stroke="red" />
<path style={transform===true? bgcolor:bgcolor1 }  d="M9.76074 7.41356L5.55272 11.6216L1.34469 7.41356" stroke="blue" />
</svg> */}
          {transform === true ? (
            <img src={arrowWhite} alt="" />
          ) : (
            <img src={arrowBlue} alt="" />
          )}
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
