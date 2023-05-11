import React, {Fragment, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

//import constants
import {thumbnails} from '../../constants/thumbnails';
import {sound} from '../../constants/sound';

//import selectors
import {soundSelector} from '../../reducers/selectors';

const Thumbnails = () => {
    let first = true

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const soundScene = useSelector(soundSelector)

    const handleResize = () => {
        if (first) {
            first = false
        } else {
            window.scrollTo(0, 0)
            window.location.reload()
        }
    }

    const visit = url => {
        resizeObserver.unobserve(document.body)
        navigate(url)
    }

    const resizeObserver = new ResizeObserver(handleResize)

    useEffect(() => {
        sound.stop(dispatch, soundScene.soundId)
        resizeObserver.observe(document.body)
    }, [])

    return (
        <div className='tp-container'>
            {thumbnails.map((thumbnail, indexT) => (
                <Fragment key={indexT}>
                    <div className='tp-content'>
                        <div className='tp-clickable' onClick={() => visit(thumbnail.url)}></div>
                        <img src={thumbnail.src} alt={thumbnail.alt}/>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

export default Thumbnails
