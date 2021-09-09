import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    images: [],
    comments: [],
    category: null,
    customerId: null,
    customerName: null,
    errorMsg: null,
    carCollection: [],
    selectedCar: null,
    customers: [],
    invoice: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CUSTOMER_LIST:
            return {
                ...state,
                customers: action.payload,
            }
        case actionTypes.INVOICE_LIST:
            return {
                ...state,
                invoice: action.payload,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                customerName: action.payload.customerName,
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
        case actionTypes.LOAD_CARS:
            return {
                ...state,
                carCollection: action.payload,
            }
        case actionTypes.SELECTED_CAR:
            return {
                ...state,
                selectedCar: action.payload,
            }
        default:
            return state;
    }
}