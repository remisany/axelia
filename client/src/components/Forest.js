import React, {useEffect, useRef} from "react";
import 'aframe'
import 'aframe-inspector'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

//import assets
import sky from "../../../client/src/assets/sky.jpg"
import forest from '../../../client/src/assets/models/forest.glb';

//import components
import Photos from "./Photos";

//import constants
import {photosConstant} from "../constants/photosConstant";

const Forest = () => {
    const forestRef = useRef(null);

    useEffect(() => {
        const loader = new GLTFLoader();

        loader.load(forest, (gltf) => {
            forestRef.current && forestRef.current.object3D.add(gltf.scene);
        })
    }, [])

    return (
        <a-scene>
            <a-assets>
                <img id='sky' src={sky} alt='background'/>
            </a-assets>

            {/*<a-entity shadow="cast:true" position="0 0 0" ref={forestRef}></a-entity>*/}

            <Photos photos={photosConstant}/>

            <a-sky material="shader: flat; src: #sky;"></a-sky>

            <a-light type="ambient" color="#FFFFFF" position="147 70 0" intensity="0.3"></a-light>
            <a-light type="point" color="#FFFFFF" position="0 70 -127.5" intensity="0.5"></a-light>
        </a-scene>
    )
}

export default Forest
