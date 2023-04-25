import React from 'react';

//import assets
import {NThumbnails} from "../../constants/thumbnails";

const Thumbnails = () => {
    return (
        <div className='tp-container'>
            {NThumbnails.map((thumbnail, indexT) => (
                <div key={indexT} className='tp-content'>
                    <img src={thumbnail.src} alt={thumbnail.alt}/>
                </div>
            ))}
        </div>
    )
}

export default Thumbnails
