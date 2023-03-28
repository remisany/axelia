import React, {Fragment, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

//import assets
import forest from '../../assets/models/forest.glb';

//import components
import Scene from './Scene';
import LoaderContainer from '../loader/LoaderContainer';

//import actions
import {loaderActions} from '../../actions/loaderActions';

const Forest = () => {
    const [reset, setReset] = useState(false)

    const dispatch = useDispatch()

    const forestRef = useRef(null)

    useEffect(() => {
        loaderActions.raz(dispatch).then(() => setReset(true))
    }, [])

    return (
        <Fragment>
            {reset && <Scene
                env='forest'
                envRef={forestRef}
                model={forest}
                rotation={[0, -70, 0]}
            />}
            <LoaderContainer length={14}/>
        </Fragment>

    )
}

export default Forest
