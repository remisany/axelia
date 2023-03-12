import React from "react";

//import components
import Photo from "./Photo";

const Photos = ({photos}) => {
    return (
        photos.map((photo, index) => <Photo photo={photo} key={index}/>)
    )
}

export default Photos
