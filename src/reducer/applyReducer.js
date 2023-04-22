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
    GET_ADDRESS_FAIL,
    REGISTER_EDUCATION_REQUEST,
    REGISTER_EDUCATION_SUCCESS,
    REGISTER_EDUCATION_FAIL,
    GET_EDUCATION_REQUEST,
    GET_EDUCATION_SUCCESS,
    GET_EDUCATION_FAIL,
    REGISTER_EDUCATION_RESET,
    REGISTER_ADDRESS_RESET,
    REGISTER_PERSONALDATA_RESET,
    APPLY_ADMISSION_SUCCESS,
    APPLY_ADMISSION_REQUEST,
    APPLY_ADMISSION_RESET,
    APPLY_ADMISSION_FAIL,
    MY_APPLICATION_REQUEST,
    MY_APPLICATION_SUCCESS,
    MY_APPLICATION_FAIL,
    COURSE_APPLICATION_REQUEST,
    COURSE_APPLICATION_SUCCESS,
    COURSE_APPLICATION_FAIL,
    APPLICATION_UPDATE_REQUEST,
    APPLICATION_UPDATE_SUCCESS,
    APPLICATION_UPDATE_FAIL,
    APPLICATION_UPDATE_RESET,
} from "../constants/applyConstants";

export const applyFormReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_PERSONALDATA_REQUEST:
      return{ 
                // ...state,
                loading: true
            }

        case REGISTER_PERSONALDATA_SUCCESS:
       
            return {
                // ...state,
                loading: false,
                message: action.payload.message
            }

            case REGISTER_PERSONALDATA_RESET:
       
            return {
                // ...state,
                loading: false,
               
            }

        case REGISTER_PERSONALDATA_FAIL:
       
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


export const applyFormAddressReducer = (state = {}, action) => {
    switch (action.type) {
      
        case REGISTER_ADDRESS_REQUEST:
      
            return {
                // ...state,
                loading: true
            }

       
        case REGISTER_ADDRESS_SUCCESS:
      
            return {
                // ...state,
                loading: false,
                message: action.payload.message
            }

            case REGISTER_ADDRESS_RESET:
       
            return {
                // ...state,
                loading: false,
               
            }
      
        case REGISTER_ADDRESS_FAIL:
      
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

// education 

export const applyFormEducationReducer = (state = {}, action) => {
    switch (action.type) {
       
        case REGISTER_EDUCATION_REQUEST:
            return {
                // ...state,
                loading: true
            }

        
        case REGISTER_EDUCATION_SUCCESS:
            return {
                // ...state,
                loading: false,
                message: action.payload.message
            }
            case REGISTER_EDUCATION_RESET:
       
            return {
                // ...state,
                loading: false,
               
            }
        case REGISTER_EDUCATION_FAIL:
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



//apply admission

export const applyAdmissionReducer = (state = {}, action) => {
    switch (action.type) {
       
        case APPLY_ADMISSION_REQUEST:
            return {
                // ...state,
                loading: true
            }

        
        case APPLY_ADMISSION_SUCCESS:
            return {
                // ...state,
                loading: false,
                msg: action.payload.msg
            }
            case APPLY_ADMISSION_RESET:
       
            return {
                // ...state,
                loading: false,
               
            }
        case APPLY_ADMISSION_FAIL:
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

//get student personal details

export const studentDetailsReducer = (state = { studentPersonalData: {}, studentAddress: {}, studentEducation: {} }, action) => {
    switch (action.type) {
        case GET_PERSONALDATA_REQUEST:
        case GET_ADDRESS_REQUEST:
        case GET_EDUCATION_REQUEST:
            return {
                ...state,
                loading: true,
                studentPersonalData:{},
                studentAddress:{},
                studentEducation:{}

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
        case GET_EDUCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                studentEducation: action.payload.studentEducation
            }
        case GET_PERSONALDATA_FAIL:
        case GET_ADDRESS_FAIL:
        case GET_EDUCATION_FAIL:
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

//get  applications for user

export const MyApplicationReducer = (state = {applications:[]}, action) => {
    switch (action.type) {
       
        case MY_APPLICATION_REQUEST:
            return {
                // ...state,
                loading: true       
            }

        
        case MY_APPLICATION_SUCCESS:
            return {
                // ...state,
                loading: false,
                applications: action.payload.applications
            }
           
        case MY_APPLICATION_FAIL:
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


//GET COURSE APPLICATIONS

export const CourseApplicationReducer = (state = {applications:[]}, action) => {
    switch (action.type) {
       
        case COURSE_APPLICATION_REQUEST:
            return {
                ...state,
                loading: true       
            }

        
        case COURSE_APPLICATION_SUCCESS:
            return {
                // ...state,
                loading: false,
                applications: action.payload.applications
            }
           
        case COURSE_APPLICATION_FAIL:
            return {
              
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

    //update application status

    export const ApplicationReducer = (state = {}, action) => {
        switch (action.type) {
           
            case APPLICATION_UPDATE_REQUEST:
                return {
                    ...state,
                    loading: true       
                }
    
            
            case APPLICATION_UPDATE_SUCCESS:
                return {
                    // ...state,
                    loading: false,
                    isUpdated: true
                }
            case APPLICATION_UPDATE_RESET:
                return {
                    // ...state,
                    loading: false,
                    isUpdated: false
                }
               
            case APPLICATION_UPDATE_FAIL:
                return {
                  
                    loading: false,
                    error: action.payload,
                    isUpdated:false
                }
    
            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null
                }
            default:
                return state;
        }}