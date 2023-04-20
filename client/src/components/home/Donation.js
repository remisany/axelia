import React, {Fragment, useEffect, useState} from 'react';
import {Parallax} from 'react-scroll-parallax';

//import components
import Icons from './Icons';

const Donation = () => {
    const [scale, setScale] = useState([])
    const [size, setSize] = useState([])

    const getScale = () => {
        const width = window.innerWidth
        const height = window.innerHeight

        switch (true) {
            case (width >= 1200):
                setScale([-8.5, 45])
                setSize([180, 80, 125])
                break
            case (width >= 1024):
                setScale([-8.5, 58])
                setSize([180, 80, 125])
                break
            case (width >= 768 && width < height):
                setScale([-8.5, 80])
                setSize([180, 80, 125])
                break
            case (width >= 768 && width > height):
                setScale([-8.5, 60])
                setSize([120, 55, 80])
                break
            default:
                break
        }
    }

    useEffect(() => {
        getScale()
    },[])

    return (
        size.length &&
            <Fragment>
                <div className='np-card'></div>
                <div className='dp-page'>
                    <Parallax scale={scale} className='dp-card'></Parallax>
                    <div className='dp-card-content'>
                        <div className='dp-card-content-text'>Les participants</div>
                        <Icons size={size}/>
                    </div>
                </div>
                <div className='dp-end'>
                    <div className='dp-end-text'>Merci de votre visite.</div>
                    <div className='dp-end-text'>A bientôt.</div>
                </div>
            </Fragment>
    )
}

export default Donation
