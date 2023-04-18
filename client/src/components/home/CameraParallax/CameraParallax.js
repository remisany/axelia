import React, {useEffect, useState} from 'react';

//import assets
import Navigation from '../Navigation';
import Camera from "./Camera";
import CameraTranslation from "./CameraTranslation";

const CameraParallax = () => {
    const [activeTransition, setActiveTransition] = useState(false)

    const onScroll = () => {
        const reference = window.innerHeight
        const position = window.scrollY

        setActiveTransition(position > reference)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className='cp-page'>
            {activeTransition ?
                <CameraTranslation/>
                :
                <Camera transitionL={{opacity: [-1, 4]}} transitionR={{opacity: [-1, 4]}}/>
            }
            <Navigation/>
        </div>
    )
}

export default CameraParallax