//import config
import * as DT from "../config/dispatchTypes";

export const historyActions = {
    scene,
    setError,
    razError,
    raz
}

function scene (dispatch) {
    return dispatch({type: DT.HISTORY_SCENE})
}

function setError (dispatch) {
    return dispatch({type: DT.HISTORY_ERROR_SET})
}

function razError (dispatch) {
    return dispatch({type: DT.HISTORY_ERROR_RAZ})
}

async function raz (dispatch) {
    return await dispatch({type: DT.HISTORY_RAZ})
}
