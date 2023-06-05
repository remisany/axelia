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
    const [stencilLoad, setStencilLoad] = useState(false)
    const [click, setClick] = useState(false)
    const [img, setImg] = useState('')

    const navigate = useNavigate()

    const onClick = () => url && navigate(url)

    const width = (screen.getMultiple() * 17067) / (17067 / window.innerWidth) * 0.33
    const height = (screen.getMultiple() * 4409) / (17067 / window.innerWidth)
    const top = (0.5 * document.documentElement.clientHeight) - (height / 2)

    const setClass = () => {
        const height = document.documentElement.clientHeight
        const position = window.scrollY

        position > (0.7 * height) ? setClick(true) : setClick(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', setClass)
        setImg(`${Stencil}?param=${Math.random()}`)

        return () => window.removeEventListener('scroll', setClass)
    }, [])

    return (
        <div className='nnp-page'>
            {stencilLoad && <div className='sp-container'>
                <Swiper setUrl={setUrl} setAnimate={setAnimate}/>
            </div>}

            <div>
                {stencilLoad && <Fragment>
                    <CSSTransition classNames='nnp-transition' in={animate} timeout={1000} unmountOnExit>
                        <div className='nnp-title' style={{height: height + 'px', top: top + 'px'}}>{url && url.replace("/", "")}</div>
                    </CSSTransition>

                    {click && <div className={`nnp-clickable ${url && 'active'}`} style={{height: height + 'px', width: width + 'px'}} onClick={onClick}></div>}
                </Fragment>}
                {img !== '' && <img className='nnp-stencil' src={img} alt='camera icon' onLoad={() => setStencilLoad(true)}/>}
            </div>
        </div>
    )
}

export default Navigation
