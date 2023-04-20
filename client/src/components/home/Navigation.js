import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Parallax} from 'react-scroll-parallax';

//import constants
import {thumbnails} from '../../constants/thumbnails';
import {sound} from '../../constants/sound';

//import selectors
import {soundSelector} from '../../reducers/selectors';

//import components
import Donation from './Donation';

const Navigation = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const soundScene = useSelector(soundSelector)

    const visit = (env, url) => {
        navigate(`/${url}`)
        sound.play(dispatch, env)
    }

    useEffect(() => {
        sound.stop(dispatch, soundScene.soundId)
    }, [])

    return (
        <div className='np-page'>
            {thumbnails.map((thumbnail, index) => (
                <div className='np-card' key={index} onClick={() => visit(thumbnail.env, thumbnail.url)}>
                    <Parallax rotateZ={['0deg', '360deg']} className='np-card-parallax'></Parallax>
                    <img className='np-card-img' src={thumbnail.img} alt='thumbnails'/>
                    <div className='np-card-text'>{thumbnail.title}</div>
                </div>
            ))}

            <Donation/>
        </div>
    )
}

export default Navigation
