import React, {useEffect, useRef, Fragment} from "react";
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

//import assets
import frame from "../assets/models/frame.glb";

const Photo = ({photo}) => {
    const frameRef = useRef(null)

    const positionLight = photo.position.x + 1.2 + " " + photo.position.y + " " + photo.position.z
    const positionFrame = photo.position.x + " " + photo.position.y + " " + photo.position.z

    useEffect(() => {
        const loader = new GLTFLoader()

        loader.load(frame, (gltf) => {
            const textureLoader = new THREE.TextureLoader()
            const texture = textureLoader.load(photo.src)

            gltf.scene.traverse((child) => {
                if (child.isMesh) {
                    child.material.map = texture;
                    child.material.map.offset.y = -0.06;
                }
            })

            gltf.scene.name = photo.id
            frameRef.current.object3D.add(gltf.scene)
        })
    }, [])

    return (
        frameRef !== null && <Fragment>
            <a-entity position={positionFrame} ref={frameRef} scale="7 7 7"></a-entity>
            <a-light type="directional" color="#FFFFFF" position={positionLight} intensity="1" target={`[name='${photo.id}']`}></a-light>
        </Fragment>
    )
}

export default Photo
