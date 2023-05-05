import { ADD_COURSECOVER_FAIL, ADD_COURSECOVER_REQUEST, ADD_COURSECOVER_RESET, ADD_COURSECOVER_SUCCESS, CLEAR_ERRORS, OTHER_COURSEPHOTO_FAIL, OTHER_COURSEPHOTO_REQUEST, OTHER_COURSEPHOTO_RESET, OTHER_COURSEPHOTO_SUCCESS } from "../constants/imageConstants";

export const courseImageReducer = ((state = {}, action) => {

    switch (action.type) {
        case ADD_COURSECOVER_REQUEST:
        case OTHER_COURSEPHOTO_REQUEST:
            return {

                loading: true

            };

        case ADD_COURSECOVER_SUCCESS:
            return {
                loading: false,
                message: action.payload.message,

            };
        case OTHER_COURSEPHOTO_SUCCESS:
            return {
                loading: false,
                message: action.payload.message,

            };

        case ADD_COURSECOVER_RESET:
        case OTHER_COURSEPHOTO_RESET:
            return {
                loading: false,

            };

        case ADD_COURSECOVER_FAIL:
        case OTHER_COURSEPHOTO_FAIL:
            return {
                loading: false,
                error: action.payload,

            };

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

})
