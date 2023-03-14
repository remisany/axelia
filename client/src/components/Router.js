import React, {lazy, Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import components
const Forest = lazy(() => import("./Forest"));
const Image = lazy(() => import("./Image"));

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
