import React, {useEffect, useState} from 'react';
import {Parallax} from "react-scroll-parallax";
import Typewriter from 'typewriter-effect';

const Intro = () => {
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        setTimeout(() => setDisplay(true), 1000)
    }, [])

    return (
        <Parallax className='ip-page' opacity={[2, -1]}>
            <div className='ip-container'>
                <div className='ip-title ip-title-empty'>Bienvenue chez Axelia.</div>
                <div className='ip-title ip-title-full'>Bienvenue chez Axelia.</div>
                {display && <Typewriter
                    options={{
                        strings: [
                            'Un musée en réalité virtuelle exposant ses photographies...',
                            'Vous avez le choix entre quatre mondes...',
                            'Vous pouvez aussi mettre le son pour profiter d\'une ambiance sonore...',
                            'On y va ? Descendez...'
                        ],
                        autoStart: true,
                        loop: true
                    }}
                />}
            </div>
        </Parallax>
    )
}

export default Intro
