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
        case actionTypes.ADD_COMMENTS:
            let comments = state.comments;
            const comment = action.payload.comment;
            const commentId = action.payload.commentId;
            let singleComment = {
                [commentId]: comment,
            }
            if (Object.entries(state.comments).length !== 0) {
                comments = {
                    ...state.comments,
                    ...singleComment,
                };
            }
            return {
                ...state,
                comments: comments,
            }

        case actionTypes.LOAD_IMAGES:
            return {
                ...state,
                images: action.payload,
            }
        case actionTypes.LOAD_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            }
        case actionTypes.FILTER_IMAGES:
            return {
                ...state,
                category: action.payload,
            }

        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                idToken: action.payload.idToken,
                localId: action.payload.localId,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                errorMsg: action.payload,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                idToken: null,
                localId: null,
                displayName: null,
            }
        case actionTypes.LOAD_USER_DATA:
            return {
                ...state,
                displayName: action.payload,
            }
        default:
            return state;
    }
}