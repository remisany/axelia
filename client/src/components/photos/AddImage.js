import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';

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
        </Fragment>
    )
}

export default AddImage
