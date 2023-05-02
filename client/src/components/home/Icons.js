import React from 'react';
import {Parallax} from 'react-scroll-parallax';

//import constants
import {icons} from '../../constants/icons';

const Icons = () => {
    const redirect = url => {
        window.open(url, '_blank')
    }

    return (
        <div className='dp-card-content-icon'>
            {icons.map((icon, index) => (
                <Parallax scale={[0, 2]} className='is-container' key={index} onClick={() => redirect(icon.url)}>
                    <img src={icon.img} alt={icon.alt}/>
                    <div className='is-text'>
                        <p className='is-text-first'>{icon.title}</p>
                        <p className='is-text-last'>{icon.title}</p>
                    </div>
                </Parallax>
            ))}
        </div>
    )
}

export default Icons
