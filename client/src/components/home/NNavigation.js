import React from 'react';

//import components
import Thumbnails from "./Thumbnails";

//import assets
import Stencil from "../../assets/icons/stencil.png";
import {Parallax} from "react-scroll-parallax";

const NNavigation = () => {
    const start = document.documentElement.clientHeight

    return (
        <div className='nnp-page'>
            <div className='nnp-stencil'>
                <Parallax startScroll={start} endScroll={start*2.2} translateX={[-105, 120]} className='nnp-text nnp-text-first'>
                    Forêt - <span>Ville</span> - Fête foraine
                </Parallax>

                <img src={Stencil} alt='camera icon'/>

                <Parallax startScroll={start} endScroll={start*2.2} translateX={[105, -120]} className='nnp-text nnp-text-last'>
                    <span>Forêt</span> - Ville - <span>Fête foraine</span>
                </Parallax>
            </div>

            <Thumbnails/>
        </div>
    )
}

export default NNavigation
