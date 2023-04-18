import React, {Fragment} from 'react';
import {Parallax} from "react-scroll-parallax";

//import components
import Icons from "./Icons";

const Donation = () => {
    return (
        <Fragment>
            <div className='np-card'></div>
            <div className='dp-page'>
                <Parallax scale={[-8.5, 45]} opacity={[.5, 2]} className='dp-card'></Parallax>
                <div className='dp-card-content'>
                    <div className='dp-card-content-text'>Les participants</div>
                    <Icons/>
                </div>
            </div>
            <div className='dp-end'>
                <div className='dp-end-text'>Merci de votre visite.</div>
                <div className='dp-end-text'>A bientôt.</div>
            </div>
        </Fragment>
    )
}

export default Donation
