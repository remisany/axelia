import React, {Fragment, useEffect} from 'react';
import * as AFRAME from 'aframe'

const Button = ({type, id, action}) => {
    const {position, rotation, image} = type

    const rotationBox = rotation && rotation[0] + " " + rotation[1] + " " + rotation[2]
    const positionBox = position[0] + " " + position[1] + " " + position[2]
    const positionLight = position[0] + " " + position[1] + " " + (position[2] + 1.2)

    useEffect(() => {
        AFRAME.registerComponent("btn_" + id, {
            init: function () {
                this.el.addEventListener('click', () => {
                    action && action()
                })
            }
        })

        return () => {
            delete AFRAME.components["btn_" + id]
        }
    }, [])

    return (
        <Fragment>
            <a-assets>
                <img id={"btnImg_" + id} src={image} alt="icon button"/>
            </a-assets>

            <a-box
                position={positionBox}
                rotation={rotationBox}
                depth="0.1"
                height="1"
                width="1"
                color="#FFD0CA"
                id={id}
                {...{["btn_" + id]: true}}
            >
                <a-image src={"#btnImg_" + id} height="0.6" width="0.6" position="0 0 0.1"></a-image>
            </a-box>

            <a-light
                type="point"
                color="#FFFFFF"
                position={positionLight}
                rotation={rotationBox}
                intensity=".4"
                target={`#${id}`}
            ></a-light>
        </Fragment>
    )
}

export default Button
