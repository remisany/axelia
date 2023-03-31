import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Player} from '@lottiefiles/react-lottie-player';
import LinearProgress from '@mui/material/LinearProgress';
import {Typography} from '@mui/material';
import {CSSTransition} from 'react-transition-group';

//import selectors
import {loaderSelector} from '../../reducers/selectors';

//import assets
import Loader from '../../assets/loader/loader.json';

const LoaderContainer = ({length}) => {
    const [progressBar, setProgressBar] = useState(0)
    const [display, setDisplay] = useState(true)

    const loader = useSelector(loaderSelector)

    const getProgress = progress => {
        const progressCalc = Math.round(progress/length * 100)
        setProgressBar(progressCalc)

        progressCalc === 100 && setTimeout(() => setDisplay(false), 1000)
    }

    useEffect(() => {
        getProgress(loader.progress)
    }, [loader])

    return (
        <CSSTransition classNames='lc-transition' in={display} timeout={1000} unmountOnExit>
            <div className='lc-container'>
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
