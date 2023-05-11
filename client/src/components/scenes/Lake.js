import React, {Fragment, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

//import assets
import lake from '../../assets/models/lake.glb';

//import components
import Scene from './Scene';
import LoaderContainer from '../loader/LoaderContainer';

//import actions
import {loaderActions} from '../../actions/loaderActions';

const Lake = () => {
    const [reset, setReset] = useState(false)

    const dispatch = useDispatch()

    const lakeRef = useRef(null)

    const env = 'lake'

    useEffect(() => {
        loaderActions.raz(dispatch).then(() => setReset(true))
    }, [])

    return (
        reset && <Fragment>
            <Scene
                env={env}
                envRef={lakeRef}
                model={lake}
                rotation={[0, 235, 0]}
                position={[0, 0, 0]}
                scale={[1, 1, 1]}
            />
            <LoaderContainer length={12} env={env}/>
        </Fragment>
    )
}

export default Lake
