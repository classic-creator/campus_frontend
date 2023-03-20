import axios from "axios"
import {
    ALL_COURSES_REQUEST,
    ALL_COURSES_SUCCESS,
    ALL_COURSES_FAIL,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    
    CLEAR_ERRORS
} from "../constants/courseConstants";

export const getAllCourses=(keyword="",cl="",co="",ad="",fe="")=>async(dispatch)=>{
try {
    dispatch({type:ALL_COURSES_REQUEST })

    const {data}=await axios.get(`/api/courses?keyword=${keyword}&cl=${cl}&co=${co}&ad=${ad}&fe=${fe}`)
    dispatch({
        type:ALL_COURSES_SUCCESS,
        payload:data
    })
} catch (error) {
    dispatch({
        type:ALL_COURSES_FAIL,
        payload:error.response.data.message
    })
}}


//COURSE DETAILS ACTION

export const getCourseDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({type:COURSE_DETAILS_REQUEST })
    
        const {data}=await axios.get(`/api/college/course/${id}`)
        dispatch({
            type:COURSE_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:COURSE_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }}
    
//clear error

export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
    }