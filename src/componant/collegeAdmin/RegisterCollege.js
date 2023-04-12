import { Form, Formik } from 'formik'
import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import TextField from '../application/textField'
import * as Yup from 'yup'
import './registercollege.css'
import {  clearErrors, collegeRegisterAction } from '../../action/collegeAdminAction'
import Loader from "../layout/loader/loader"

const RegisterCollege = () => {

    

    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate=useNavigate()
    const location=useLocation()
    
  
    const { error, message, loading } = useSelector(state => state.college)
    const {user}=useSelector(state=>state.user)

    const redirect = location.search ? location.search.split("=")[1] : "/college/manager/profile";
   
    // 
      useEffect(() => {
                if(message)
                {
                    alert.success("College Register Success")
                    navigate('/desbord/manager/profile')
                }
                if(error){
                    alert.error(error)
                    dispatch(clearErrors())
                }
                if(user.type==='manager'){
                  navigate(redirect)
                }
       
      }, [error,navigate, dispatch, message,user.type,redirect, alert])


    const validate = Yup.object({

        collegeName: Yup.string().required('required'),
        district: Yup.string().max(15, 'Must be characters or less'),
        email: Yup.string().email('email is invalid').required('required'),
        description: Yup.string().required('required'),
        rating: Yup.string().max(15, 'Must be characters or less').required('required'),
        address: Yup.string().max(15, 'Must be characters or less').required('required'),
      
       
      })
    
    
  return (
   <Fragment>
    {
        loading ? <Loader/> : <Fragment>
        <div>
        <Formik
           
                initialValues={{
                    collegeName:'',
                    district:'',
                    email:'',
                    description:'',
                    rating:'',
                    address:''
    
    
                
                }}
                validationSchema={validate}
                onSubmit={values => { dispatch(collegeRegisterAction(values)) }}
              
              >
                {Formik => (
                  <div>
                   
        
                    <div className='applyFor '>
                      <Form className='applyForm registerClg'>
                      <div className='but'>
                       <h3>Register College </h3>
                        </div>  
    
                        <TextField label='College Name' name='collegeName' type='text' />
                        <TextField label='Email' name='email' type='email'     />
                        <TextField label='Address' name='address' type='text'     />
                        <TextField label='District' name='district' type='text'     />
                        <TextField label='Description' name='description' type='text'     />
                        <TextField label='rating' name='rating' type='text'     />
                   
                      
                        
                       <div className='but'>
                        <button type='submit' className='btn '>Register</button>
                       </div>
                      
                        
                      </Form>
                    </div>
                  </div>
                )}
        
              </Formik>
        </div>
       </Fragment>
    }
   </Fragment>
  )
}

export default RegisterCollege