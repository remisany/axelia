import React from 'react';
import {useBox} from '@react-three/cannon';

const Wall = ({start, end}) => {
    const position = [(end[0] + start[0]) / 2 , (end[1] + start[1]) / 2, (end[2] + start[2]) / 2]
    const args = [Math.abs(end[0] - start[0]), Math.abs(end[1] - start[1]), Math.abs(end[2] - start[2])]

    const [ref] = useBox(() => ({type: 'Static', mass: 1, position: position, args: args}))

    return (
        <mesh ref={ref}>
            <boxGeometry args={args}/>
            <meshStandardMaterial/>
        </mesh>
    )
}

export default Wall;