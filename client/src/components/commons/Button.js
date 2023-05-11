import React, {Fragment, useEffect, useRef, useState} from 'react';

//import constants
import {buttonAnimations} from '../../constants/buttonAnimations';
import {colors} from '../../constants/colors';

const Button = ({type, id, action, animate, setAnimate, setCursorColor}) => {
    const buttonRef = useRef(null)

    const [active, setActive] = useState(false)
    const [positionButton, setPositionButton] = useState(null)

    const {position, rotation, image, scale} = type

    useEffect(() => {
        buttonRef.current.addEventListener('click', onClick)
        buttonRef.current.addEventListener('raycaster-intersected', setWhiteColor)
        buttonRef.current.addEventListener('raycaster-intersected-cleared', setPinkColor)

        return () => {
            if (buttonRef.current) {
                buttonRef.current.removeEventListener('click', onClick)
                buttonRef.current.removeEventListener('raycaster-intersected', setWhiteColor)
                buttonRef.current.removeEventListener('raycaster-intersected-cleared', setPinkColor)
            }
        }
    }, [])

    useEffect(() => {
        if (animate) {
            buttonAnimations.disappearance(buttonRef, position, active, scale)
            if (active) {
                setAnimate(false)
                setTimeout(() => action && action(), 1000)
            }
        }
    }, [animate])

    useEffect(() => {
        buttonAnimations.appearance(buttonRef, position, scale)
        setPositionButton(`${position[0]} ${position[1]} ${position[2]}`)
    }, [])

    const onClick = () => {
        setActive(true)
        setAnimate(true)
    }

    const setWhiteColor = () => setCursorColor(colors.white)
    const setPinkColor = () => setCursorColor(colors.originalPink)

    return (
        <Fragment>
            <a-assets>
                <img id={`btnImg_${id}`} src={image} alt='icon button'/>
            </a-assets>

            <a-box
                ref={buttonRef}
                position={positionButton}
                rotation={`${rotation[0]} ${rotation[1]} ${rotation[2]}`}
                depth={scale / 10}
                height={scale}
                width={scale}
                color={colors.originalPink}
                id={id}
            >
                <a-image src={`#btnImg_${id}`} height={scale * 0.6} width={scale * 0.6} position={`0 0 ${scale * 0.1}`}></a-image>
            </a-box>
        </Fragment>
    )
}

export default Button
