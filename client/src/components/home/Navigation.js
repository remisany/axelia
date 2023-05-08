import React, {useEffect} from 'react';

//import components
import Thumbnails from "./Thumbnails";
import NavigationTop from "./NavigationTop";
import NavigationBottom from "./NavigationBottom";

//import assets
import Stencil from "../../assets/icons/stencil.png";

const Navigation = () => {
    let first = true

    const handleResize = () => {
        if (first) {
            first = false
        } else {
            window.scrollTo(0, 0)
            window.location.reload()
        }
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(handleResize)
        resizeObserver.observe(document.body)

        return () => resizeObserver.unobserve(document.body)
    },[])

    return (
        <div className='nnp-page'>
            <NavigationTop/>

            <div className='nnp-stencil'>
                <img src={Stencil} alt='camera icon'/>
            </div>

            <NavigationBottom/>

            <Thumbnails/>
        </div>
    )
}

export default Navigation
