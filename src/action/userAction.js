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
    LOAD_USER_FAIL,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    FORGET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    CHANGE_PROFILE_REQUEST,
    CHANGE_PROFILE_SUCCESS,
    CHANGE_PROFILE_FAIL,
    GET_COUNT_REQUEST,
    GET_COUNT_SUCCESS,
    GET_COUNT_FAIL,
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
        const config = { headers: { "Content-Type":"multipart/form-data" } };
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
//LOAD USER

export const UpdateProfileAction = (formData) => async (dispatch) => {
    try {

        const token=localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "multipart/form-data" ,
                Authorization: `Bearer ${token}`
            }
        };

        dispatch({ type: CHANGE_PROFILE_REQUEST })

        const { data } = await axios.post("/api/Profile/update",formData, config)

        dispatch({
            type: CHANGE_PROFILE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CHANGE_PROFILE_FAIL,
            payload: error.response.data.message
        })
    }
}

//logout user

export const logout = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
      
        dispatch({ type: LOGOUT_REQUEST })


       await axios.post('/api/logout', null, config);

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


//change pasword 

export const updatePassword = (password) => async (dispatch) => {
    try {
        const token=localStorage.getItem('token')
        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: CHANGE_PASSWORD_REQUEST })
      const { data } = await axios.put("/api/changepassword", password, config);
  
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: data.success
      })
  
  
  
    } catch (error) {
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload: error.response.data.message
      })
  
    }}


//forgetPaword 

export const forgetPassword = (email) => async (dispatch) => {
    try {
    
        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: FORGET_PASSWORD_REQUEST })
      const { data } = await axios.post("/api/sent-reset-password-email", email, config);
  
      dispatch({
        type: FORGET_PASSWORD_SUCCESS,
        payload:data
      })
    
    } catch (error) {
      dispatch({
        type: FORGET_PASSWORD_FAIL,
        payload:error.response.data.message
      })
  
    }}

//RESET PASSWORD


export const resetPassword = (password,token) => async (dispatch) => {
    try {
    
        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: RESET_PASSWORD_REQUEST })
      const { data } = await axios.put(`/api/reset-password/${token}`, password,config);
  
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: data
      })
  
  
  
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response.data.message
      })
  
    }}


    //getAll student count and application count

    



export const getCountAction = () => async (dispatch) => {
    try {
    
         const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: GET_COUNT_REQUEST })
      const { data } = await axios.get(`/api/count`,config);
  
      dispatch({
        type: GET_COUNT_SUCCESS,
        payload: data
      })
  
  
  
    } catch (error) {
      dispatch({
        type: GET_COUNT_FAIL,
        payload: error.response.data.message
      })
  
    }}


export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}