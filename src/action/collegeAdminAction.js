import axios from 'axios'
import React from 'react'
import {
    CLEAR_ERRORS,
    MY_COLLEGE_FAIL,
    MY_COLLEGE_REQUEST,
    MY_COLLEGE_SUCCESS,
    REGISTER_COLLEGE_FAIL,
    REGISTER_COLLEGE_REQUEST,
    REGISTER_COLLEGE_SUCCESS
} from '../constants/collegeAdminConstants';

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
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: MY_COLLEGE_REQUEST })

        const { data } = await axios.get(
            "/api/college/stuff/profile",
            
            config
        )

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

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}