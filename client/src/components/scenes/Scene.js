import React, {useEffect} from 'react';
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {useDispatch} from 'react-redux';

//import assets
import sky from '../../assets/sky/sky.jpg'

//import components
import Photos from '../photos/Photos';
import Camera from '../commons/Camera';

//import actions
import {loaderActions} from '../../actions/loaderActions';

const Scene = ({env, envRef, model, rotation}) => {
    const rotationRef = `${rotation[0]} ${rotation[1]} ${rotation[2]}`

    const dispatch = useDispatch()

    useEffect(() => {
        const loader = new GLTFLoader()

        loader.load(model, (gltf) => {
            envRef.current && envRef.current.object3D.add(gltf.scene)
            loaderActions.progress(dispatch)
        })
    }, [])

    return (
        <a-scene raycaster='objects: [data-clickable]'>
            <a-assets>
                <img id='sky' src={sky} alt='background'/>
            </a-assets>

            <a-entity shadow='cast:true' position='0 -35 0' rotation={rotationRef} ref={envRef}></a-entity>

            <a-entity light='type: ambient; color: #C2C19B; intensity: .6'></a-entity>
            <a-entity light='type: directional; color: #FFF; intensity: 1' position='-0.5 1 1'></a-entity>
        </a-scene>
    )
}

export default Scene

/*

        <a-scene raycaster='objects: [data-clickable]'>
            <a-assets>
                <img id='sky' src={sky} alt='background'/>
            </a-assets>

            <a-entity shadow='cast:true' position='0 0 0' rotation={rotationRef} ref={envRef}></a-entity>

            <Photos env={env}/>

            <a-sky material='shader: flat; src: #sky;'></a-sky>

            <Camera env={env}/>

            <a-entity light='type: ambient; color: #BBB'></a-entity>
            <a-entity light='type: directional; color: #FFF; intensity: 0.4' position='-0.5 1 1'></a-entity>
        </a-scene>

 */
