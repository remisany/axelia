import React from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';

//import components
import Intro from './Intro';
import NNavigation from "./NNavigation";
import NDonation from "./NDonation";

const Home = () => {
    return (
        <ParallaxProvider scrollAxis='vertical' >
            <Intro/>
            <NNavigation/>
            <NDonation/>
        </ParallaxProvider>
    )
}

export default Home
