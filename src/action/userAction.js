import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL
} from "../constants/userConstants";

import axios from "axios";



export const login = (email, password) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        dispatch({ type: LOGIN_REQUEST })


        const { data } = await axios.post(
            "/api/login",
            { email, password },
            config
        )

        localStorage.setItem("token", data.token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}


//register

export const registerUser = (userData) => async (dispatch) => {
    try {
        const config = { headers: { "Content-Type": "application/json" } };
        dispatch({ type: REGISTER_USER_REQUEST })

        const { data } = await axios.post(
            "/api/register",
            userData,
            config
        )

        localStorage.setItem("token", data.token);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

//LOAD USER

export const loadUser = () => async (dispatch) => {
    try {

        const token=localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };

        dispatch({ type: LOAD_USER_REQUEST })

        const { data } = await axios.get("/api/getProfile", config)

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

//logout user

export const logout = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` }; 
      
        dispatch({ type: LOGOUT_REQUEST })


       await axios.post('/api/logout', null, { headers });

        dispatch({
            type: LOGOUT_SUCCESS,
          
        })
        localStorage.removeItem("token");

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}