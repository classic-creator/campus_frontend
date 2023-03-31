import {
    PREFERENCE_REGISTER_REQUEST,
    PREFERENCE_REGISTER_SUCCESS,
    PREFERENCE_REGISTER_FAIL,
    CLEAR_ERRORS,

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

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
