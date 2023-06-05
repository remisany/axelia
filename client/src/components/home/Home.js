import React, {Fragment, useEffect, useState} from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';
import {useDispatch, useSelector} from "react-redux";
import {CSSTransition} from "react-transition-group";

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
    const [loading, setLoading] = useState(true)

    const history = useSelector(historySelector)

    const dispatch = useDispatch()

    useEffect(() => {
        history.scene ? window.location.reload() : setDisplay(true)
        history.error && historyActions.razError(dispatch)
        setTimeout(() => setLoading(false), 250)
    }, [])

    useEffect(() => {
        document.body.style.overflow = loading  ? 'hidden' : 'auto'
    }, [loading])

    return (
        display && <Fragment>
            <CSSTransition classNames='h-transition' in={loading} timeout={1000} unmountOnExit>
                <div className='h-blank'></div>
            </CSSTransition>
            <div className={`h-container h-container${loading ? '-loading' : '-real'}`}>
                <ParallaxProvider scrollAxis='vertical'>
                    <Intro/>
                    <Navigation/>
                    <Donation/>
                </ParallaxProvider>
            </div>
        </Fragment>
    )
}

export default Home
