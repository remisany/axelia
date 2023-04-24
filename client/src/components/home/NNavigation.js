import React from 'react';

//import components
import Thumbnails from "./Thumbnails";

//import assets
import CameraOpacity from "./NCameraParallax/CameraOpacity";

const NNavigation = () => {
    return (
        <div className='nnp-page'>
            <CameraOpacity/>
            <Thumbnails/>
        </div>
    )
}

export default NNavigation
