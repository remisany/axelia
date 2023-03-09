import React from "react";
import {usePlane} from "@react-three/cannon";

const Floor = () => {
    const rotation = [Math.PI / -2, 0, 0]
    const [ref] = usePlane(() => ({type: 'Static', mass: 0, rotation: rotation, position: [0, -25, 0]}))

    return (
        <mesh rotation={rotation} ref={ref}>
            <planeGeometry args={[1000, 1000]}/>
            <meshStandardMaterial color="#FFFFFF"/>
        </mesh>
    )
}

export default Floor