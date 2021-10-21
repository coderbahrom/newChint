import React from 'react'
import './ChintServices.css'
function ChintServices(props) {
    return (
        <div className={'services'}>
            <div className="img">

           <img src={props.data.img} width="100%" height="100%" alt="" />
            </div>
            <p>{props.data.title}</p>
        </div>
    )
}

export default ChintServices
