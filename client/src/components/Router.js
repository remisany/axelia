import React, {lazy, Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import components
const Forest = lazy(() => import("./scenes/Forest"));
const Image = lazy(() => import("./photos/AddImage"));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Forest/>}/>
                    <Route path="/image" element={<Image/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;
