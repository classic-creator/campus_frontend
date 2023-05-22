import {
    ALL_COLLEGE_REQUEST,
    ALL_COLLEGE_SUCCESS,
    ALL_COLLEGE_FAIL,
    COLLEGE_DETAILS_REQUEST,
    COLLEGE_DETAILS_SUCCESS,
    COLLEGE_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/collegeConstants";

//GET ALL COLLEGE REDUCER
export const collegeReducer= ((state={colleges:[]},action)=> {

switch (action.type) {
    case ALL_COLLEGE_REQUEST:
        
      return{
        ...state,
        loading:true,
        // colleges:[],

    
      };
    case ALL_COLLEGE_SUCCESS:
        
      return{
        loading:false,
        colleges:action.payload.colleges,
        collegeCounts:action.payload.collegeCounts
      };
   
    case ALL_COLLEGE_FAIL:
        
      return{
        loading:false,
       error:action.payload,
      };
    case CLEAR_ERRORS:
        
      return{
       ...state,
       error:null,
      };

    default:
        return state;
}

})

//GET COLLEGE DETAILS REDUCER

export const collegeDetailsReducer= ((state={college:{},courses:[],photos:[]},action)=> {

    switch (action.type) {
        case COLLEGE_DETAILS_REQUEST:
            
          return{
            ...state,
            loading:true,
            college:{}
          
          };
        case COLLEGE_DETAILS_SUCCESS:
            
          return{
            loading:false,
            college:action.payload.college,
            courses:action.payload.courses,
            photos:action.payload.photos,
          };
        case COLLEGE_DETAILS_FAIL:
            
          return{
            loading:false,
           error:action.payload,
          };
        case CLEAR_ERRORS:
            
          return{
           ...state,
           error:null,
          };
    
        default:
            return state;
    }
    
    })