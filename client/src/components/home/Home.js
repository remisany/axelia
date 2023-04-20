import React from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';

//import components
import Intro from './Intro';
import CameraParallax from './CameraParallax/CameraParallax';

const Home = () => {
    return (
        <ParallaxProvider scrollAxis='vertical' >
            <Intro/>
            <CameraParallax/>
        </ParallaxProvider>
    )
}

export default Home
