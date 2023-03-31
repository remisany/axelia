//import config
import * as DT from "../config/dispatchTypes";

export const soundActions = {
    set,
    raz
}

function set (dispatch, soundId) {
    return dispatch({type: DT.SOUND_SET, soundId: soundId})
}

async function raz (dispatch) {
    return await dispatch({type: DT.SOUND_RAZ})
}
