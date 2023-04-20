import React from 'react';
import {ReactCurvedText} from "react-curved-text";

//import constants
import {icons} from "../../constants/icons";

const Icons = ({size}) => {
    return (
        <div className='dp-card-content-icon'>
            {icons.map((icon, index) => (
                <div className='is-container' key={index}>
                    <img src={icon.img} alt={icon.alt}/>
                    <div className='is-content'>
                        <ReactCurvedText
                            width={size[0]}
                            height={size[0]}
                            cx={(size[0] / 2)}
                            cy={(size[0] / 2)}
                            rx={size[1]}
                            ry={size[1]}
                            startOffset={size[2]}
                            text={icon.title}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Icons
