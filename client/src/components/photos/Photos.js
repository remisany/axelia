import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from "react-router-dom";

//import components
import Photo from './Photo';

//import services
import {imageServices} from '../../services/imageServices';

//import constants
import {photoXYZ} from '../../constants/photoXYZ';
import {getArrayRandomNumbers} from '../../constants/getArrayRandomNumbers';

//import actions
import {loaderActions} from '../../actions/loaderActions';

const Photos = ({env}) => {
    const [urls, setUrls] = useState([])
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const photos = photoXYZ[env]

    useEffect(() => {
        imageServices.list(env).then(response => response === 'error' ? navigate('erreur') : setUrls(response))
    },[])

    const getUrls = async () => {
        const randomNumbers = await getArrayRandomNumbers(photos.length, urls.length)

        photos.map((photo, index)=> photos[index].src = urls[randomNumbers[index]])
    }

    useEffect(() => {
        urls.length && getUrls().then(() => {
            setLoading(false)
            loaderActions.progress(dispatch)
        })
    },[urls])

    return (
        !loading && photos.map((photo, index) => <Photo photo={photo} key={index}/>)
    )
}

export default Photos
