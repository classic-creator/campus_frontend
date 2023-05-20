
// import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import { legacy_createStore as createStore } from 'redux';
import { combineReducers,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { collegeDetailsReducer, collegeReducer } from './reducer/collegeReducer';
import { courseReducer ,courseDetailsReducer, preferedCourseReducer} from './reducer/courseReducer';
import { preferenceReducer, updatePreferenceReducer } from './reducer/preferenceReducer';
import { ForgetPasswordReducer, GetCountReducer, profileReducer, userReducer } from './reducer/userReducer';
import { ApplicationReducer, ConfirmStudentReducer, CourseApplicationReducer, MyApplicationReducer, SelectedApplicationReducer, applicationDetailsReducer, applyAdmissionReducer, applyFormAddressReducer, applyFormEducationReducer, applyFormReducer, appyFormfileReducer, studentDetailsReducer } from './reducer/applyReducer';
import { AddnoticReducer, DeleteNoticReducer, GetDepertmentReducer, GetNoticReducer, UpdatecollegesReducer, addCourseReducer, collegeCourseReducer, collegesReducer, depertmentReducer, mycollegesReducer, updateCourseReducer } from './reducer/collegeAdminReducer';
import thunk from 'redux-thunk';
import { CarouselDeleteReducer, CarouselImageReducer, GetCarouselImageReducer, GetSchemeReducer, ImageDeleteReducer, SchemeReducer, courseImageReducer } from './reducer/imageReducer';
import { AddPaymentReducer, CoursePaymentDetailsReducer,  closePaymentsReducer, getCoursePaymentHistoryReducer, getStudentNewPaymentReducer, getStudentPaymentHistorryReducer } from './reducer/paymentReducer';
import { ApproveCollegeReducer, GetPandingCollegesReducer, UpdateUSersReducer, adminCollegeDetailReducer, getAllCollegesReducer, getAlluserReducer } from './reducer/adminReducer';




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
            applyfiles:appyFormfileReducer,
            apply:applyAdmissionReducer,
            application:MyApplicationReducer,
            college:collegesReducer,
           myCollege: mycollegesReducer,
           myCollegeupdate: UpdatecollegesReducer,
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
            courseImage:courseImageReducer,
            deleteImg:ImageDeleteReducer,
            addPayment:AddPaymentReducer,
            payments:getCoursePaymentHistoryReducer,
            stdNewPayments:getStudentNewPaymentReducer,
            paymentData:getStudentPaymentHistorryReducer,
            coursePayData:CoursePaymentDetailsReducer,
            closePayment:closePaymentsReducer,
            notic:AddnoticReducer,
            getNotic:GetNoticReducer,
            dltNotic:DeleteNoticReducer,
            addCarousel:CarouselImageReducer,
            getCarousel:GetCarouselImageReducer,
            dltCarousel:CarouselDeleteReducer,
            allUser:getAlluserReducer,
            allCollege:getAllCollegesReducer,
            admincollegedetail:adminCollegeDetailReducer,
            addScheme:SchemeReducer,
            getScheme:GetSchemeReducer,
            updateUser:UpdateUSersReducer,
            getcount:GetCountReducer,
            pandingColleges:GetPandingCollegesReducer,
            approve:ApproveCollegeReducer,

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