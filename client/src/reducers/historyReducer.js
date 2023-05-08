import * as DT from '../config/dispatchTypes';

const initialState = {
    scene: false,
    error: false
}

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case DT.HISTORY_SCENE:
            return {
                ...state,
                scene: true
            }

        case DT.HISTORY_ERROR_SET:
            return {
                ...state,
                error: true
            }

        case DT.HISTORY_ERROR_RAZ:
            return {
                ...state,
                error: false
            }

        case DT.HISTORY_RAZ:
            return initialState

        default:
            return state;
    }
}

export default historyReducer;
