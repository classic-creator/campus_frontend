
// import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import { legacy_createStore as createStore } from 'redux';
import { combineReducers,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { collegeDetailsReducer, collegeReducer } from './reducer/collegeReducer';
import { courseReducer ,courseDetailsReducer, preferedCourseReducer} from './reducer/courseReducer';
import { preferenceReducer, updatePreferenceReducer } from './reducer/preferenceReducer';
import { ForgetPasswordReducer, profileReducer, userReducer } from './reducer/userReducer';
import { ApplicationReducer, ConfirmStudentReducer, CourseApplicationReducer, MyApplicationReducer, SelectedApplicationReducer, applicationDetailsReducer, applyAdmissionReducer, applyFormAddressReducer, applyFormEducationReducer, applyFormReducer, studentDetailsReducer } from './reducer/applyReducer';
import { GetDepertmentReducer, addCourseReducer, collegeCourseReducer, collegesReducer, depertmentReducer, mycollegesReducer, updateCourseReducer } from './reducer/collegeAdminReducer';
import thunk from 'redux-thunk';




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

const reducers = combineReducers({
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
            college:collegesReducer,
           myCollege: mycollegesReducer,
            depertment:depertmentReducer,
            depertments:GetDepertmentReducer,
            deptAdCourse:addCourseReducer,
            UpdateCourse:updateCourseReducer,
            collegeCourses:collegeCourseReducer,
            courseApplyList:CourseApplicationReducer,
            applicationAction:ApplicationReducer,
            applicationDetails:applicationDetailsReducer,
            selectedApplication:SelectedApplicationReducer,
            confirmStudent:ConfirmStudentReducer,
})

const middleWare= [thunk]

const store = createStore (
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))

)

// const store=configureStore({
 
//     reducer:{
//         colleges:collegeReducer,
//         collegeDetails:collegeDetailsReducer,
//         courses:courseReducer,
//         preferedCourse:preferedCourseReducer,
//         courseDetails:courseDetailsReducer,
//         user:userReducer,
//         profile:profileReducer,
//         forgetPassword:ForgetPasswordReducer,
//         preference:preferenceReducer,
//         updatePreference:updatePreferenceReducer,
//         applyForm:applyFormReducer,
//         applystudentAddress:applyFormAddressReducer,
//         applyEducation:applyFormEducationReducer,
//         studentDetails:studentDetailsReducer,
//         apply:applyAdmissionReducer,
//         application:MyApplicationReducer,
//         college:collegesReducer,
//        myCollege: mycollegesReducer,
//         depertment:depertmentReducer,
//         depertments:GetDepertmentReducer,
//         deptAdCourse:addCourseReducer,
//         UpdateCourse:updateCourseReducer,
//     },

//   middleware: middleware,
//     preloadedState:initialState
   
// }
// )

export default store