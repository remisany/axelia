import React from 'react';
import {Parallax} from 'react-scroll-parallax';

//import assets
import PhotoR from '../../../assets/icons/PhotoR.png'
import PhotoL from '../../../assets/icons/PhotoL.png'

const Camera = ({classNameP, classNameImgL, classNameImgR, transitionL, transitionR}) => {
    return (
        <div className={`c-page ${classNameP}`}>
            <Parallax {...transitionL}>
                <img src={PhotoL} className={`cp-img ${classNameImgL}`} alt='photoIcon'/>
            </Parallax>

            <Parallax {...transitionR}>
                <img src={PhotoR} className={`cp-img ${classNameImgR}`} alt='photoIcon'/>
            </Parallax>
        </div>
    )
}

export default Camera
