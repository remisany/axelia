import React from 'react';
import {useGLTF} from "@react-three/drei";

//import assets
import forest from "../assets/environments/forest.glb";

//import components
import Mesh from "./Mesh";

const Scene = () => {
    const {nodes}  = useGLTF(forest)

    return (
        Object.values(nodes).map((node, index) => (
            node.type === 'Mesh' && <Mesh key={index} node={node}/>
        ))
    )
}

export default Scene;