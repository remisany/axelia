import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Player} from '@lottiefiles/react-lottie-player';
import LinearProgress from '@mui/material/LinearProgress';
import {Typography} from '@mui/material';
import {CSSTransition} from 'react-transition-group';

//import selectors
import {loaderSelector} from '../../reducers/selectors';

//import assets
import Loader from '../../assets/loader/loader.json';

//import constants
import {sound} from '../../constants/sound';

const LoaderContainer = ({length, env}) => {
    const [progressBar, setProgressBar] = useState(0)
    const [display, setDisplay] = useState(true)
    const [disable, setDisable] = useState(false)

    const loaderRef = useRef(null)

    const loader = useSelector(loaderSelector)

    const dispatch = useDispatch()

    const getProgress = progress => {
        const progressCalc = Math.round(progress/length * 100)
        setProgressBar(progressCalc)

        progressCalc === 100 && setTimeout(() => setDisplay(false), 1000)
    }

    const play = () => {
        !disable && sound.play(dispatch, env)
        setDisable(true)
    }

    useEffect(() => {
        getProgress(loader.progress)
    }, [loader])

    useEffect(() => {
        loaderRef.current && loaderRef.current.click()
    }, [])

    return (
        <CSSTransition classNames='lc-transition' in={display} timeout={1000} unmountOnExit>
            <div className='lc-container' ref={loaderRef} onClick={() => play()}>
                <div className='lc-player'>
                    <Player src={Loader} loop autoplay/>
                </div>
                <div className='lc-progressBar'>
                    <LinearProgress variant='determinate' value={progressBar}/>
                    <Typography>{progressBar + '%'}</Typography>
                </div>
            </div>
        </CSSTransition>
    )
}

export default LoaderContainer
