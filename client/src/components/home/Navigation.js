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
            <div className='nnp-stencil'>
                <NavigationTop/>
                <img src={Stencil} alt='camera icon'/>
                <NavigationBottom/>
            </div>

            <Thumbnails/>
        </div>
    )
}

export default Navigation
