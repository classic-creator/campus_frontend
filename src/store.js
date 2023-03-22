
import {configureStore} from '@reduxjs/toolkit'
import { collegeDetailsReducer, collegeReducer } from './reducer/collegeReducer';
import { courseReducer ,courseDetailsReducer} from './reducer/courseReducer';
import { userReducer } from './reducer/userReducer';


let initialState={};


const store=configureStore({
 
    reducer:{
        colleges:collegeReducer,
        collegeDetails:collegeDetailsReducer,
        courses:courseReducer,
        courseDetails:courseDetailsReducer,
         user:userReducer
    },
    initialState,
   
}
)

export default store