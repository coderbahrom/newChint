import React from 'react'
import './Head.css'
function Head(props) {
    return (
        <div className={'wrapper1'}>
            <p>{props.title1}</p>
            <h1>{props.title2}</h1>
            <hr className={'hr'} />
        </div>
    )
}

export default Head
