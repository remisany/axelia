import React, {Fragment, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

//import constants
import {thumbnails} from '../../constants/thumbnails';
import {sound} from '../../constants/sound';

//import selectors
import {soundSelector} from '../../reducers/selectors';

const Thumbnails = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const soundScene = useSelector(soundSelector)

    useEffect(() => {
        sound.stop(dispatch, soundScene.soundId)
    }, [])

    return (
        <div className='tp-container'>
            {thumbnails.map((thumbnail, indexT) => (
                <Fragment key={indexT}>
                    <div className='tp-content'>
                        <div className='tp-clickable' onClick={() => navigate(thumbnail.url)}></div>
                        <img src={thumbnail.src} alt={thumbnail.alt}/>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

export default Thumbnails
