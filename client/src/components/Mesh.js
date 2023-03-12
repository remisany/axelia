import React, {useRef} from 'react';
import {Quaternion, Vector3} from "three";

const Mesh = ({node}) => {
    console.log(node)

    const position = new Vector3();
    const scale = new Vector3();
    const rotation = new Quaternion()

    node.getWorldPosition(position);
    node.getWorldScale(scale);
    node.getWorldQuaternion(rotation)

    const ref = useRef()

    return (
        <group ref={ref} dispose={null}>
            <mesh
                position={[position.x, position.y, position.z]}
                geometry={node.geometry}
                material={node.material}
                scale={[scale.x, scale.y, scale.z]}
                quaternion={[rotation.x, rotation.y, rotation.z, rotation.w]}
            />
        </group>
    )
}

export default Mesh;

/*const [ref] = useBox(() => ({
    type: 'Static',
    mass: 0,
    position: [position.x, position.y, position.z],
    quaternion: [rotation.x, rotation.y, rotation.z, rotation.w]
}))*/