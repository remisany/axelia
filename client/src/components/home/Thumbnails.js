import React, {Fragment} from 'react';
import {useNavigate} from "react-router-dom";

//import constants
import {thumbnails} from "../../constants/thumbnails";

const Thumbnails = () => {
    const navigate = useNavigate()

    return (
        <div className='tp-container'>
            {thumbnails.map((thumbnail, indexT) => (
                <Fragment key={indexT}>
                    <div className='tp-content'>
                        <div className='tp-clickable' onClick={() => navigate(thumbnail.url)}></div>
                        <img src={thumbnail.src} alt={thumbnail.alt}/>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

export default Thumbnails
