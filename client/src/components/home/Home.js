import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

//import constants
import {sound} from '../../constants/sound';

//import reducer
import {soundSelector} from '../../reducers/selectors';

const Home = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    
    const soundScene = useSelector(soundSelector)
    
    const visit = (env) => {
        navigate(`/${env}`)
        sound.play(dispatch, env)
    }

    useEffect(() => {
        sound.stop(dispatch, soundScene.soundId)
    }, [])

    return (
        <div>
            <div onClick={() => visit('forest')}>Forêt</div>
        </div>
    )
}

export default Home
