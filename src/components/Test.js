import React from "react";
import {Environment} from "@react-three/drei";
import {Physics} from "@react-three/cannon";

//import assets

import sky from '../assets/sky.hdr'

//import components
import Floor from "./Floor";
import Visitor from "./Visitor";
import Box from "./Box";
import Wall from "./Wall";
import Scene from "./Scene";

const Test = () => {
    return (
        <Physics gravity={[0, -9.8, 0]}>
            <Scene/>
            <Visitor controls args={[0.5]} position={[0, 0, 0]}/>
            <Environment background files={sky}/>
        </Physics>
    )
}

export default Test

/*<Wall start={[-95.49, -24, 166]} end={[121.72, -25, 165]}/>
<Box text={false} position={[5, -20.09, 100]} args={[50, 10, 70]} color="red" />
<Floor/>
*/

    /*
<Box text={false} position={[5, -20.09, 100]} args={[50, 10, 70]} color="red" />
    <Box text={false} position={[5, 1, 0]} args={[1.5, 2, 1.3]} color="orange" />
    <Box text={false} position={[0, 0.5, 5]} args={[3, 1, 1.3]} color="green" />
    */