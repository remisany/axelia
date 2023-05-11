import React, {Fragment, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

//import assets
import mountain from '../../assets/models/mountain.glb';

//import components
import Scene from './Scene';
import LoaderContainer from '../loader/LoaderContainer';

//import actions
import {loaderActions} from '../../actions/loaderActions';

const Mountain = () => {
    const [reset, setReset] = useState(false)

    const dispatch = useDispatch()

    const mountainRef = useRef(null)

    const env = 'mountain'

    useEffect(() => {
        loaderActions.raz(dispatch).then(() => setReset(true))
    }, [])

    return (
        reset && <Fragment>
            <Scene
                env={env}
                envRef={mountainRef}
                model={mountain}
                rotation={[0, 60, 0]}
                position={[0, 1, 0]}
                scale={[2, 2, 2]}
            />
            <LoaderContainer length={12} env={env}/>
        </Fragment>
    )
}

export default Mountain
