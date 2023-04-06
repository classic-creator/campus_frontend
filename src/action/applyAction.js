import {
   REGISTER_PERSONALDATA_REQUEST,
   REGISTER_PERSONALDATA_SUCCESS,
   REGISTER_PERSONALDATA_FAIL,
   GET_PERSONALDATA_REQUEST,
    GET_PERSONALDATA_SUCCESS,
    GET_PERSONALDATA_FAIL,
   CLEAR_ERRORS,
   REGISTER_ADDRESS_REQUEST,
   REGISTER_ADDRESS_SUCCESS,
   REGISTER_ADDRESS_FAIL,
   GET_ADDRESS_REQUEST,
   GET_ADDRESS_SUCCESS,
   GET_ADDRESS_FAIL
} from "../constants/applyConstants";

import axios from "axios"

//register student personal data

export const StudentPersonalData = (studentData) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: REGISTER_PERSONALDATA_REQUEST })

      const { data } = await axios.post(`/api/register/personalDetails`, studentData, config)

      dispatch({
         type: REGISTER_PERSONALDATA_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: REGISTER_PERSONALDATA_FAIL,
         payload: error.response.data.message
      })
   }
}


//get student Personal details

export const GetStudentPersonalData = () => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: GET_PERSONALDATA_REQUEST })

      const { data } = await axios.get(`/api/personalDetails`, config)
      
      dispatch({
         type: GET_PERSONALDATA_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: GET_PERSONALDATA_FAIL,
         payload: error.response.data.message
      })
   }
}


//REGISTER ADDRESS 

export const AddStudentAddress = (studentData) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: REGISTER_ADDRESS_REQUEST })

      const { data } = await axios.post(`/api/register/address`, studentData, config)

      dispatch({
         type: REGISTER_ADDRESS_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: REGISTER_ADDRESS_FAIL,
         payload: error.response.data.message
      })
   }
}
//get student address

export const GetStudentAddress = () => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: GET_ADDRESS_REQUEST })

      const { data } = await axios.get(`/api/get/address`, config)
      
      dispatch({
         type: GET_ADDRESS_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: GET_ADDRESS_FAIL,
         payload: error.response.data.message
      })
   }
}


export const clearErrors = () => async (dispatch) => {
   dispatch({
      type: CLEAR_ERRORS
   })
}