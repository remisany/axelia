import * as DT from '../config/dispatchTypes';

const initialState = {
    soundId: null
}

const soundReducer = (state = initialState, action) => {
    switch (action.type) {
        case DT.SOUND_SET:
            return {
                ...state,
                soundId: action.soundId
            }

        case DT.SOUND_RAZ:
            return initialState

        default:
            return state
    }
}

export default soundReducer;
