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
   GET_ADDRESS_FAIL,
   REGISTER_EDUCATION_REQUEST,
   REGISTER_EDUCATION_SUCCESS,
   REGISTER_EDUCATION_FAIL,
   GET_EDUCATION_REQUEST,
   GET_EDUCATION_SUCCESS,
   GET_EDUCATION_FAIL,
   APPLY_ADMISSION_REQUEST,
   APPLY_ADMISSION_SUCCESS,
   APPLY_ADMISSION_FAIL,
   MY_APPLICATION_REQUEST,
   MY_APPLICATION_SUCCESS,
   MY_APPLICATION_FAIL,
   COURSE_APPLICATION_REQUEST,
   COURSE_APPLICATION_SUCCESS,
   COURSE_APPLICATION_FAIL,
   APPLICATION_UPDATE_REQUEST,
   APPLICATION_UPDATE_SUCCESS,
   APPLICATION_UPDATE_FAIL,

   
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

// register student educational details


export const AddStudentEducation = (studentData) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: REGISTER_EDUCATION_REQUEST })

      const { data } = await axios.post(`/api/register/educationalDetails`, studentData, config)

      dispatch({
         type: REGISTER_EDUCATION_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: REGISTER_EDUCATION_FAIL,
         payload: error.response.data.message
      })
   }
}
//get educational details
export const GetStudentEducation = () => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: GET_EDUCATION_REQUEST })

      const { data } = await axios.get(`/api/get/educationalDetails`, config)
      
      dispatch({
         type: GET_EDUCATION_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: GET_EDUCATION_FAIL,
         payload: error.response.data.message
      })
   }
}

//APPLY aDMISSION

export const applyAdmissionAction = (id) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: APPLY_ADMISSION_REQUEST })

      const { data } = await axios.post(`/api/apply/course/${id}`,null, config)

      dispatch({
         type: APPLY_ADMISSION_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: APPLY_ADMISSION_FAIL,
         payload: error.response.data.message
      })
   }
}


//GET APLICATIONS FOR USER

export const GetMyApplications = () => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: MY_APPLICATION_REQUEST })

      const { data } = await axios.get(`/api/get/applications`, config)
      
      dispatch({
         type: MY_APPLICATION_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: MY_APPLICATION_FAIL,
         payload: error.response.data.message
      })
   }
}

//get  course application

export const GetCourseApplications = (id) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: COURSE_APPLICATION_REQUEST })

      const { data } = await axios.get(`/api/course/applications/${id}`, config)
      
      dispatch({
         type: COURSE_APPLICATION_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: COURSE_APPLICATION_FAIL,
         payload: error.response.data.message
      })
   }
}

//UPDATE ADMISSION STATUS

export const UpdateApplicationStatus = ({myForm,id}) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: APPLICATION_UPDATE_REQUEST })

      const { data } = await axios.put(`/api/application/update/${id}`,myForm, config)
      
      dispatch({
         type: APPLICATION_UPDATE_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: APPLICATION_UPDATE_FAIL,
         payload: error.response.data.message
      })
   }
}

export const clearErrors = () => async (dispatch) => {
   dispatch({
      type: CLEAR_ERRORS
   })
}