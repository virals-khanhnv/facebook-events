import * as types from './ActionTypes';

const initialState = {
    statusNavbar: false,
    listFacebookpage: [],
    fetchInfoFacebookLogin: [],
};

const facebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_NAVBAR_SAVE_CHANGE:
            return {
                ...state,
                statusNavbar: action.payload
            }
        case types.FETCH_LIST_FACEBOOK_PAGE:
            return {
                ...state,
                listFacebookpage: action.payload
            }
        case types.FETCH_INFO_FACEBOOKLOGIN:
            return {
                ...state,
                fetchInfoFacebookLogin: action.payload
            }
        case types.DELETE_FACEBOOK_PAGE:
            return {
                ...state,
                listFacebookpage: state.listFacebookpage.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default facebookReducer;
