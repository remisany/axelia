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
    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const loaderRef = useRef(null)

    const loader = useSelector(loaderSelector)

    const dispatch = useDispatch()

    const playSound = () => {
        if (!disable) {
            sound.play(dispatch, env)
            setDisable(true)
        }
    }

    useEffect(() => {
        const progressCalc = Math.round(loader.progress/length * 100)
        setProgressBar(progressCalc !== 100 ? progressCalc : 100)
    }, [loader])

    useEffect(() => {
        loaderRef.current && loaderRef.current.click()
    }, [])

    useEffect(() => {
        progressBar === 100 && setTimeout(() => setDisplay(false), 3000)
    }, [progressBar])

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - lastUpdate;

            if (elapsedTime > 3000) {
                setProgressBar(prevProgress => prevProgress !== 100 ? prevProgress + 1 : 100)
                setLastUpdate(currentTime)
            }
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [lastUpdate])

    return (
        <CSSTransition classNames='lc-transition' in={display} timeout={1000} unmountOnExit>
            <div className='lc-container' ref={loaderRef} onClick={() => playSound()}>
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
