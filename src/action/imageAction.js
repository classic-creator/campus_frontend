import axios from 'axios'
import { ADD_COURSECOVER_FAIL, ADD_COURSECOVER_REQUEST, ADD_COURSECOVER_SUCCESS, CLEAR_ERRORS, COLLEGELOGO_UPLOAD_FAIL, COLLEGELOGO_UPLOAD_REQUEST, COLLEGELOGO_UPLOAD_SUCCESS, COLLEGE_COVERIMG_UPLOAD_FAIL, COLLEGE_COVERIMG_UPLOAD_REQUEST, COLLEGE_COVERIMG_UPLOAD_SUCCESS, COLLEGE_OTHERIMG_UPLOAD_FAIL, COLLEGE_OTHERIMG_UPLOAD_REQUEST, COLLEGE_OTHERIMG_UPLOAD_SUCCESS, LOGO_UPLOAD_FAIL, LOGO_UPLOAD_REQUEST, LOGO_UPLOAD_SUCCESS, OTHER_COURSEPHOTO_FAIL, OTHER_COURSEPHOTO_REQUEST, OTHER_COURSEPHOTO_SUCCESS } from '../constants/imageConstants';



export const CourseCoverimgAction = (formData) => async (dispatch) => {

    try {
       const token = localStorage.getItem('token')
    
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
           "Content-Type": "multipart/form-data",
           "Authorization": `Bearer ${token}`
         },
         
      };
       dispatch({ type: ADD_COURSECOVER_REQUEST })
 
       const { data } = await axios.post(`/api/image/upload/cover`,formData, config)
       
       dispatch({
          type: ADD_COURSECOVER_SUCCESS,
          payload: data
       })
    } catch (error) {
       dispatch({
          type: ADD_COURSECOVER_FAIL,
          payload: error.response.data.message
       })
    }
 }
 
export const CourseLogoimgAction = (formData) => async (dispatch) => {

    try {
       const token = localStorage.getItem('token')
    
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
           "Content-Type": "multipart/form-data",
           "Authorization": `Bearer ${token}`
         },
         
      };
       dispatch({ type: LOGO_UPLOAD_REQUEST })
 
       const { data } = await axios.post(`/api/image/upload/logo`,formData, config)
       
       dispatch({
          type: LOGO_UPLOAD_SUCCESS,
          payload: data
       })
    } catch (error) {
       dispatch({
          type: LOGO_UPLOAD_FAIL,
          payload: error.response.data.message
       })
    }
 }
 

export const CourseOtherimgAction = (formData) => async (dispatch) => {

    try {
       const token = localStorage.getItem('token')
    
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
           "Content-Type": "multipart/form-data",
           "Authorization": `Bearer ${token}`
         },
         
      };
       dispatch({ type: OTHER_COURSEPHOTO_REQUEST })
 
       const { data } = await axios.post(`/api/image/upload/other`,formData, config)
       
       dispatch({
          type: OTHER_COURSEPHOTO_SUCCESS,
          payload: data
       })
    } catch (error) {
       dispatch({
          type: OTHER_COURSEPHOTO_FAIL,
          payload: error.response.data.message
       })
    }
 }

 //college imagesss

 
export const CollegeLogoimgAction = (formData) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
   
     const config = {
        baseURL: process.env.REACT_APP_API_BASE_URL,
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        },
        
     };
      dispatch({ type: COLLEGELOGO_UPLOAD_REQUEST })

      const { data } = await axios.post(`/api/image/college/logo`,formData, config)
      
      dispatch({
         type: COLLEGELOGO_UPLOAD_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: COLLEGELOGO_UPLOAD_FAIL,
         payload: error.response.data.message
      })
   }
}
 
export const CollegeOtherimgAction = (formData) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
   
     const config = {
        baseURL: process.env.REACT_APP_API_BASE_URL,
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        },
        
     };
      dispatch({ type: COLLEGE_OTHERIMG_UPLOAD_REQUEST })

      const { data } = await axios.post(`/api/image/college/other`,formData, config)
      
      dispatch({
         type: COLLEGE_OTHERIMG_UPLOAD_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: COLLEGE_OTHERIMG_UPLOAD_FAIL,
         payload: error.response.data.message
      })
   }
}
 
export const CollegeCoverimgAction = (formData) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
   
     const config = {
        baseURL: process.env.REACT_APP_API_BASE_URL,
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        },
        
     };
      dispatch({ type: COLLEGE_COVERIMG_UPLOAD_REQUEST })

      const { data } = await axios.post(`/api/image/college/cover`,formData, config)
      
      dispatch({
         type: COLLEGE_COVERIMG_UPLOAD_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: COLLEGE_COVERIMG_UPLOAD_FAIL,
         payload: error.response.data.message
      })
   }
}


 export const clearErrors = () => async (dispatch) => {
   dispatch({
       type: CLEAR_ERRORS
   })
}