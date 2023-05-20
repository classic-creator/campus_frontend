import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
// import Loader from '../layout/loader/loader'
import TextField from '../application/textField'
import { Formik, Form } from 'formik'
import { getCourseDetails } from '../../action/courseAction'
import { UPDATE_COURSES_RESET } from '../../constants/collegeAdminConstants'
import { clearErrors, updateCourseAction } from '../../action/collegeAdminAction'
import CourseBar from './courseBar'
import { Button } from 'antd'

export const UpdateCourse = () => {

    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()
    const { id } = useParams()

    const { loading, error, course } = useSelector(state => state.UpdateCourse)
    const { course: details } = useSelector(state => state.courseDetails)

    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (course) {
            alert.success('Update Course Successfully')
            dispatch({ type: UPDATE_COURSES_RESET })
            navigate(`/depertment/${details.depertment_id}`)
        }

        dispatch(getCourseDetails(id))

    }, [course,id, alert, dispatch, error,details.depertment_id, navigate])


    const validate = Yup.object({

        courseName: Yup.string().required('required'),
        duration: Yup.number().max(15, 'Must be characters or less').required('required'),
        eligibility: Yup.string().required('required'),
        admission_fees: Yup.number().required('required'),
        application_fees: Yup.number().required('required'),
        seat_capacity: Yup.number().required('required'),

    })



    const initialvalues = {
        courseName: details.courseName ? details.courseName : '',
        duration: details.duration ? details.duration : '',
        eligibility: details.eligibility ? details.eligibility : '',
        admission_fees: details.admission_fees ? details.admission_fees : '',
        application_fees: details.application_fees ? details.application_fees : '',
        seat_capacity: details.seat_capacity ? details.seat_capacity : '',

    }

    return (

        <Fragment>
            <CourseBar course={details} id={id}  header={'Payment Details'} />
            {/* {
                loading ? <Loader /> : <Fragment> */}

                    <Formik
                        enableReinitialize={true}
                        initialValues={initialvalues}
                        validationSchema={validate}
                        // onSubmit={values => { console.log(values) }}
                        onSubmit={values => { dispatch(updateCourseAction({ values, id })) }}

                    >
                        {Formik => (
                            <div>


                                <div className='applyFor '>
                                    <Form className='applyForm registerClg'>
                                        <div className='but'>
                                            <h3>Update Course</h3>
                                        </div>

                                        <TextField label='Course Name' name='courseName' type='text' />
                                        <TextField label='Duration' name='duration' type='text' />
                                        <TextField label='Eligibility' name='eligibility' type='text' />
                                        <TextField label='Seat Capacity' name='seat_capacity' type='number' />
                                        <TextField label='Admission_fees' name='admission_fees' type='number' />
                                        <TextField label='Application_fees' name='application_fees' type='number' />




                                        <div className='but'>
                                         {loading? <Button loading={loading}></Button> :   <button type='submit' className='btn '>Update</button>}
                                        </div>


                                    </Form>
                                </div>
                            </div>
                        )}


                    </Formik>

                {/* </Fragment>
            } */}
        </Fragment>

    )
}
export default UpdateCourse