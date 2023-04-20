import React from 'react';
import {Parallax} from 'react-scroll-parallax';

//import assets
import PhotoR from '../../../assets/icons/PhotoR.png'
import PhotoL from '../../../assets/icons/PhotoL.png'

const Camera = ({classNameP, transitionL, transitionR}) => {
    return (
        <div className={`c-page ${classNameP}`}>
            <Parallax {...transitionL}>
                <img src={PhotoL} className='cp-img' alt='photoIcon left side'/>
            </Parallax>

            <Parallax {...transitionR}>
                <img src={PhotoR} className='cp-img' alt='photoIcon right side'/>
            </Parallax>
        </div>
    )
}

export default Camera
