import * as types from './ActionTypes';

const initialState = {
    statusNavbar: false,
};

const facebookReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case types.OPEN_NAVBAR_SAVE_CHANGE: 
            return {
                ...state,
                statusNavbar: action.payload,
            }
        default:
            return state;
    }
}

export default facebookReducer;