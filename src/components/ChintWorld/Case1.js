import React from 'react'
import './Case1.css'
import rightcase1 from '../assets/images/rightcase1.png'




function Case1({case1_title1,case1_title2,case1_title3,styleImage}) {
    return (
        <div style={styleImage} className="case1">
                <p>{case1_title1}</p>
                <p>{case1_title2}</p>
                <p>{case1_title3}</p>
        </div>
    )
}

export default Case1
