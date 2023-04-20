//import services
import {request} from './request';

export const imageServices = {
    add,
    list
}

function add(formData) {
    return request(
        'POST',
        `/image/add`,
        null,
        null,
        null,
        formData
    )
}

function list(collection) {
    const successCallback = response => (
        response.data.map(url => url.replace(process.env.REACT_APP_FB, `${process.env.REACT_APP_API_HOST}/proxy`))
    )

    const catchCallback = () => 'error'

    return request(
        'POST',
        `/image/list`,
        successCallback,
        null,
        catchCallback,
        {collection: collection}
    )
}
