import React, {Fragment, useEffect, useRef, useState} from 'react';
import {buttonAnimations} from "../../constants/buttonAnimations";

const Button = ({type, id, action, animate, setAnimate}) => {
    const buttonRef = useRef(null)

    const [active, setActive] = useState(false)

    const {position, rotation, image} = type

    useEffect(() => {
        buttonRef.current.addEventListener('click', onClick)

        return () => buttonRef.current && buttonRef.current.removeEventListener('click', onClick);
    }, [])

    useEffect(() => {
        if (animate) {
            buttonAnimations.disappearance(buttonRef, position, active)
            setAnimate(false)
            setTimeout(() => action && action(), 1000)
        }
    }, [animate])

    useEffect(() => {
        buttonAnimations.appearance(buttonRef, position)
    }, [])

    const onClick = () => {
        setActive(true)
        setAnimate(true)
    }

    return (
        <Fragment>
            <a-assets>
                <img id={"btnImg_" + id} src={image} alt="icon button"/>
            </a-assets>

            <a-box
                ref={buttonRef}
                position={`${position[0]} ${position[1]} ${position[2]}`}
                rotation={`${rotation[0]} ${rotation[1]} ${rotation[2]}`}
                depth="0.1"
                height="1"
                width="1"
                color="#FFD0CA"
                id={id}
            >
                <a-image src={"#btnImg_" + id} height="0.6" width="0.6" position="0 0 0.1"></a-image>
            </a-box>
        </Fragment>
    )
}

export default Button
