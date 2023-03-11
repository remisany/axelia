import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import components
const Test = lazy(() => import('./Test'));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Test/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
  )
}

export default Router;

/*
<VRButton />
<Canvas>
    <XR>
        <Controllers/>
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<Test/>}/>
            </Routes>
        </Suspense>
    </XR>
</Canvas>*/

/*{/*<FirstPersonControls ref={ref} movementSpeed={100} lookSpeed={0.2}/>}
<PointerLockControls/>*/
