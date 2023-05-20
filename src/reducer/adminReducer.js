import { ADMIN_COLLEGE_DETAILS_FAIL, ADMIN_COLLEGE_DETAILS_REQUEST, ADMIN_COLLEGE_DETAILS_SUCCESS, CLEAR_ERRORS, COLLEGE_APPROVEL_FAIL, COLLEGE_APPROVEL_REQUEST, COLLEGE_APPROVEL_RESET, COLLEGE_APPROVEL_SUCCESS, GET_ALLCOLLEGES_FAIL, GET_ALLCOLLEGES_REQUEST, GET_ALLCOLLEGES_SUCCESS, GET_ALLUSER_FAIL, GET_ALLUSER_REQUEST, GET_ALLUSER_SUCCESS, PANDING_APPROVEL_FAIL, PANDING_APPROVEL_REQUEST, PANDING_APPROVEL_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_RESET, UPDATE_USER_SUCCESS } from "../constants/adminConstants"

export const getAlluserReducer = (state = {users:[]}, action) => {
    switch (action.type) {

        case GET_ALLUSER_REQUEST:

            return {
                ...state,
                loading: true,
                // users:[]
            }


        case GET_ALLUSER_SUCCESS:

            return {
                // ...state,
                loading: false,
                users: action.payload.users,
                Total_users: action.payload.Total_users
            }

        case GET_ALLUSER_FAIL:

            return {
                // ...state,
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


//GET ALL COLLEGES ADMIN
export const getAllCollegesReducer = (state = {colleges:[]}, action) => {
    switch (action.type) {

        case GET_ALLCOLLEGES_REQUEST:

            return {
                ...state,
                loading: true,
                // colleges:[]
            }


        case GET_ALLCOLLEGES_SUCCESS:

            return {
                // ...state,
                loading: false,
                colleges: action.payload.colleges,
                collegeCounts: action.payload.collegeCounts
            }

        case GET_ALLCOLLEGES_FAIL:

            return {
                // ...state,
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

// aadmin college details


//GET ALL COLLEGES ADMIN
export const adminCollegeDetailReducer = (state = {collegeDetails:{}}, action) => {
    switch (action.type) {

        case ADMIN_COLLEGE_DETAILS_REQUEST:

            return {
                ...state,
                loading: true,
                // colleges:[]
            }


        case ADMIN_COLLEGE_DETAILS_SUCCESS:

            return {
                // ...state,
                loading: false,
                collegeDetails: action.payload.collegeDetails,
                courses: action.payload.courses
            }

        case ADMIN_COLLEGE_DETAILS_FAIL:

            return {
                // ...state,
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
    }}
//UPDATE USERS
export const UpdateUSersReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_USER_REQUEST:

            return {
                
                loading: true,
                // colleges:[]
            }


        case UPDATE_USER_SUCCESS:

            return {
                // ...state,
                loading: false,
                message: action.payload.message,
             isUpdated:true,
            }

        case UPDATE_USER_RESET:

            return {
                // ...state,
                loading: false,
                isUpdated:false,

            }
        case UPDATE_USER_FAIL:

            return {
                // ...state,
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
    //get all register panding college
export const GetPandingCollegesReducer= (state = {colleges:[]}, action) => {
    switch (action.type) {

        case PANDING_APPROVEL_REQUEST:

            return {
                
                loading: true,
                colleges:[]
            }


        case PANDING_APPROVEL_SUCCESS:

            return {
                // ...state,
                loading: false,
                colleges: action.payload.colleges,
                collegeCount: action.payload.collegeCount,
             
            }

       
        case PANDING_APPROVEL_FAIL:

            return {
                // ...state,
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
    //college register approve
export const ApproveCollegeReducer= (state = {}, action) => {
    switch (action.type) {

        case COLLEGE_APPROVEL_REQUEST:

            return {
                
                loading: true,
                // colleges:[]
            }


        case COLLEGE_APPROVEL_SUCCESS:

            return {
                // ...state,
                loading: false,
                // college: action.payload.college,
                isUpdated:true,
            }

        case COLLEGE_APPROVEL_RESET:

            return {
                // ...state,
                loading: false,
                isUpdated:false,

            }
        case COLLEGE_APPROVEL_FAIL:

            return {
                // ...state,
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