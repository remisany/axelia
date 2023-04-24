import React from 'react';
import {Parallax} from "react-scroll-parallax";

//import assets
import Stencil from "../../../assets/icons/stencil.png";

const CameraOpacity = () => {
    return (
        <Parallax className='nnp-stencil' opacity={[-4, 4]}>
            <img src={Stencil} alt='camera icon'/>
        </Parallax>
    )
}

export default CameraOpacity
