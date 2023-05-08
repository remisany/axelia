import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Player} from "@lottiefiles/react-lottie-player";

//import actions
import {historyActions} from "../../actions/historyActions";

//import selectors
import {historySelector, soundSelector} from "../../reducers/selectors";

//import constants
import {sound} from "../../constants/sound";

//import assets
import ErrorAnim from "../../assets/error/error.json"

const Error = () => {
    const [display, setDisplay] = useState(false)

    const history = useSelector(historySelector)
    const soundScene = useSelector(soundSelector)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        sound.stop(dispatch, soundScene.soundId)

        if (history.error) {
            navigate("/")
        } else {
            historyActions.setError(dispatch)
            setDisplay(true)
        }
    }, [])

    return (
        display && <div className='e-container'>
            <div className='e-player'>
                <Player src={ErrorAnim} loop autoplay/>
            </div>
            <div className='e-text-container'>
                <div className='e-text'>Une erreur est survenue...</div>
                <div className='e-text e-nav' onClick={() => navigate('/')}>Retourner sur la page d'accueil</div>
            </div>
        </div>
    )
}

export default Error
