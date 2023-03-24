
import {configureStore} from '@reduxjs/toolkit'
import { collegeDetailsReducer, collegeReducer } from './reducer/collegeReducer';
import { courseReducer ,courseDetailsReducer} from './reducer/courseReducer';
import { ForgetPasswordReducer, profileReducer, userReducer } from './reducer/userReducer';


let initialState={};


const store=configureStore({
 
    reducer:{
        colleges:collegeReducer,
        collegeDetails:collegeDetailsReducer,
        courses:courseReducer,
        courseDetails:courseDetailsReducer,
         user:userReducer,
         profile:profileReducer,
         forgetPassword:ForgetPasswordReducer,
    },
    initialState,
   
}
)

export default store