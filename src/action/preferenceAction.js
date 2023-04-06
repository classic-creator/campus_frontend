import {
    PREFERENCE_REGISTER_REQUEST,
    PREFERENCE_REGISTER_SUCCESS,
    PREFERENCE_REGISTER_FAIL,
    CLEAR_ERRORS,
    GET_PREFERENCE_REQUEST,
    GET_PREFERENCE_SUCCESS,
    GET_PREFERENCE_FAIL,
    UPDATE_PREFERENCE_REQUEST,
    UPDATE_PREFERENCE_SUCCESS,
    UPDATE_PREFERENCE_FAIL,

} from "../constants/preferenceConstants"

import axios from "axios"

export const registerPreferenceAction=(preferenceData)=>async(dispatch)=>{

    try {
        const token=localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type: PREFERENCE_REGISTER_REQUEST })

        const { data } = await axios.post(
            "/api/add/preference",
            preferenceData,
            config
        )

       
        dispatch({

            type: PREFERENCE_REGISTER_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PREFERENCE_REGISTER_FAIL,
            payload: error.response.data.message
        })
    }

}

//get preferences
export const getPreferences=()=>async(dispatch)=>{

    try {
        const token=localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        dispatch({ type:  GET_PREFERENCE_REQUEST })

        const { data } = await axios.get(
            "/api/get/preference",
           
            config
        )

       
        dispatch({

            type:  GET_PREFERENCE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: GET_PREFERENCE_FAIL,
            payload: error.response.data.message
        })
    }

}

//update preferences

export const updatePreference=(preferenceData)=>async(dispatch)=>{

    try {
        const token=localStorage.getItem('token')

        const config = {
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
      
        dispatch({ type:  UPDATE_PREFERENCE_REQUEST })

        const { data } = await axios.post(
            "/api/update/preference", preferenceData,config
        )
     
        dispatch({

            type:  UPDATE_PREFERENCE_SUCCESS,
            payload: data.message
        })


    } catch (error) {
        dispatch({
            type: UPDATE_PREFERENCE_FAIL,
            payload: error.response.data.message
        })
    }

}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
