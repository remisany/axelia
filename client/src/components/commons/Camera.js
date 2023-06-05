import React, {Fragment, useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

//import components
import Button from './Button';

//import constants
import {buttonXYZ} from '../../constants/buttonXYZ';
import {cameraPath} from '../../constants/cameraPath';
import {colors} from '../../constants/colors'
import {sound} from '../../constants/sound';
import {speed} from '../../constants/speed';

//import actions
import {loaderActions} from '../../actions/loaderActions';

const Camera = ({env}) => {
    const navigate = useNavigate()

    const cameraRef = useRef(null)
    const [following, setFollowing] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [cursorColor, setCursorColor] = useState(colors.originalPink)

    const dispatch = useDispatch()

    const buttons = buttonXYZ[env]
    const path = cameraPath[env]
    const curve = new THREE.CatmullRomCurve3(path.curvePoints)
    let cameraProgress = 1

    const tick = () => {
        cameraProgress += speed[env]

        if (cameraProgress < 1) {
            const point = curve.getPointAt(cameraProgress)
            cameraRef.current && cameraRef.current.setAttribute('position', point)
            window.requestAnimationFrame(tick)
        } else {
            setFollowing(false)
        }
    }

    useEffect(() => {
        cameraRef.current.setAttribute('position', path.start)
        loaderActions.progress(dispatch)
    }, [])

    const home = () => {
        navigate(`/`)
    }

    const enter = () => {
        sound.play(dispatch, env)
        cameraProgress = 0
        setFollowing(true)
        window.requestAnimationFrame(tick)
    }

    return (
        <Fragment>
            <a-camera ref={cameraRef} wasd-controls='enabled: false'>
                {!following && <a-cursor color={cursorColor} scale='.02 .02 .02' position='0 0 -.01'></a-cursor>}
            </a-camera>

            {!following && <Fragment>
                <Button type={buttons.museum} id={`1_${env}`} action={home} animate={animate} setAnimate={setAnimate} setCursorColor={setCursorColor}/>
                <Button type={buttons.enter} id={`2_${env}`} action={enter} animate={animate} setAnimate={setAnimate} setCursorColor={setCursorColor}/>
            </Fragment>}
        </Fragment>
    )
}

export default Camera
