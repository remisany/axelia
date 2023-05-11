import React from 'react';

//import components
import Thumbnails from "./Thumbnails";
import NavigationTop from "./NavigationTop";
import NavigationBottom from "./NavigationBottom";

//import assets
import Stencil from "../../assets/icons/stencil.png";

const Navigation = () => {
    return (
        <div className='nnp-page'>
            <NavigationTop/>

            <div className='nnp-stencil'>
                <img src={Stencil} alt='camera icon'/>
            </div>

            <NavigationBottom/>

            <Thumbnails/>
        </div>
    )
}

export default Navigation
