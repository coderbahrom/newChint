import React from 'react'
import Lottie from 'react-lottie'
// import * as loading from './loading.json'
// import * as loading1  from './loadingJson/load1.json'
// import * as loading2  from './loadingJson/load2.json'
// import * as loading3  from './loadingJson/load3.json'
// import * as loading4  from './loadingJson/load4.json'
// import * as loading5  from './loadingJson/load5.json'
import * as loading6  from './loadingJson/load6.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData:loading6.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function Loading() {
    return (
        <div>
            <Lottie options={defaultOptions} height={300} width={300}/>
        </div>
    )
}

export default Loading
