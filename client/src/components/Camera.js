import React, {Fragment, useEffect, useRef, useState} from 'react';
import * as THREE from 'three';

//import components
import Button from "./Button";

//import constants
import {buttonXYZ} from "../constants/buttonXYZ";
import {cameraPath} from "../constants/cameraPath";

const Camera = ({env}) => {
    const cameraRef = useRef(null)
    const [following, setFollowing] = useState(false)

    const buttons = buttonXYZ[env]
    const path = cameraPath[env]
    const curve = new THREE.CatmullRomCurve3(path.curvePoints)
    let cameraProgress = 1

    const getPosition = () => {
        console.log(cameraRef.current.getAttribute('position'))
        window.requestAnimationFrame(getPosition)
    }

    const tick = () => {
        cameraProgress += 0.0001

        if (cameraProgress < 1) {
            const point = curve.getPointAt(cameraProgress)
            cameraRef.current.setAttribute('position', point)
            window.requestAnimationFrame(tick)
        } else {
            setFollowing(false)
        }
    }

    useEffect(() => {
        cameraRef.current.setAttribute('position', path.start)
        window.requestAnimationFrame(getPosition)
    }, [])

    const enter = () => {
        cameraProgress = 0
        setFollowing(true)
        window.requestAnimationFrame(tick)
    }

    return (
        <Fragment>
            <a-camera ref={cameraRef}>
                <a-cursor></a-cursor>
            </a-camera>

            {!following && <Button type={buttons.enter} id={"2_" + env} action={enter}/>}
        </Fragment>
    )
}

export default Camera
