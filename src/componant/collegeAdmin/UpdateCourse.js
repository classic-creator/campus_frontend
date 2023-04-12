import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import Loader from '../layout/loader/loader'
import TextField from '../application/textField'
import { Formik, Form } from 'formik'
import { getCourseDetails } from '../../action/courseAction'
import { UPDATE_COURSES_RESET } from '../../constants/collegeAdminConstants'
import { clearErrors, updateCourseAction } from '../../action/collegeAdminAction'

export const UpdateCourse = () => {

    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()
    const {id}=useParams()

    const {loading,error,course}=useSelector(state=>state.UpdateCourse)
    const {course:details}=useSelector(state=>state.courseDetails)

      useEffect(() => {

        if(error){
          alert.error(error)
          dispatch(clearErrors())
        }
       if(course){
        alert.success('Update Course Successfully')
        dispatch({type:UPDATE_COURSES_RESET})
      }

      dispatch(getCourseDetails(id))

      }, [course,alert,dispatch,error,navigate])


    const validate = Yup.object({

        courseName: Yup.string().required('required'),
        duration: Yup.string().max(15, 'Must be characters or less').required('required'),
        eligibility: Yup.string().required('required'),
        fees: Yup.string().required('required'),   


    })


   
    const initialvalues={
        courseName: details.courseName ? details.courseName : '',
        duration: details.duration ? details.duration : '',
        eligibility: details.eligibility ? details.eligibility : '',
        fees: details.fees ? details.fees : '',
       
    }

    return (

        <Fragment>
            {
              loading ? <Loader/> :  <Fragment>

            <Formik
                  enableReinitialize={true}
                initialValues={initialvalues}
                validationSchema={validate}
            // onSubmit={values => { console.log(values) }}
              onSubmit={values => { dispatch(updateCourseAction({values,id})) }}

            >
                {Formik => (
                    <div>


                        <div className='applyFor '>
                            <Form className='applyForm registerClg'>
                                <div className='but'>
                                    <h3>Register Course</h3>
                                </div>

                                <TextField label='Course Name' name='courseName' type='text' />
                                <TextField label='Duration' name='duration' type='text' />
                                <TextField label='Eligibility' name='eligibility' type='text' />
                                <TextField label='fees' name='fees' type='text' />




                                <div className='but'>
                                    <button type='submit' className='btn '>Update</button>
                                </div>


                            </Form>
                        </div>
                    </div>
                )}


            </Formik>

        </Fragment>
            }
          </Fragment>

    )
}
export default UpdateCourse