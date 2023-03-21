import React, {useEffect, useState} from "react";

//import components
import Photo from "./Photo";

//import services
import {imageServices} from "../services/imageServices";

const Photos = ({photos}) => {
    const [urls, setUrls] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        imageServices.list('animals').then(response => setUrls(response))
    },[])

    useEffect(() => {
        if (urls.length) {
            photos.map((photo, index)=> photos[index].src = urls[0])
            setLoading(false)
        }
    },[urls])

    return (
        !loading && photos.map((photo, index) => <Photo photo={photo} key={index}/>)
    )
}

export default Photos
