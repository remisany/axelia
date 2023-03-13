import React, {lazy, Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import components
const Forest = lazy(() => import("./Forest"));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Forest/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;
