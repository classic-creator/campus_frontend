import {
    REGISTER_PERSONALDATA_REQUEST,
    REGISTER_PERSONALDATA_SUCCESS,
    REGISTER_PERSONALDATA_FAIL,
    CLEAR_ERRORS,
    GET_PERSONALDATA_REQUEST,
    GET_PERSONALDATA_SUCCESS,
    GET_PERSONALDATA_FAIL,
    REGISTER_ADDRESS_SUCCESS,
    REGISTER_ADDRESS_REQUEST,
    REGISTER_ADDRESS_FAIL,
    GET_ADDRESS_REQUEST,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS_FAIL
} from "../constants/applyConstants";

export const applyFormReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_PERSONALDATA_REQUEST:
        case REGISTER_ADDRESS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case REGISTER_PERSONALDATA_SUCCESS:
        case REGISTER_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message
            }
        case REGISTER_PERSONALDATA_FAIL:
        case REGISTER_ADDRESS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

//get student personal details

export const studentDetailsReducer = (state = { studentPersonalData: {}, studentAddress: {} }, action) => {
    switch (action.type) {
        case GET_PERSONALDATA_REQUEST:
        case GET_ADDRESS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_PERSONALDATA_SUCCESS:
            return {
                ...state,
                loading: false,
                studentPersonalData: action.payload.studentPersonalData
            }
        case GET_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                studentAddress: action.payload.studentAddress
            }
        case GET_PERSONALDATA_FAIL:
        case GET_ADDRESS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}