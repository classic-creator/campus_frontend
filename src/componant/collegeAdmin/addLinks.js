import React, { Fragment, useEffect } from 'react'

import { Formik,Form } from 'formik'
import TextField from '../application/textField'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { AddnoticsAction, clearErrors} from '../../action/collegeAdminAction'
import {useAlert} from 'react-alert'



import { Button } from 'antd'
import { ADD_NOTIC_RESET } from '../../constants/collegeAdminConstants'


const AddLinks = () => {

    const {id}=useParams();
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const alert =useAlert()

    const {message,loading,error}=useSelector(state=>state.notic)

    const validate = Yup.object({
        title: Yup.string().required('required'),   
        link: Yup.string().required('required'),   
        })


        useEffect(() => {
         
            if(error){
                alert.error(error)
                dispatch(clearErrors)

            }
            if(message){
                alert.success('Add links successfully')
                dispatch({type:ADD_NOTIC_RESET})
                navigate(`/links`)

            }
        }, [error,dispatch,message,alert,navigate])
        

  return (
   <Fragment>
   
           
                   
           <Formik
          
          initialValues={{
           title:'',
           link:'',
          
          }}
          validationSchema={validate}
         
          onSubmit={values => { dispatch(AddnoticsAction(values)) }}
          
        >
          {Formik => (
            <div>
             
  
              <div className='applyFor '>
                
                <Form className='applyForm registerClg'>
                <div className='but'>
                 <h3>Add links</h3>
                  </div>  

                  <TextField label='Title' name='title' type='text'/>
                  <TextField label='Links' name='link' type='text'/>
                  
            
                
                  
                 <div className='but'>
                 {loading?<Button loading={loading}></Button>:   <button type='submit'   className='btn '>Add</button>}
                 </div>
                
                  
                </Form>
              </div>
            </div>
          )}
  
  
        </Formik>


           
 
   </Fragment>
  )
}

export default AddLinks