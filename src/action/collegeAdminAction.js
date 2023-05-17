import axios from 'axios'

import {
    ADD_NOTIC_FAIL,
    ADD_NOTIC_REQUEST,
    ADD_NOTIC_SUCCESS,
    CLEAR_ERRORS,
    COLLEGE_COURSES_FAIL,
    COLLEGE_COURSES_REQUEST,
    COLLEGE_COURSES_SUCCESS,
    CREATE_COURSE_FAIL,
    CREATE_COURSE_REQUEST,
    CREATE_COURSE_SUCCESS,
    CREATE_DEPERTMENT_FAIL,
    CREATE_DEPERTMENT_REQUEST,
    CREATE_DEPERTMENT_SUCCESS,
    DELETE_NOTIC_FAIL,
    DELETE_NOTIC_REQUEST,
    DELETE_NOTIC_SUCCESS,
    DEPERTMENT_COURSES_FAIL,
    DEPERTMENT_COURSES_REQUEST,
    DEPERTMENT_COURSES_SUCCESS,
    GET_DEPERTMENT_FAIL,
    GET_DEPERTMENT_REQUEST,
    GET_DEPERTMENT_SUCCESS,
    GET_NOTIC_FAIL,
    GET_NOTIC_REQUEST,
    GET_NOTIC_SUCCESS,
    MY_COLLEGE_FAIL,
    MY_COLLEGE_REQUEST,
    MY_COLLEGE_SUCCESS,
    REGISTER_COLLEGE_FAIL,
    REGISTER_COLLEGE_REQUEST,
    REGISTER_COLLEGE_SUCCESS,
    UPDATE_COURSES_FAIL,
    UPDATE_COURSES_REQUEST,
    UPDATE_COURSES_SUCCESS
} from '../constants/collegeAdminConstants';
import { ADD_COURSECOVER_SUCCESS } from '../constants/imageConstants';

export const collegeRegisterAction = (collegeData) => async (dispatch) => {
    try {

        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: REGISTER_COLLEGE_REQUEST })

        const { data } = await axios.post(
            "/api/collegeregister",
            collegeData,
            config
        )

        dispatch({
            type: REGISTER_COLLEGE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_COLLEGE_FAIL,
            payload: error.response.data.message
        })
    }
}

//my college details



export const myCollegeAction = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                // "Access-Control-Allow-Origin:": "*",
                Accept: 'application/json',
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            baseURL: process.env.REACT_APP_API_BASE_URL,
        };
        dispatch({ type: MY_COLLEGE_REQUEST })

        const { data } = await axios.get("/api/college/staff/profile", config)

        dispatch({
            type: MY_COLLEGE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MY_COLLEGE_FAIL,
            payload: error.response.data.message
        })
     
    }
}



// create depertment

export const createDepertmentAction = (depertmentData) => async (dispatch) => {
    try {

        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: CREATE_DEPERTMENT_REQUEST })

        const { data } = await axios.post(
            "/api/college/create/depertment",
            depertmentData,
            config
        )

        dispatch({
            type: CREATE_DEPERTMENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_DEPERTMENT_FAIL,
            payload: error.response.data.message
        })
    }
}
//get Depertment

export const getDepertmentAction = () => async (dispatch) => {
    try {

        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: GET_DEPERTMENT_REQUEST })

        const { data } = await axios.get(
            "/api/get/depertments",
            
            config
        )

        dispatch({
            type: GET_DEPERTMENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_DEPERTMENT_FAIL,
            payload: error.response.data.message
        })
    }
}

//get Depertment Courses

export const getDepertmentCourseAction = (id) => async (dispatch) => {
    try {

        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: DEPERTMENT_COURSES_REQUEST })

        const { data } = await axios.get(
            `/api/depertment/course/${id}`,
            
            config
        )

        dispatch({
            type: DEPERTMENT_COURSES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DEPERTMENT_COURSES_FAIL,
            payload: error.response.data.message
        })
    }
}


//create Course

export const createCourseAction = ({values,id}) => async (dispatch) => {
    try {

        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: CREATE_COURSE_REQUEST })

        const { data } = await axios.post(
            `/api/college/course/register/${id}`,
            values,
            config
        )

        dispatch({
            type: CREATE_COURSE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_COURSE_FAIL,
            payload: error.response.data.message
        })
    }
}
//get College Course

export const getCollegeCourseAction = () => async (dispatch) => {
    try {

        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: COLLEGE_COURSES_REQUEST })

        const { data } = await axios.get(
            `/api/college/all/courses`,
            
            config
        )

        dispatch({
            type: COLLEGE_COURSES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COLLEGE_COURSES_FAIL,
            payload: error.response.data.message
        })
    }
}


//update course

export const updateCourseAction = ({values,id}) => async (dispatch) => {
    try {

        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: UPDATE_COURSES_REQUEST })

        const { data } = await axios.put(
            `/api/college/staff/course/${id}`,
            values,
            config
        )

        dispatch({
            type: UPDATE_COURSES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_COURSES_FAIL,
            payload: error.response.data.message
        })
    }
}


//add notic 
export const AddnoticsAction = (values) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: ADD_NOTIC_REQUEST })

        const { data } = await axios.post(
            `/api/add/notic`,
            values,
            config
        )

        dispatch({
            type: ADD_NOTIC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_NOTIC_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getNotsAction = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: GET_NOTIC_REQUEST })

        const { data } = await axios.get(`/api/get/notic`,config)

        dispatch({
            type: GET_NOTIC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_NOTIC_FAIL,
            payload: error.response.data.message
        })
    }
}
//
export const DeleteNoticAction = (id) => async (dispatch) => {
    try {

        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: DELETE_NOTIC_REQUEST })

        const { data } = await axios.delete(
            `/api/delete/notic/${id}`,
            
            config
        )

        dispatch({
            type: DELETE_NOTIC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_NOTIC_FAIL,
            payload: error.response.data.message
        })
    }
}

//get links for public


export const getpublicNotsAction = (id) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: GET_NOTIC_REQUEST })

        const { data } = await axios.get(`/api/college/links/${id}`,config)

        dispatch({
            type: GET_NOTIC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_NOTIC_FAIL,
            payload: error.response.data.message
        })
    }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}