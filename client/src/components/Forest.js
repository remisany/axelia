import React, {useEffect, useRef} from "react";
import 'aframe'
import 'aframe-inspector'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

//import assets
import sky from '../assets/sky.jpg'

//import assets
import forest from "../assets/models/forest.glb";

//import components
import Photos from "./Photos";

//import constants
import {photos} from "../constants/photos";

const Forest = () => {
    const forestRef = useRef(null);

    useEffect(() => {
        const loader = new GLTFLoader();

        loader.load(forest, (d) => {
            forestRef.current.object3D.add(d.scene);
        })
    }, [])

    return (
        <a-scene inspector>
            <a-assets>
                <img id='sky' src={sky} alt='background'/>
            </a-assets>

            {/*<a-entity shadow="cast:true" position="0 0 0" ref={forestRef}></a-entity>*/}

            <Photos photos={photos}/>

            <a-sky material="shader: flat; src: #sky;"></a-sky>

            <a-light type="ambient" color="#FFFFFF" position="147 70 0" intensity="0.3"></a-light>
            <a-light type="point" color="#FFFFFF" position="0 70 -127.5" intensity="0.5"></a-light>
        </a-scene>
    )
}

export default Forest

    /*
<Canvas>
<XR>
<Physics gravity={[0, -9.8, 0]}>
<Visitor/>
<primitive object={scene}/>
<Floor/>
<Environment background files={sky}/>
</Physics>
<PointerLockControls/>
</XR>
</Canvas>*/


/*
import forest from "../assets/environments/forest.glb";
import {Canvas, useLoader} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import sky from '../assets/sky.hdr'

const Test = () => {
    const gltf = useLoader(GLTFLoader, forest);

    return (
        <a-scene>
            <Canvas>
                <primitive object={gltf.scene} scale={0.4} />
                <Environment background files={sky}/>
            </Canvas>
        </a-scene>
    )
}

export default Test

*/


/*<Canvas>
<Physics gravity={[0, -9.8, 0]}>
<primitive object={scene}/>
<Floor/>
<Environment background files={sky}/>
</Physics>
</Canvas>*/

/*<Wall start={[-95.49, -24, 166]} end={[121.72, -25, 165]}/>
<Box text={false} position={[5, -20.09, 100]} args={[50, 10, 70]} color="red" />
<Floor/>
*/

    /*
<Box text={false} position={[5, -20.09, 100]} args={[50, 10, 70]} color="red" />
    <Box text={false} position={[5, 1, 0]} args={[1.5, 2, 1.3]} color="orange" />
    <Box text={false} position={[0, 0.5, 5]} args={[3, 1, 1.3]} color="green" />
    */


/*
const Test = () => {
    const gltf = useLoader(GLTFLoader, forest);

    return (
        <Canvas>
            <primitive object={gltf.scene} scale={0.4} />
            <Environment background files={sky}/>
        </Canvas>
    )
}

export default Test

*/

/*
const Test = () => {
    const forestRef = useRef(null);

    useEffect(() => {
        const loader = new GLTFLoader();

        loader.load(forest, (d) => {
            forestRef.current.object3D.add(d.scene);
        })
    }, [])

    return (
        <a-scene>
            <a-entity position="0 0 0" ref={forestRef}></a-entity>
            <a-sky color="#ECECEC"></a-sky>
        </a-scene>
    )
}

export default Test
 */
