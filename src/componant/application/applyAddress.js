import React, { Fragment, useEffect } from 'react'
import { Formik,Form } from 'formik'
import TextField from './textField'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useNavigate, useParams } from 'react-router-dom'
import { AddStudentAddress, GetStudentAddress, clearErrors } from '../../action/applyAction'
import * as Yup from 'yup'
import Loader from '../layout/loader/loader'
import { REGISTER_ADDRESS_RESET } from '../../constants/applyConstants'
import CheckoutSteps from './checkOutStep'

const ApplyAddress = () => {



    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate=useNavigate()
    const {id} = useParams()
  
    const { error, message, loading } = useSelector(state => state.applystudentAddress)
    const {studentAddress}=useSelector(state=>state.studentDetails)

    const initialvalue={
        state: studentAddress.state ? studentAddress.state : '',
        district: studentAddress.district ? studentAddress.district : '',
        sub_district: studentAddress.sub_district ? studentAddress.sub_district : '',
        circle_office: studentAddress.circle_office ? studentAddress.circle_office : '',
        police_station: studentAddress.police_station ? studentAddress.police_station : '',
        post_office: studentAddress.post_office ? studentAddress.post_office : '',
        pin_no: studentAddress.pin_no ? studentAddress.pin_no : '',
    }
    const handleSubmit = async (values, { setSubmitting }) => {
       
        const hasChanged = JSON.stringify(values) !== JSON.stringify(initialvalue);
        
        if (hasChanged) {
        
          dispatch(AddStudentAddress(values));
        }
        else{
  
          setSubmitting(false);
          alert.success('Success')
          navigate(`/apply/education/${id}`)
        }
      };
    
      useEffect(() => {

        if (error) {
          alert.error(error)
          dispatch(clearErrors())
        }
        if (message) {
          alert.success(message)
          navigate(`/apply/education/${id}`)
          dispatch({type:REGISTER_ADDRESS_RESET})
        }
    
        dispatch(GetStudentAddress())
      }, [error,navigate, dispatch, message,id, alert])


    const validate = Yup.object({

        state: Yup.string().max(15, 'Must be characters or less').required('required'),
        district: Yup.string().max(15, 'Must be characters or less'),
        sub_district: Yup.string().max(15, 'Must be characters or less').required('required'),
        circle_office: Yup.string().required('required'),
        police_station: Yup.string().max(15, 'Must be characters or less').required('required'),
        post_office: Yup.string().max(15, 'Must be characters or less').required('required'),
        pin_no: Yup.string().max(6, 'Must be characters or less').min(6, 'Must be characters or less').required('required'),
       
      })
    
    
      return (
       <Fragment>
        {loading ? <Loader/> :  
        <Fragment>
          <CheckoutSteps activeStep={1}/>
          <Formik
            enableReinitialize={true}
            initialValues={initialvalue}
            validationSchema={validate}
            // onSubmit={values => { dispatch(StudentPersonalData(values)) }}
            onSubmit={handleSubmit}
          >
            {Formik => (
              <div>
               
    
                <div className='applyFor '>
                  <Form className='applyForm '>
                   

                    <TextField label='State' name='state' type='text' />
                    <TextField label='District' name='district' type='text' />
                    <TextField label='Sub_district' name='sub_district' type='text' />
                    <TextField label='circle_office' name='circle_office' type='text' />
                    <TextField label='police_station' name='police_station' type='text' />
                    <TextField label='post_office' name='post_office' type='text' />
                    <TextField label='pin_no' name='pin_no' type='number' />
                  
                    
                   <div className='but'>
                    <button type='submit' className='btn '>Submit</button>
                   </div>
                  
                    
                  </Form>
                </div>
              </div>
            )}
    
          </Formik>
    
        </Fragment>}
       </Fragment>)
}

export default ApplyAddress