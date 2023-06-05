import React, {Fragment, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

//import assets
import Stencil from "../../assets/icons/stencil.png";

//import component
import Swiper from "./Swiper";

//import constant
import {thumbnails} from "../../constants/thumbnails";
import {screen} from '../../constants/screen'

const Navigation = () => {
    const [url, setUrl] = useState(thumbnails[0].url)
    const [animate, setAnimate] = useState(true)
    const [click, setClick] = useState(false)
    const [calc, setCalc] = useState()

    const navigate = useNavigate()

    const onClick = () => url && navigate(url)

    const setClass = () => {
        const height = document.documentElement.clientHeight
        const position = window.scrollY
        position > (0.7 * height) ? setClick(true) : setClick(false)
    }

    const getCalc = () => {
        const width = (screen.getMultiple() * 17067) / (17067 / window.innerWidth) * 0.33
        const height = (screen.getMultiple() * 4409) / (17067 / window.innerWidth)
        const top = (0.5 * window.innerHeight) - (height / 2)

        setCalc({width: width, height: height, top: top})
    }

    useEffect(() => {
        window.addEventListener('scroll', setClass)
        getCalc()

        return () => window.removeEventListener('scroll', setClass)
    }, [])

    return (
        <div className='nnp-page'>
            <div className='sp-container'>
                <Swiper setUrl={setUrl} setAnimate={setAnimate}/>
            </div>

            <div>
                <Fragment>
                    {calc && <CSSTransition classNames='nnp-transition' in={animate} timeout={1000} unmountOnExit>
                        <div className='nnp-title' style={{height: calc.height + 'px', top: calc.top + 'px'}}>{url && url.replace("/", ":")}</div>
                    </CSSTransition>}

                    {click && calc && <div className={`nnp-clickable ${url && 'active'}`} style={{height: calc.height + 'px', width: calc.width + 'px'}} onClick={onClick}></div>}
                </Fragment>
                <img className='nnp-stencil' src={Stencil} alt='camera icon'/>
            </div>
        </div>
    )
}

export default Navigation
