import axios from "axios"
import {
    ALL_COURSES_REQUEST,
    ALL_COURSES_SUCCESS,
    ALL_COURSES_FAIL,
    PREFERED_COURSES_REQUEST,
    PREFERED_COURSES_SUCCESS,
    PREFERED_COURSES_FAIL,
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


//prefered course get

export const GetPreferedCourses=()=>async(dispatch)=>{
    try {
    
        const token=localStorage.getItem('token')
    
        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                
                Authorization: `Bearer ${token}`
            }
        };
    
        dispatch({type:PREFERED_COURSES_REQUEST })
    
        const {data}=await axios.get(`/api/preference/courses`,config)
        dispatch({
            type:PREFERED_COURSES_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:PREFERED_COURSES_FAIL,
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
            payload:error.response.data
        })
    }}
    
//clear error

export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
    }