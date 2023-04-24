import React from 'react';
import {Parallax} from "react-scroll-parallax";

//import assets
import {NThumbnails} from "../../constants/thumbnails";

const Thumbnails = () => {
    return (
        <div className='tp-container'>
            {NThumbnails.map((thumbnail, index) => (
                <Parallax key={index} className='tp-content'>
                    <img src={thumbnail.src} alt={thumbnail.alt}/>
                </Parallax>
            ))}
        </div>
    )
}

export default Thumbnails
