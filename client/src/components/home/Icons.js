import React from 'react';
import {ReactCurvedText} from "react-curved-text";

//import constants
import {icons} from "../../constants/icons";

const Icons = () => {
    return (
        <div className='dp-card-content-icon'>
            {icons.map((icon, index) => (
                <div className='is-container'>
                    <img src={icon.img} alt={icon.alt}/>
                    <div className='is-content'>
                        <ReactCurvedText
                            width={180}
                            height={180}
                            cx={90}
                            cy={90}
                            rx={80}
                            ry={80}
                            startOffset={icon.startOffset}
                            reversed={false}
                            text={icon.title}
                            textPathProps={null}
                            tspanProps={null}
                            ellipseProps={null}
                            svgProps={null}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Icons
