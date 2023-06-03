//import config
import * as DT from "../config/dispatchTypes";

export const historyActions = {
    scene,
    setError,
    razError,
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
