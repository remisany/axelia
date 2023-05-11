import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

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

    const {points, scale} = photoXYZ[env]

    useEffect(() => {
        imageServices.list(env).then(response => response === 'error' ? navigate('/erreur') : setUrls(response))
    },[])

    const getUrls = async () => {
        const randomNumbers = await getArrayRandomNumbers(points.length, urls.length)

        points.map((photo, index)=> points[index].src = urls[randomNumbers[index]])
    }

    useEffect(() => {
        urls.length && getUrls().then(() => {
            setLoading(false)
            loaderActions.progress(dispatch)
        })
    },[urls])

    return (
        !loading && points.map((photo, index) => <Photo photo={photo} key={index} scale={scale}/>)
    )
}

export default Photos
