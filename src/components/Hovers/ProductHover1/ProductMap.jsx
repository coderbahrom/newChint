import React from "react";
import "./ProductMap.css"
function ProductMap(props) {
  return (
    <div className={"mapping"}>
      <div className="switching">
        <img src="./assets/images/image2.png" alt="" />
      </div>
      <div className={"text-area"}> 
        <h1>{props.data.title}</h1>
        <p>{props.data.desc}</p>
      </div>
    </div>
  );
}

export default ProductMap;
