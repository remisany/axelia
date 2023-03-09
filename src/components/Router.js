import React, {lazy, Suspense, useEffect, useRef} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Canvas} from "@react-three/fiber";
import {FirstPersonControls, OrbitControls, PointerLockControls} from "@react-three/drei";

//import components
const Test = lazy(() => import('./Test'));

const Router = () => {
    const ref = useRef()

    const onMouseDown = () => {
        //console.log(ref.current.object.position)
    }

    return (
        <BrowserRouter>
            <Canvas onMouseDown={onMouseDown}>
                <Suspense fallback={null}>
                    <Routes>
                        <Route path="/" element={<Test/>}/>
                    </Routes>
                </Suspense>
                {/*<FirstPersonControls ref={ref} movementSpeed={100} lookSpeed={0.2}/>*/}
                {<PointerLockControls/>}
            </Canvas>
        </BrowserRouter>
  )
}

export default Router;

//<PointerLockControls />