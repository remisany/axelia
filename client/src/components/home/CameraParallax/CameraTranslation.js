import React from 'react';

//import components
import Camera from "./Camera";

const CameraTranslation = () => {
    return (
        <Camera
            classNameP='cto-page'
            transitionL={{translateX: [100, -100]}}
            transitionR={{translateX: [-100, 100]}}
        />
    )
}

export default CameraTranslation
