
import {
    CLEAR_ERRORS,
    MY_COLLEGE_FAIL,
    MY_COLLEGE_REQUEST,
    MY_COLLEGE_SUCCESS,
    REGISTER_COLLEGE_FAIL,
    REGISTER_COLLEGE_REQUEST,
    REGISTER_COLLEGE_SUCCESS
} from "../constants/collegeAdminConstants";
export const collegesReducer = ((state = {college:{} }, action) => {

    switch (action.type) {

        case REGISTER_COLLEGE_REQUEST:
            case MY_COLLEGE_REQUEST:
            return {
                loading: true,

            };
        case REGISTER_COLLEGE_SUCCESS:
           

            return {

                loading: false,
                message: action.payload.message

            };

            case MY_COLLEGE_SUCCESS:
                return{
                loading:false,
                myCollege:action.payload.myCollege

            }
        case REGISTER_COLLEGE_FAIL:
            case MY_COLLEGE_FAIL:
            return {
                loading: false,
                error:action.payload
            }

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

})


