
import {configureStore} from '@reduxjs/toolkit'
import { collegeDetailsReducer, collegeReducer } from './reducer/collegeReducer';
import { courseReducer ,courseDetailsReducer, preferedCourseReducer} from './reducer/courseReducer';
import { preferenceReducer, updatePreferenceReducer } from './reducer/preferenceReducer';
import { ForgetPasswordReducer, profileReducer, userReducer } from './reducer/userReducer';
import { MyApplicationReducer, applyAdmissionReducer, applyFormAddressReducer, applyFormEducationReducer, applyFormReducer, studentDetailsReducer } from './reducer/applyReducer';


// let initialState={
//     applyForm:{   
//         studentPersonalData:localStorage.getItem("studentPersonalData")
//         ? JSON.parse(localStorage.getItem("studentPersonalData")):[]
//     }
// };


// const studentPersonalDataInfo=localStorage.getItem("studentPersonalData")
// ? JSON.parse(localStorage.getItem("studentPersonalData")):[]

const initialState={
    // applyForm:{studentPersonalData:studentPersonalDataInfo}
}

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
        updatePreference:updatePreferenceReducer,
        applyForm:applyFormReducer,
        applystudentAddress:applyFormAddressReducer,
        applyEducation:applyFormEducationReducer,
        studentDetails:studentDetailsReducer,
        apply:applyAdmissionReducer,
        application:MyApplicationReducer,
    },

   
    preloadedState:initialState
   
}
)

export default store