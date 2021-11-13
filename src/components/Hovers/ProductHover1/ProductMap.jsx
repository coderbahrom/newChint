import React from "react";
import "./ProductMap.css"
import { Link } from "react-router-dom";
import { HideUntilLoaded } from 'react-animation'
function ProductMap(props) {
const reed={
  Background:'red'
}
  return (
    <div className={"mapping"}>
      <div style={reed} className="switching">
      <HideUntilLoaded imageToLoad="https://picsum.photos/2200/1200/"
  Spinner={() => <div style={{color:'blue'}}>Loading...</div>}>
        <img src="./assets/images/image2.png" alt="" />
        </HideUntilLoaded>
      </div>
      <div className={"text-area"}> 
    <Link  to='/productHover1/products'><h1>{props.data.title}</h1> </Link>
        <p>{props.data.desc}</p>
      </div>
    </div>
  );
}

export default ProductMap;
