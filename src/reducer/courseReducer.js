import {
    ALL_COURSES_REQUEST,
    ALL_COURSES_SUCCESS,
    ALL_COURSES_FAIL,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    
    CLEAR_ERRORS,
    PREFERED_COURSES_REQUEST,
    PREFERED_COURSES_SUCCESS,
    PREFERED_COURSES_FAIL
} from "../constants/courseConstants";

const initialState = {

  error: null,
};

export const courseReducer= ((state={courses:[],initialState},action)=> {

    switch (action.type) {
        case ALL_COURSES_REQUEST:
        
            
          return{

            loading:true,
            courses:[]
          };

        case ALL_COURSES_SUCCESS:    
          return{
            loading:false,
            courses:action.payload.courses,
           
          };

         

        case ALL_COURSES_FAIL :   
            return{
              loading:false,
              error:action.payload,
              
            }

        case CLEAR_ERRORS:
            
          return{
           ...state,
           error:null,
          };
    
        default:
            return state;
    }
    
    })

    //PREFERED COURSE REDUCER

    export const preferedCourseReducer= ((state={preferCourses:[],initialState},action)=> {

      switch (action.type) {
          case PREFERED_COURSES_REQUEST:
                         
            return{
            
              loading:true,
              preferCourses:[]
            };
  
          case PREFERED_COURSES_SUCCESS:    
            return{
            
              loading:false,
              preferCourses:action.payload.preferCourses,
             
            };
  
         
  
          case PREFERED_COURSES_FAIL :   
              return{
               
                loading:false,
                error:action.payload,
                
              }
  
          case CLEAR_ERRORS:
              
            return{
             ...state,
             error:null,
            };
      
          default:
              return state;
      }
      
      })
    //course details reducer

    export const courseDetailsReducer= ((state={course:{}},action)=> {

      switch (action.type) {
          case COURSE_DETAILS_REQUEST:
              
            return{
              loading:true,
             ...state
            };
          case COURSE_DETAILS_SUCCESS:
              
            return{
              loading:false,
              course:action.payload.course,
             
            };
          case COURSE_DETAILS_FAIL:
              
            return{
              loading:false,
              error:action.payload.message,
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