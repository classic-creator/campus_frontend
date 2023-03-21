
import {configureStore} from '@reduxjs/toolkit'
import { collegeDetailsReducer, collegeReducer } from './reducer/collegeReducer';
import { courseReducer ,courseDetailsReducer} from './reducer/courseReducer';


let initialState={};


const store=configureStore({
 
    reducer:{
        colleges:collegeReducer,
        collegeDetails:collegeDetailsReducer,
        courses:courseReducer,
        courseDetails:courseDetailsReducer

    },
    initialState,
   
}
)

export default store