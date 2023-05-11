import React, {Fragment, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

//import assets
import desert from '../../assets/models/desert.glb';

//import components
import Scene from './Scene';
import LoaderContainer from '../loader/LoaderContainer';

//import actions
import {loaderActions} from '../../actions/loaderActions';

const Desert = () => {
    const [reset, setReset] = useState(false)

    const dispatch = useDispatch()

    const desertRef = useRef(null)

    const env = 'desert'

    useEffect(() => {
        loaderActions.raz(dispatch).then(() => setReset(true))
    }, [])

    return (
        reset && <Fragment>
            <Scene
                env={env}
                envRef={desertRef}
                model={desert}
                rotation={[0, 60, 0]}
                position={[0, 1.1, 0]}
                scale={[2, 2, 2]}
            />
            <LoaderContainer length={11} env={env}/>
        </Fragment>
    )
}

export default Desert
