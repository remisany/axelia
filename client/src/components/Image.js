import React from 'react';
import {useForm} from 'react-hook-form';
import {imageServices} from '../services/imageServices';

const Image = () => {
    const {handleSubmit, register} = useForm()

    const onSubmit = values => {
        const formData = new FormData();
        formData.append('image', values.file[0]);
        formData.append('collection', 'animals');
        imageServices.add(formData)
    }

    return (
        <form onSubmit={handleSubmit(values => onSubmit(values))}>
            <input {...register('file')} type='file'/>
            <input type='submit'/>
        </form>
    )
}

export default Image
