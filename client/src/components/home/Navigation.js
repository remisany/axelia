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

    return (
        <div className='nnp-page'>
            <CSSTransition classNames='nnp-transition' in={animate} timeout={1000} unmountOnExit>
                <div className='nnp-title'>{url && url.replace("/", "")}</div>
            </CSSTransition>

            <div className='sp-container'>
                <Swiper setUrl={setUrl} setAnimate={setAnimate}/>
            </div>

            <div>
                <div className={`nnp-clickable ${url && 'active'}`} onClick={onClick}></div>
                <img className='nnp-stencil' src={Stencil} alt='camera icon'/>
            </div>
        </div>
    )
}

export default Navigation
