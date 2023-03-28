//import config
import * as DT from "../config/dispatchTypes";

export const loaderActions = {
    progress,
    raz
}

function progress (dispatch) {
    return dispatch({type: DT.LOADER_PROGRESS})
}

async function raz (dispatch) {
    return await dispatch({type: DT.LOADER_RAZ})
}
