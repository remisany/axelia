import React, {useEffect, useRef, Fragment} from "react";
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

//import assets
import frame from "../assets/models/frame.glb";

const Photo = ({photo}) => {
    const frameRef = useRef(null)

    const positionLight = (photo.position[0] + 1.2) + " " + photo.position[1] + " " + photo.position[2]
    const positionFrame = photo.position[0] + " " + photo.position[1] + " " + photo.position[2]
    const rotationFrame = photo.rotation[0] + " " + photo.rotation[1] + " " + photo.rotation[2]
    const rotationPhoto = photo.rotation[0] + " " + (photo.rotation[1] + 90) + " " + photo.rotation[2]

    useEffect(() => {
        const loader = new GLTFLoader()

        loader.load(frame, (gltf) => {
            gltf.scene.name = photo.id
            frameRef.current.object3D.add(gltf.scene)
        })
    }, [])

    return (
        frameRef !== null && <Fragment>
            <a-assets>
                <img id={"photoImg_" + photo.id} src={photo.src} alt="photo"/>
            </a-assets>

            <a-entity position={positionFrame} rotation={rotationFrame} ref={frameRef} scale="7 7 7"></a-entity>
            <a-image position={positionFrame} rotation={rotationPhoto} scale="16 16 16" src={"#photoImg_" + photo.id}></a-image>
        </Fragment>
    )
}

export default Photo

/*<a-light type="directional" color="#FFFFFF" position={positionLight} intensity="1" target={`[name='${photo.id}']`}></a-light>*/
