import {
    PREFERENCE_REGISTER_REQUEST,
    PREFERENCE_REGISTER_SUCCESS,
    PREFERENCE_REGISTER_FAIL,
    CLEAR_ERRORS,
    GET_PREFERENCE_REQUEST,
    GET_PREFERENCE_SUCCESS,
    GET_PREFERENCE_FAIL,
    UPDATE_PREFERENCE_REQUEST,
    UPDATE_PREFERENCE_SUCCESS,
    UPDATE_PREFERENCE_RESET,
    UPDATE_PREFERENCE_FAIL,

} from "../constants/preferenceConstants"
const initialState={

    error:null
}


export const preferenceReducer = ((state = { preference: {} ,initialState}, action) => {

    switch (action.type) {
        case PREFERENCE_REGISTER_REQUEST:
        case GET_PREFERENCE_REQUEST:
           
            return {
              ...state,
                loading: true,  
                preference: {}
            }
        case PREFERENCE_REGISTER_SUCCESS:
        case GET_PREFERENCE_SUCCESS:

            return {
              
                loading: false,
                preference: action.payload.preference,
                
            }
           

        case PREFERENCE_REGISTER_FAIL:
        case GET_PREFERENCE_FAIL:
         
            return {
            

                loading: false,
                error: action.payload,
              ...state,
            }

        
        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
)
//update preferences

export const updatePreferenceReducer = ((state = {}, action) => {

    switch (action.type) {
     
            case UPDATE_PREFERENCE_REQUEST:
            return {
                loading: true,  
             
            }
       
            case UPDATE_PREFERENCE_SUCCESS:
                return{
                   
                    loading:false,
                    isUpdated:action.payload,
                   
                }

       
            case UPDATE_PREFERENCE_FAIL:
            return {

                loading: false,
                error: action.payload,
              ...state
            }

            case UPDATE_PREFERENCE_RESET:
                return{
               
                isUpdated:false,
               loading:false
            }
        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
)