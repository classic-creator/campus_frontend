import React, { Fragment, useEffect } from 'react'

import { Formik,Form } from 'formik'
import TextField from '../application/textField'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { clearErrors, createCourseAction } from '../../action/collegeAdminAction'
import {useAlert} from 'react-alert'
import Loader from '../layout/loader/loader'
import { CREATE_COURSE_RESET } from '../../constants/collegeAdminConstants'


const AddCourse = () => {

    const {id}=useParams();
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const alert =useAlert()

    const {course,loading,error}=useSelector(state=>state.deptAdCourse)

    const validate = Yup.object({

        courseName: Yup.string().required('required'),
        duration: Yup.string().max(15, 'Must be characters or less').required('required'),
        eligibility: Yup.string().required('required'),
        fees: Yup.string().required('required'),   
        })


        useEffect(() => {
         
            if(error){
                alert.error(error)
                dispatch(clearErrors)

            }
            if(course){
                alert.success('Register course successfully')
                dispatch({type:CREATE_COURSE_RESET})
                navigate(`/depertment/${id}`)

            }
        }, [error,dispatch,alert,navigate,course,id])
        

  return (
   <Fragment>
    {loading ? <Loader/> :  <Fragment>
           
                   
           <Formik
          
          initialValues={{
           courseName:'',
           duration:'',
           eligibility:'',
           fees:'',
          }}
          validationSchema={validate}
          // onSubmit={values => { console.log(values) }}
          onSubmit={values => { dispatch(createCourseAction({values,id})) }}
        
        >
          {Formik => (
            <div>
             
  
              <div className='applyFor '>
                <Form className='applyForm registerClg'>
                <div className='but'>
                 <h3>Register Course</h3>
                  </div>  

                  <TextField label='Course Name' name='courseName' type='text' />
                  <TextField label='Duration' name='duration' type='text'/>
                  <TextField label='Eligibility' name='eligibility' type='text'/>
                  <TextField label='Seat Capacity' name='seat_capacity' type='number'/>

                  <TextField label='fees' name='fees' type='text'/>
                  
             {/* <textarea type='text' name='eligibility'/> */}
                
                  
                 <div className='but'>
                  <button type='submit' className='btn '>Register</button>
                 </div>
                
                  
                </Form>
              </div>
            </div>
          )}
  
  
        </Formik>


           
   </Fragment>}
   </Fragment>
  )
}

export default AddCourse