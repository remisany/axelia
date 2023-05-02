import React from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';

//import components
import Intro from './Intro';
import Navigation from "./Navigation";
import Donation from "./Donation";

const Home = () => {
    return (
        <ParallaxProvider scrollAxis='vertical' >
            <Intro/>
            <Navigation/>
            <Donation/>
        </ParallaxProvider>
    )
}

export default Home
