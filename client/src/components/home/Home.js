import React, {useEffect, useState} from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';
import {useDispatch, useSelector} from "react-redux";

//import components
import Intro from './Intro';
import Navigation from "./Navigation";
import Donation from "./Donation";

//import selectors
import {historySelector} from "../../reducers/selectors";

//import actions
import {historyActions} from "../../actions/historyActions";

const Home = () => {
    const [display, setDisplay] = useState(false)

    const history = useSelector(historySelector)

    const dispatch = useDispatch()

    useEffect(() => {
        history.scene ? window.location.reload() : setDisplay(true)
        history.error && historyActions.razError(dispatch)
    }, [])

    return (
        display && <div className="h-container">
            <ParallaxProvider scrollAxis='vertical'>
                <Intro/>
                <Navigation/>
                <Donation/>
            </ParallaxProvider>
        </div>
    )
}

export default Home
