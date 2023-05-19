import { ADMIN_COLLEGE_DETAILS_FAIL, ADMIN_COLLEGE_DETAILS_REQUEST, ADMIN_COLLEGE_DETAILS_SUCCESS, CLEAR_ERRORS, GET_ALLCOLLEGES_FAIL, GET_ALLCOLLEGES_REQUEST, GET_ALLCOLLEGES_SUCCESS, GET_ALLUSER_FAIL, GET_ALLUSER_REQUEST, GET_ALLUSER_SUCCESS } from "../constants/adminConstants"

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
    }
}