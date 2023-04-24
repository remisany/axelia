import React, {Fragment} from 'react';
import {ReactCurvedText} from "react-curved-text";

//import constants
import {icons} from "../../constants/icons";
import {Parallax} from "react-scroll-parallax";

const Icons = () => {
    return (
        <div className='dp-card-content-icon'>
            {icons.map((icon, index) => (
                <Parallax scale={[0, 2]} className='is-container' key={index}>
                    <img src={icon.img} alt={icon.alt}/>
                </Parallax>
            ))}
        </div>
    )
}

export default Icons
