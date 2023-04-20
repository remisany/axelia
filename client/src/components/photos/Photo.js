import React, {useEffect, useRef, Fragment} from 'react';
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {useDispatch} from 'react-redux';

//import assets
import frame from '../../assets/models/frame.glb';

//import actions
import {loaderActions} from '../../actions/loaderActions';

const Photo = ({photo}) => {
    const frameRef = useRef(null)

    const dispatch = useDispatch()

    const positionFrame = `${photo.position[0]} ${photo.position[1]} ${photo.position[2]}`
    const rotationFrame = `${photo.rotation[0]} ${photo.rotation[1]} ${photo.rotation[2]}`
    const rotationPhoto = `${photo.rotation[0]} ${(photo.rotation[1] + 90)} ${photo.rotation[2]}`

    useEffect(() => {
        const loader = new GLTFLoader()

        loader.load(frame, (gltf) => {
            gltf.scene.name = photo.id
            frameRef.current.object3D.add(gltf.scene)
            loaderActions.progress(dispatch)
        })
    }, [])

    return (
        frameRef !== null && <Fragment>
            <a-assets>
                <img id={`photoImg_${photo.id}`} src={photo.src} alt='photo'/>
            </a-assets>

            <a-entity position={positionFrame} rotation={rotationFrame} ref={frameRef} scale='7 7 7'></a-entity>
            <a-image position={positionFrame} rotation={rotationPhoto} scale='16 16 16' src={`#photoImg_${photo.id}`}></a-image>
        </Fragment>
    )
}

export default Photo
