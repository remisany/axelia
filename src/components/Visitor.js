import React, {useEffect, useRef} from 'react';
import {useSphere} from '@react-three/cannon';
import {useFrame, useThree} from '@react-three/fiber';
import * as THREE from 'three';

//import hooks
import {useControls} from "../hooks/useControls";

const Visitor = (props) => {
    const direction = new THREE.Vector3();
    const frontVector = new THREE.Vector3();
    const sideVector = new THREE.Vector3();
    const speed = new THREE.Vector3();

    const {camera} = useThree()
    const {forward, backward, left, right} = useControls();
    const velocity = useRef([0, 0, 0]);
    const [ref, api] = useSphere(() => ({mass: 1, type: 'Dynamic', position: [0, 10, 0], ...props}))

    useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), [])

    useFrame(() => {
        ref.current.getWorldPosition(camera.position)
        frontVector.set(0, 0, Number(backward) - Number(forward))
        sideVector.set(Number(left) - Number(right), 0, 0)
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(10).applyEuler(camera.rotation)
        speed.fromArray(velocity.current)
        api.velocity.set(direction.x, velocity.current[1], direction.z)
    })

    return (
        <group>
            <mesh position={props.position} ref={ref}>
                <sphereGeometry args={props.args} />
                <meshStandardMaterial color="#FFFF00" />
            </mesh>
        </group>
    )
}

export default Visitor
