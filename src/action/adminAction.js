
import axios from "axios"
import { ADMIN_COLLEGE_DETAILS_FAIL, ADMIN_COLLEGE_DETAILS_REQUEST, ADMIN_COLLEGE_DETAILS_SUCCESS, CLEAR_ERRORS, COLLEGE_APPROVEL_FAIL, COLLEGE_APPROVEL_REQUEST, COLLEGE_APPROVEL_SUCCESS, GET_ALLCOLLEGES_FAIL, GET_ALLCOLLEGES_REQUEST, GET_ALLCOLLEGES_SUCCESS, GET_ALLUSER_FAIL, GET_ALLUSER_REQUEST, GET_ALLUSER_SUCCESS, PANDING_APPROVEL_FAIL, PANDING_APPROVEL_REQUEST, PANDING_APPROVEL_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../constants/adminConstants";


//get panding APPROVEL REQUET COLLEGES 

export const ApprovelCollegeAction = () => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: PANDING_APPROVEL_REQUEST })

      const { data } = await axios.get(`/api/admin/approve/colleges`, config)

      dispatch({
         type: PANDING_APPROVEL_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: PANDING_APPROVEL_FAIL,
         payload: error.response.data.message
      })
   }
}
//register college approve



export const ApproveCollegeRegisterAction = (datas) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: COLLEGE_APPROVEL_REQUEST })

      const { data } = await axios.post(`/api/admin/colleges/register`,datas, config)

      dispatch({
         type: COLLEGE_APPROVEL_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: COLLEGE_APPROVEL_FAIL,
         payload: error.response.data.message
      })
   }
}


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


//update user role
export const updateUserAction = ({id,values}) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: UPDATE_USER_REQUEST })

      const { data } = await axios.put(`/api/admin/users/${id}`,values, config)

      dispatch({
         type: UPDATE_USER_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: UPDATE_USER_FAIL,
         payload: error.response.data.message
      })
   }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
       type:CLEAR_ERRORS
    })
 }