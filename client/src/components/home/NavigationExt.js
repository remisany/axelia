import React, {useEffect, useState} from 'react';
import {Parallax} from "react-scroll-parallax";
import {CSSTransition} from "react-transition-group";

const NavigationExt = ({details, className, translate}) => {
    const [first, setFirst] = useState(false)
    const [last, setLast] = useState(false)

    const start = document.documentElement.clientHeight

    const setClass = () => {
        const position = window.scrollY

        position > start*details.start.class ? setFirst(true) : setFirst(false)
        position > start*details.last.class ? setLast(true) : setLast(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', setClass)

        return () => window.removeEventListener('scroll', setClass)
    }, [])

    return (
        <div className={`ntp-container ${className}`}>
            <Parallax startScroll={start*details.scroll.start} endScroll={start*details.scroll.end} translateX={translate} className='ntp-cursor'></Parallax>

            <div className='ntp-content-hide ntp-content-hide-first'></div>
            <div className='ntp-content-hide ntp-content-hide-last'></div>

            <div className='ntp-content'>
                <CSSTransition classNames='ntp-transition' in={first} timeout={200} unmountOnExit>
                    <div className='ntp-dest ntp-dest-first'>
                        <div className='ntp-dest-env'>{details.start.env}</div>
                        <div className='ntp-dest-point'></div>
                    </div>
                </CSSTransition>

                <CSSTransition classNames='ntp-transition' in={last} timeout={200} unmountOnExit>
                    <div className='ntp-dest ntp-dest-last'>
                        <div className='ntp-dest-env'>{details.last.env}</div>
                        <div className='ntp-dest-point'></div>
                    </div>
                </CSSTransition>
            </div>
        </div>
    )
}

export default NavigationExt
