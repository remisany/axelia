import * as DT from '../config/dispatchTypes';

const initialState = {
    progress: 0,
}

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case DT.LOADER_PROGRESS:
            return {
                ...state,
                progress: state.progress + 1
            }

        case DT.LOADER_RAZ:
            return initialState

        default:
            return state;
    }
}

export default loaderReducer;
