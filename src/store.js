
import {configureStore} from '@reduxjs/toolkit'
import { collegeDetailsReducer, collegeReducer } from './reducer/collegeReducer';
import { courseReducer ,courseDetailsReducer, preferedCourseReducer} from './reducer/courseReducer';
import { preferenceReducer } from './reducer/preferenceReducer';
import { ForgetPasswordReducer, profileReducer, userReducer } from './reducer/userReducer';


let initialState={};


const store=configureStore({
 
    reducer:{
        colleges:collegeReducer,
        collegeDetails:collegeDetailsReducer,
        courses:courseReducer,
        preferedCourse:preferedCourseReducer,
        courseDetails:courseDetailsReducer,
        user:userReducer,
        profile:profileReducer,
        forgetPassword:ForgetPasswordReducer,
        preference:preferenceReducer,
    },
    initialState,
   
}
)

export default store