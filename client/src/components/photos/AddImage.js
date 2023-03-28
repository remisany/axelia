import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {Player} from '@lottiefiles/react-lottie-player';

//import assets
import Loader from '../../assets/loader/loader.json';

//import services
import {imageServices} from '../../services/imageServices';

const AddImage = () => {
    const {handleSubmit, register} = useForm()

    const onSubmit = values => {
        const formData = new FormData();
        formData.append('image', values.file[0]);
        formData.append('collection', 'forest');
        imageServices.add(formData)
    }

    return (
        <Fragment>
        <form onSubmit={handleSubmit(values => onSubmit(values))}>
            <input {...register('file')} type='file'/>
            <input type='submit'/>
        </form>
            <div style={{backgroundColor: "#FFD0CA", height: "400px", width: "400px"}}>
                <p style={{color: "#69B38F", fontSize: "40px"}}>TEST</p>
                <p style={{color: "#000000", fontSize: "40px"}}>TEST</p>
            </div>
            <div style={{height: "400px", width: "400px"}}>
                <Player
                    src={Loader}
                    loop
                    autoplay
                />
            </div>
        </Fragment>
    )
}

export default AddImage
