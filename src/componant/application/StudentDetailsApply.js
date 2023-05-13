import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from './textField'
import { GetStudentPersonalData, StudentPersonalData, clearErrors } from '../../action/applyAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../layout/loader/loader'
import { useNavigate, useParams } from 'react-router-dom'
import { REGISTER_PERSONALDATA_RESET } from '../../constants/applyConstants'
import CheckoutSteps from './checkOutStep'
import { Button } from 'antd'


const StudentDetailsApply = () => {


  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()
  const { id } = useParams()

  const { error, message, loading } = useSelector(state => state.applyForm)
  const { studentPersonalData ,loading:detailsloading} = useSelector(state => state.studentDetails)

  const initialvalue = {
    first_name: studentPersonalData.first_name ? studentPersonalData.first_name : '',
    middle_name: studentPersonalData.middle_name ? studentPersonalData.middle_name : '',
    last_name: studentPersonalData.last_name ? studentPersonalData.last_name : '',
    email: studentPersonalData.email ? studentPersonalData.email : '',
    father_name: studentPersonalData.father_name ? studentPersonalData.father_name : '',
    mother_name: studentPersonalData.mother_name ? studentPersonalData.mother_name : '',
    dob: studentPersonalData.dob ? studentPersonalData.dob : '',
    phon_no: studentPersonalData.phon_no ? studentPersonalData.phon_no : '',
    identification: studentPersonalData.identification ? studentPersonalData.identification : '',
    identification_no: studentPersonalData.identification_no ? studentPersonalData.identification_no : '',
    qualification: studentPersonalData.qualification ? studentPersonalData.qualification : '',
    mark_obtain_lastExam: studentPersonalData.mark_obtain_lastExam ? studentPersonalData.mark_obtain_lastExam : '',
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    // Check if form values have changed from initial values
    const hasChanged = JSON.stringify(values) !== JSON.stringify(initialvalue);

    if (hasChanged) {
      // Make API call to save data to database
      dispatch(StudentPersonalData(values));
      
    }
    else {

      setSubmitting(false);
      alert.success('Success')
      navigate(`/apply/address/${id}`)
    }
  };


  useEffect(() => {

    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (message) {
      alert.success(message)
      navigate(`/apply/address/${id}`)
      dispatch({type:REGISTER_PERSONALDATA_RESET})
    }

    dispatch(GetStudentPersonalData())
  }, [error, navigate, dispatch, message, id, alert])


  const validate = Yup.object({
    first_name: Yup.string().max(15, 'Must be characters or less').required('required'),
    middle_name: Yup.string().max(15, 'Must be characters or less'),
    last_name: Yup.string().max(15, 'Must be characters or less').required('required'),
    email: Yup.string().email('email is invalid').required('required'),
    father_name: Yup.string().max(15, 'Must be characters or less').required('required'),
    mother_name: Yup.string().max(15, 'Must be characters or less').required('required'),
    dob: Yup.string().required('required'),
    phon_no: Yup.string().required("required").min(10, "too short").max(10, "too long"),
    identification: Yup.string().max(15, 'Must be characters or less').required('required'),
    identification_no: Yup.string().max(15, 'Must be characters or less').required('required'),
    qualification: Yup.string().required('required'),
    mark_obtain_lastExam: Yup.string().required('required'),
  })


  return (
    <Fragment>
      {loading ? <Loader /> :
        <Fragment>
          <CheckoutSteps activeStep={0}/>
          <Formik
            enableReinitialize={true}
            initialValues={initialvalue}
            validationSchema={validate}
            // onSubmit={values => { dispatch(StudentPersonalData(values)) }}
            onSubmit={handleSubmit}
          >
            {Formik => (
              <div>
               {detailsloading? <Button loading={detailsloading}></Button>:null}

                <div className='applyFor  '>
                  <Form className='applyForm applyform '>
                    <TextField label='First Name' name='first_name' type='text' />
                    <TextField label='Middle Name' name='middle_name' type='text' />
                    <TextField label='Last Name' name='last_name' type='text' />
                    <TextField label='Email' name='email' type='email' />
                    <TextField label='Father Name' name='father_name' type='text' />
                    <TextField label='Mother Name' name='mother_name' type='text' />
                    <TextField label='Date of Birth' name='dob' type='date' />
                    <TextField label='Phon Number' name='phon_no' type='number' />

                    <TextField label='Identification' name='identification' type='text' />
                    <TextField label='Identification Number' name='identification_no' type='number' />
                    <TextField label='Qualification' name='qualification' type='text' />
                    <TextField label='Mark Obtain LastExam' name='mark_obtain_lastExam' type='number' />
                    <div className='but'>
                  {loading ?<Button loading={loading}></Button>:    <button type='submit' className='btn '>Submit</button>}
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

export default StudentDetailsApply