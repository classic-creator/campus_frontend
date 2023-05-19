
import axios from "axios"
import { ADMIN_COLLEGE_DETAILS_FAIL, ADMIN_COLLEGE_DETAILS_REQUEST, ADMIN_COLLEGE_DETAILS_SUCCESS, CLEAR_ERRORS, GET_ALLCOLLEGES_FAIL, GET_ALLCOLLEGES_REQUEST, GET_ALLCOLLEGES_SUCCESS, GET_ALLUSER_FAIL, GET_ALLUSER_REQUEST, GET_ALLUSER_SUCCESS } from "../constants/adminConstants";

//register student personal data

export const getAlluserAction = () => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: GET_ALLUSER_REQUEST })

      const { data } = await axios.get(`/api/admin/users`, config)

      dispatch({
         type: GET_ALLUSER_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: GET_ALLUSER_FAIL,
         payload: error.response.data.message
      })
   }
}

//get all college action
export const getAllcollegesAction = () => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: GET_ALLCOLLEGES_REQUEST })

      const { data } = await axios.get(`/api/admin/colleges`, config)

      dispatch({
         type: GET_ALLCOLLEGES_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: GET_ALLCOLLEGES_FAIL,
         payload: error.response.data.message
      })
   }
}
//get all college action
export const adminCollegeDetailsAction = (id) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: ADMIN_COLLEGE_DETAILS_REQUEST })

      const { data } = await axios.get(`/api/admin/colleges/${id}`, config)

      dispatch({
         type: ADMIN_COLLEGE_DETAILS_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: ADMIN_COLLEGE_DETAILS_FAIL,
         payload: error.response.data.message
      })
   }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
       type:CLEAR_ERRORS
    })
 }