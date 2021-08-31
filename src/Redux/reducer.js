import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    displayName: null,
    images: [],
    comments: [],
    category: null,
    idToken: null,
    localId: null,
    errorMsg: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                errorMsg: action.payload,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                displayName: null,
            }
        // case actionTypes.LOAD_USER_DATA:
        //     return {
        //         ...state,
        //         displayName: action.payload,
        //     }
        default:
            return state;
    }
}