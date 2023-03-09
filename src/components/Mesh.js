import React from 'react';
import {Quaternion, Vector3} from "three";
import {useBox} from "@react-three/cannon";

const Mesh = ({node}) => {
    const position = new Vector3();
    const scale = new Vector3();
    const rotation = new Quaternion()

    node.getWorldPosition(position);
    node.getWorldScale(scale);
    node.getWorldQuaternion(rotation)

    const [ref] = useBox(() => ({
        type: 'Static',
        mass: 0,
        position: [position.x, position.y, position.z],
        quaternion: [rotation.x, rotation.y, rotation.z, rotation.w],
        onCollide: (e) => {
            console.log(e);
        },
    }))

    return (
        <group ref={ref} dispose={null}>
            <mesh
                geometry={node.geometry}
                material={node.material}
                scale={[scale.x, scale.y, scale.z]}
                quaternion={[rotation.x, rotation.y, rotation.z, rotation.w]}
            />
        </group>
    )
}

export default Mesh;