import React from 'react'
import Lottie from 'react-lottie'
// import * as loading from './loading.json'
// import * as loading1  from './loadingJson/load1.json'
// import * as loading2  from './loadingJson/load2.json'
// import * as loading3  from './loadingJson/load3.json'
// import * as loading4  from './loadingJson/load4.json'
import * as loading5  from './loadingJson/load5.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData:loading5.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function LoadingImg() {
    return (
        <div>
            <Lottie options={defaultOptions} height={120} width={120}/>
        </div>
    )
}

export default LoadingImg
