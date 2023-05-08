import React, {lazy, Suspense,} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import components
const Home = lazy(() => import('./home/Home'));
const Forest = lazy(() => import('./scenes/Forest'));
const Image = lazy(() => import('./photos/AddImage'));
const Error = lazy(() => import('./commons/Error'));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/foret' element={<Forest/>}/>
                    <Route path='/image' element={<Image/>}/>
                    <Route path='/erreur' element={<Error/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;
