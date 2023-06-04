import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

//import assets
import Stencil from "../../assets/icons/stencil.png";

//import component
import Swiper from "./Swiper";
import {thumbnails} from "../../constants/thumbnails";
import {CSSTransition} from "react-transition-group";

const Navigation = () => {
    const [url, setUrl] = useState(thumbnails[0].url)
    const [animate, setAnimate] = useState(true)

    const navigate = useNavigate()

    const onClick = () => {
        url && navigate(url)
    }

    const getMultiple = () => {
        const width = window.innerWidth
        let multiple

        switch (true) {
            case width < 407:
                multiple = 2
                break
            case width >= 407 && width < 480:
                multiple = 2
                break
            case width >= 480 && width < 768 && window.matchMedia("(orientation: landscape)").matches:
                multiple = 1
                break
            case width >= 480 && width < 768 && window.matchMedia("(orientation: portrait)").matches:
                multiple = 2
                break
            case width >= 768 && width < 1024:
                multiple = 1.2
                break
            case width >= 1024 && width < 1200:
                multiple = 1
                break
            default:
                multiple = 1
                break
        }

        return multiple
    }

    const width = (getMultiple() * 17067) / (17067 / window.innerWidth) * 0.33
    const height = (getMultiple() * 4409) / (17067 / window.innerWidth)
    const top = (0.5 * window.innerHeight) - (height / 2)

    return (
        <div className='nnp-page'>
            <div className='sp-container'>
                <Swiper setUrl={setUrl} setAnimate={setAnimate}/>
            </div>

            <div>
                <CSSTransition classNames='nnp-transition' in={animate} timeout={1000} unmountOnExit>
                    <div className='nnp-title' style={{height: height + 'px', top: top + 'px'}}>{url && url.replace("/", "")}</div>
                </CSSTransition>

                <div className={`nnp-clickable ${url && 'active'}`} style={{height: height + 'px', width: width + 'px'}} onClick={onClick}></div>
                <img className='nnp-stencil' src={Stencil} alt='camera icon'/>
            </div>
        </div>
    )
}

export default Navigation
