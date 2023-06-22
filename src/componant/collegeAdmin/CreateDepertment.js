import React, { Fragment, useEffect } from 'react'
import {  Formik ,Form} from 'formik'
import TextField from '../application/textField'
import * as Yup from 'yup'
import { clearErrors, createDepertmentAction } from '../../action/collegeAdminAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { CREATE_DEPERTMENT_RESET } from '../../constants/collegeAdminConstants'
import { useNavigate } from 'react-router-dom'
import Loader from '../layout/loader/loader'
import HeaderTypography from '../layout/header/headerTypography'
import Sidebar from './sidebar'

const CreateDepertment = () => {

  const dispatch=useDispatch()
  const alert=useAlert()
  const navigate=useNavigate()
  const {loading,depertment,error}=useSelector(state=>state.depertment)

useEffect(() => {

  if(error){
    alert.error(error)
    dispatch(clearErrors())
    
  }
 if(depertment){
  alert.success('creat Depertment Successfully')
  dispatch({type:CREATE_DEPERTMENT_RESET})
  navigate('/depertments')
}

}, [depertment,alert,dispatch,error,navigate])


    const validate = Yup.object({

      depertment_name: Yup.string().required('required'),
        instructor: Yup.string().max(15, 'Must be characters or less').required('required'),
        depertment_email: Yup.string().email('email is invalid').required('required'),
        description: Yup.string().required('required'),
      
      
       
      })

  return (
 
    <Fragment>
    <HeaderTypography header={'Register Depertments'} mb={0} mt={0} />
    <div className="depertmentDeash">
    <div className='sidebardiv'>
       <Sidebar />
      </div>
      <div className="dashboard mt-3">
    
            <Formik
               
                    initialValues={{
                      depertment_name:'',
                      depertment_email:'',
                      instructor:'',
                      description:'',
                    }}
                    validationSchema={validate}
                    // onSubmit={values => { console.log(values) }}
                    onSubmit={values => { dispatch(createDepertmentAction(values)) }}
                  
                  >
                    {Formik => (
                      <div>
                       
            
                        <div className='applyFor '>
                          <Form className='applyForm registerClg'>
                          <div className='but'>
                           <h3>Register College </h3>
                            </div>  
        
                            <TextField label='Depertment Name' name='depertment_name' type='text' />
                            <TextField label='Email' name='depertment_email' type='email'/>
                            <TextField label='Instructor' name='instructor' type='text'/>
                            <TextField label='Description' name='description' type='text'/>
                            
                       
                          
                            
                           <div className='but'>
                            <button type='submit' className='btn '>Register</button>
                           </div>
                          
                            
                          </Form>
                        </div>
                      </div>
                    )}
            
            
                  </Formik>
                  </div>
                  </div>
          
          
        </Fragment>
 
  )
}

export default CreateDepertment