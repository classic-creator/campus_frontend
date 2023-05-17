
import {
    ADD_NOTIC_FAIL,
    ADD_NOTIC_REQUEST,
    ADD_NOTIC_RESET,
    ADD_NOTIC_SUCCESS,
    CLEAR_ERRORS,
    COLLEGE_COURSES_FAIL,
    COLLEGE_COURSES_REQUEST,
    COLLEGE_COURSES_SUCCESS,
    CREATE_COURSE_FAIL,
    CREATE_COURSE_REQUEST,
    CREATE_COURSE_RESET,
    CREATE_COURSE_SUCCESS,
    CREATE_DEPERTMENT_FAIL,
    CREATE_DEPERTMENT_REQUEST,
    CREATE_DEPERTMENT_RESET,
    CREATE_DEPERTMENT_SUCCESS,
    DELETE_NOTIC_FAIL,
    DELETE_NOTIC_REQUEST,
    DELETE_NOTIC_RESET,
    DELETE_NOTIC_SUCCESS,
    DEPERTMENT_COURSES_FAIL,
    DEPERTMENT_COURSES_REQUEST,
    DEPERTMENT_COURSES_SUCCESS,
    GET_DEPERTMENT_FAIL,
    GET_DEPERTMENT_REQUEST,
    GET_DEPERTMENT_SUCCESS,
    GET_NOTIC_FAIL,
    GET_NOTIC_REQUEST,
    GET_NOTIC_SUCCESS,
    MY_COLLEGE_FAIL,
    MY_COLLEGE_REQUEST,
    MY_COLLEGE_SUCCESS,
    REGISTER_COLLEGE_FAIL,
    REGISTER_COLLEGE_REQUEST,
    REGISTER_COLLEGE_SUCCESS,
    UPDATE_COURSES_FAIL,
    UPDATE_COURSES_REQUEST,
    UPDATE_COURSES_RESET,
    UPDATE_COURSES_SUCCESS
} from "../constants/collegeAdminConstants";
export const collegesReducer = ((state = {}, action) => {

    switch (action.type) {

        case REGISTER_COLLEGE_REQUEST:

            return {
                loading: true,

            };
        case REGISTER_COLLEGE_SUCCESS:


            return {

                loading: false,
                message: action.payload.message

            };


        case REGISTER_COLLEGE_FAIL:

            return {
                loading: false,
                error: action.payload
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


// create depertment

export const depertmentReducer = ((state = {}, action) => {

    switch (action.type) {

        case CREATE_DEPERTMENT_REQUEST:

            return {
                loading: true,
            };


        case CREATE_DEPERTMENT_SUCCESS:
            return {
                loading: false,
                message:action.payload.message,
                depertment: action.payload.depertment,
            }
        case CREATE_DEPERTMENT_RESET:
            return {
                loading: false,

            }
        case CREATE_DEPERTMENT_FAIL:

            return {
                // ...state, 
                loading: false,
                error: action.payload
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

//GET DEPERTMENT
export const GetDepertmentReducer = ((state = { depertments: [], courses: [] }, action) => {

    switch (action.type) {

        case GET_DEPERTMENT_REQUEST:
        case DEPERTMENT_COURSES_REQUEST:

            return {
                ...state,
                loading: true,
            };


        case GET_DEPERTMENT_SUCCESS:
            return {
                loading: false,
                depertments: action.payload.depertments,
            }
        case DEPERTMENT_COURSES_SUCCESS:
            return {
                loading: false,
                courses: action.payload.courses,
            }

        case GET_DEPERTMENT_FAIL:
        case DEPERTMENT_COURSES_FAIL:

            return {
                loading: false,
                error: action.payload
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


//get my college

export const mycollegesReducer = (state = { myCollege: {}, myCourses: [] }, action) => {

    switch (action.type) {


        case MY_COLLEGE_REQUEST:
            return {
                ...state,
                loading: true,

            };


        case MY_COLLEGE_SUCCESS:
            return {
                loading: false,
                myCollege: action.payload.myCollege,
                myCourses: action.payload.myCourses,
                clgConfirmApplication: action.payload.clgConfirmApplication,
                photos: action.payload.photos,
                cover_image: action.payload.cover_image,
                logo_image: action.payload.logo_image,

               
            }

        case MY_COLLEGE_FAIL:
            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    };


}
//CREATE COURSE

export const addCourseReducer = ((state = {}, action) => {

    switch (action.type) {

        case CREATE_COURSE_REQUEST:

            return {
                loading: true,
            };


        case CREATE_COURSE_SUCCESS:
            return {
                loading: false,
                course: action.payload.course,
            }
        case CREATE_COURSE_RESET:
            return {
                loading: false,

            }
        case CREATE_COURSE_FAIL:

            return {
                loading: false,
                error: action.payload
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
//get college course

export const collegeCourseReducer = (state = { courses: [] }, action) => {

    switch (action.type) {


        case COLLEGE_COURSES_REQUEST:
            return {
                ...state,
                loading: true,

            };


        case COLLEGE_COURSES_SUCCESS:
            return {
                loading: false,

                courses: action.payload.courses,


            }

        case COLLEGE_COURSES_FAIL:
            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    };


}

//update Course

export const updateCourseReducer = ((state = {}, action) => {

    switch (action.type) {

        case UPDATE_COURSES_REQUEST:

            return {
                loading: true,
            };


        case UPDATE_COURSES_SUCCESS:
            return {
                loading: false,
                course: action.payload.course,
            }
        case UPDATE_COURSES_RESET:
            return {
                loading: false,

            }
        case UPDATE_COURSES_FAIL:

            return {
                loading: false,
                error: action.payload
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

export const AddnoticReducer = ((state = {}, action) => {

    switch (action.type) {

        case ADD_NOTIC_REQUEST:
         

            return {
               
                loading: true,

            };
        case ADD_NOTIC_SUCCESS:


            return {

                loading: false,
                message: action.payload.message

            };
       
        case ADD_NOTIC_RESET:


            return {

                loading: false,
               

            };
       

        case ADD_NOTIC_FAIL:
         

            return {
                loading: false,
                error: action.payload
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




export const GetNoticReducer = ((state = {   notic:[]}, action) => {

    switch (action.type) {

        case GET_NOTIC_REQUEST:

            return {
                loading: true,
               

            };
        case GET_NOTIC_SUCCESS:

            return {

                loading: false,
                notic: action.payload.notic

            };
        case GET_NOTIC_FAIL:
            return {
                loading: false,
                error: action.payload
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


//delete notic reducer




export const DeleteNoticReducer = ((state = {}, action) => {

    switch (action.type) {

        case DELETE_NOTIC_REQUEST:

            return {
                loading: true,
              

            };
        case DELETE_NOTIC_SUCCESS:

            return {

                loading: false,
                message: action.payload.message,
                isDeleted:true,

            };
        case DELETE_NOTIC_RESET:

            return {

                loading: false,
      
                isDeleted:false,

            };
        case DELETE_NOTIC_FAIL:
            return {
                loading: false,
                error: action.payload
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
