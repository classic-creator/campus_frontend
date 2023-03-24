

import { clearErrors } from "../action/userAction";
import {

  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,

  LOGOUT_SUCCESS,
  LOGOUT_FAIL,

  CLEAR_ERRORS,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_RESET,

  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../constants/userConstants";

const initialState = {
  token: localStorage.getItem('token') || null,
  error: null,
};
export const userReducer = ((state = { user: {},initialState}, action) => {

  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
      case LOAD_USER_REQUEST:

      return {
        loading: true,
        isAuthenticated: false

      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
      case LOAD_USER_SUCCESS:
        
       
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token:action.payload.token

      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null
      }
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:

      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: action.payload,
      };

      case LOAD_USER_FAIL: 
      return{
        
        loading:false,
        isAuthenticated:false,
        user:null,
        error:action.payload
      }
      case LOGOUT_FAIL : 
      return{
        ...state,
        loading:false,
        error:action.payload
      }
    case CLEAR_ERRORS:

      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }

})


export const profileReducer=((state={},action)=>{

  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
          return{
     ...state,
      loading:true
     };
  
    case CHANGE_PASSWORD_SUCCESS:
     return{

      ...state,
      loading:false,
      isUpdated:action.payload

     };
  
    case CHANGE_PASSWORD_FAIL: 
     return{

      ...state,
      loading:false,
      error:action.payload

     };
    case CHANGE_PASSWORD_RESET:    
     return{

      ...state,
      loading:false,
     isUpdated:false

     };

     case clearErrors:
      return{
        ...state,
        error:null
      }
  
    default:
     return state;
  }


})
export const ForgetPasswordReducer=((state={},action)=>{

  switch (action.type) {
    case FORGET_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
      
          return{
     ...state,
      loading:true,
      error:null
     };
  
    case FORGET_PASSWORD_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
     return{

      ...state,
      loading:false,
      message:action.payload.message

     };
  
    case FORGET_PASSWORD_FAIL: 
    case RESET_PASSWORD_FAIL: 
     return{

      ...state,
      loading:false,
      error:action.payload

     };
  
     case clearErrors:
      return{
        ...state,
        error:null
      }
  
    default:
     return state;
  }


})