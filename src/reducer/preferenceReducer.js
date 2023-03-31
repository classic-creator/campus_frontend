import {
    PREFERENCE_REGISTER_REQUEST,
    PREFERENCE_REGISTER_SUCCESS,
    PREFERENCE_REGISTER_FAIL,
    CLEAR_ERRORS,

} from "../constants/preferenceConstants"

export const preferenceReducer=((state={preference:{}},action)=>{

    switch (action.type) {
        case PREFERENCE_REGISTER_REQUEST:

            return{
                loading:true,
                ...state,
                preference:{}
            }
        case PREFERENCE_REGISTER_SUCCESS:

            return{
                ...state,
                loading:false,
                preference:action.payload.preference
            }
    
        case PREFERENCE_REGISTER_FAIL:

            return{
                
                loading:false,
                error:action.payload,
                preference:null
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