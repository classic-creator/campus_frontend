import axios from "axios";
import { ADD_PAYMENT_FAIL,
    ADD_PAYMENT_REQUEST,
    ADD_PAYMENT_SUCCESS ,
   CLEAR_ERRORS,
    COURSE_PAYMENT_HISTORY_FAIL,
    COURSE_PAYMENT_HISTORY_REQUEST,
    COURSE_PAYMENT_HISTORY_SUCCESS,
    PROCESS_PAYMENT_FAIL,
    PROCESS_PAYMENT_REQUEST,
    PROCESS_PAYMENT_SUCCESS,
    STUDENT_NEW_PAYMENT_FAIL,
    STUDENT_NEW_PAYMENT_REQUEST,
    STUDENT_NEW_PAYMENT_SUCCESS,
    STUDENT_PAYMENT_HISTORY_FAIL,
    STUDENT_PAYMENT_HISTORY_REQUEST,
    STUDENT_PAYMENT_HISTORY_SUCCESS} from "../constants/paymentConsttants";

export const AddnewPaymentAction = ({values,id}) => async (dispatch) => {

    try {
       const token = localStorage.getItem('token')
       const config = {
          baseURL: process.env.REACT_APP_API_BASE_URL,
          headers: {
             "Content-Type": 'application/json',
             Authorization: `Bearer ${token}`
          }
       };
       dispatch({ type: ADD_PAYMENT_REQUEST })
 
       const { data } = await axios.post(`/api/add/payment/${id}`, values, config)
 
       dispatch({
          type: ADD_PAYMENT_SUCCESS,
          payload: data
       })
    } catch (error) {
       dispatch({
          type: ADD_PAYMENT_FAIL,
          payload: error.response.data.message
       })
    }
 }
//get course NEW PAYMENT/ payment history
export const getCoursePaymenthistoryAction = (id) => async (dispatch) => {

    try {
       const token = localStorage.getItem('token')
       const config = {
          baseURL: process.env.REACT_APP_API_BASE_URL,
          headers: {
             "Content-Type": 'application/json',
             Authorization: `Bearer ${token}`
          }
       };
       dispatch({ type: COURSE_PAYMENT_HISTORY_REQUEST })
 
       const { data } = await axios.get(`/api/get/payment/${id}`,  config)
 
       dispatch({
          type: COURSE_PAYMENT_HISTORY_SUCCESS,
          payload: data
       })
    } catch (error) {
       dispatch({
          type: COURSE_PAYMENT_HISTORY_FAIL,
          payload: error.response.data.message
       })
    }
 }
//get student new payment 
export const getStudentNewPaymentAction = (id) => async (dispatch) => {

    try {
       const token = localStorage.getItem('token')
       const config = {
          baseURL: process.env.REACT_APP_API_BASE_URL,
          headers: {
             "Content-Type": 'application/json',
             Authorization: `Bearer ${token}`
          }
       };
       dispatch({ type: STUDENT_NEW_PAYMENT_REQUEST })
 
       const { data } = await axios.get(`/api/student/payment/${id}`,  config)
 
       dispatch({
          type: STUDENT_NEW_PAYMENT_SUCCESS,
          payload: data
       })
    } catch (error) {
       dispatch({
          type: STUDENT_NEW_PAYMENT_FAIL,
          payload: error.response.data.message
       })
    }
 }

 // process payment
 
export const processPaymentAction = (values) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: PROCESS_PAYMENT_REQUEST })

      const { data } = await axios.post(`/api/process/payment/${values.id}`, values, config)

      dispatch({
         type: PROCESS_PAYMENT_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: PROCESS_PAYMENT_FAIL,
         payload: error.response.data.message
      })
   }
}


//get student  payment history
export const getStudentPayHistory = (id) => async (dispatch) => {

   try {
      const token = localStorage.getItem('token')
      const config = {
         baseURL: process.env.REACT_APP_API_BASE_URL,
         headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
         }
      };
      dispatch({ type: STUDENT_PAYMENT_HISTORY_REQUEST })

      const { data } = await axios.get(`/api/payment/history/${id}`,  config)

      dispatch({
         type: STUDENT_PAYMENT_HISTORY_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: STUDENT_PAYMENT_HISTORY_FAIL,
         payload: error.response.data.message
      })
   }
}
 export const clearErrors = () => async (dispatch) => {
   dispatch({
       type: CLEAR_ERRORS
   })
}