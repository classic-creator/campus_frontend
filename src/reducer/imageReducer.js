import { ADD_COURSECOVER_FAIL, ADD_COURSECOVER_REQUEST, ADD_COURSECOVER_RESET, ADD_COURSECOVER_SUCCESS, CLEAR_ERRORS, COLLEGELOGO_UPLOAD_REQUEST, COLLEGELOGO_UPLOAD_RESET, COLLEGELOGO_UPLOAD_SUCCESS, COLLEGE_COVERIMG_UPLOAD_FAIL, COLLEGE_COVERIMG_UPLOAD_REQUEST, COLLEGE_COVERIMG_UPLOAD_RESET, COLLEGE_COVERIMG_UPLOAD_SUCCESS, COLLEGE_OTHERIMG_UPLOAD_FAIL, COLLEGE_OTHERIMG_UPLOAD_REQUEST, COLLEGE_OTHERIMG_UPLOAD_RESET, COLLEGE_OTHERIMG_UPLOAD_SUCCESS, OTHER_COURSEPHOTO_FAIL, OTHER_COURSEPHOTO_REQUEST, OTHER_COURSEPHOTO_RESET, OTHER_COURSEPHOTO_SUCCESS } from "../constants/imageConstants";

// export const courseImageReducer = ((state = {}, action) => {

//     switch (action.type) {
//         case ADD_COURSECOVER_REQUEST:
//         case OTHER_COURSEPHOTO_REQUEST:
//         case COLLEGELOGO_UPLOAD_REQUEST:
//             return {

//                 loading: true

//             };

//         case ADD_COURSECOVER_SUCCESS:
//         case COLLEGELOGO_UPLOAD_SUCCESS:
//             return {
//                 loading: false,
//                 message: action.payload.message,

//             };
//         case OTHER_COURSEPHOTO_SUCCESS:
//             return {
//                 loading: false,
//                 message: action.payload.message,

//             };

//         case ADD_COURSECOVER_RESET:
//         case OTHER_COURSEPHOTO_RESET:
//         case COLLEGELOGO_UPLOAD_RESET:
//             return {
//                 loading: false,

//             };

//         case ADD_COURSECOVER_FAIL:
//         case OTHER_COURSEPHOTO_FAIL:
//         case OTHER_COURSEPHOTO_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload,

//             };

//         case CLEAR_ERRORS:

//             return {
//                 ...state,
//                 error: null,
//             };

//         default:
//             return state;
//     }

// })


export const courseImageReducer = ((state = {}, action) => {

        switch (action.type) {
           case COLLEGE_OTHERIMG_UPLOAD_REQUEST:
            case COLLEGELOGO_UPLOAD_REQUEST:
            case COLLEGE_COVERIMG_UPLOAD_REQUEST:
                return {
    
                    loading: true
    
                };
    
            case ADD_COURSECOVER_SUCCESS:
            case COLLEGE_OTHERIMG_UPLOAD_SUCCESS:
            case COLLEGE_COVERIMG_UPLOAD_SUCCESS:
           
                return {
                    loading: false,
                    message: action.payload.message,
    
                };
    
            case COLLEGELOGO_UPLOAD_RESET:
            case COLLEGE_OTHERIMG_UPLOAD_RESET:
            case COLLEGE_COVERIMG_UPLOAD_RESET:
                return {
                    loading: false,
    
                };
    
         
            case OTHER_COURSEPHOTO_FAIL:
            case COLLEGE_OTHERIMG_UPLOAD_FAIL:
            case COLLEGE_COVERIMG_UPLOAD_FAIL:
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