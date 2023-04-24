import React from 'react';
import {Parallax} from "react-scroll-parallax";

//import components
import Icons from "./Icons";

//import assets
import Wave from '../../assets/icons/wave.png'

const NDonation = () => {
    return (
        <div className="ndp-page">
            <Parallax className='ndp-wave' translateX={[-25, 25]}>
                <img src={Wave} alt='wave icon'/>
            </Parallax>

            <Parallax className="ndp-container" opacity={[.5, 2]}>
                <Icons/>
            </Parallax>
        </div>
    )
}

export default NDonation
