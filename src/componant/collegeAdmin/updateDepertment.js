import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
// import Loader from '../layout/loader/loader'
import TextField from '../application/textField'
import { Formik, Form } from 'formik'
import { getCourseDetails } from '../../action/courseAction'
import { UPDATE_COURSES_RESET, UPDATE_DEPERTMENT_RESET } from '../../constants/collegeAdminConstants'
import { UpdateDepertmentAction, clearErrors, getDepertmentDetailsAction, updateCourseAction } from '../../action/collegeAdminAction'
// import CourseBar from './courseBar'
import { Button } from 'antd'
import Sidebar from './sidebar'
import TextArea from '../application/areainput'

export const UpdateDepertment = () => {

    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()
    const { id } = useParams()

    const { loading, error, isUpdated } = useSelector(state => state.updatedepertment)

    const { depertment,loading:detailsLoading } = useSelector(state => state.depertmentDetails)

    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            alert.success('Update Successfully')
            dispatch({ type: UPDATE_DEPERTMENT_RESET })
            // navigate(`/depertment/${details.depertment_id}`)
        }

        dispatch(getDepertmentDetailsAction(id))

    }, [id, alert,isUpdated, dispatch, error])


    const validate = Yup.object({

        depertment_name: Yup.string().required('required'),
        instructor: Yup.string().required('required'),
        description: Yup.string().required('required'),
       
    })



    const initialvalues = {
        depertment_name: depertment.depertment_name ? depertment.depertment_name : '',
        instructor: depertment.instructor ? depertment.instructor : '',
        description: depertment.description ? depertment.description : '',
  

    }

    return (
<Fragment>
    <div className="depertmentDeash">
      <Sidebar />
      <div className="dashboard">
            {/* <CourseBar course={depertment} id={id}  update /> */}
            {/* {
                loading ? <Loader /> : <Fragment> */}


                    <Formik
                        enableReinitialize={true}
                        initialValues={initialvalues}
                        validationSchema={validate}
                        // onSubmit={values => { console.log(values) }}
                        onSubmit={values => { dispatch(UpdateDepertmentAction({ values, id })) }}

                    >
                        {Formik => (
                            <div>
                                { detailsLoading ? <Button loading={detailsLoading}></Button>: null}

                                <div className='applyFor '>
                                    <Form className='applyForm registerClg'>
                                        <div className='but'>
                                            <h3>Update depertment</h3>
                                        </div>

                                        <TextField label='Depertment Name' name='depertment_name' type='text' />
                                        
                                        <TextField label='Instructor' name='instructor' type='text' />
                                      
                                        <TextArea label='Description' name='description' />




                                        <div className='but'>
                                         {loading? <Button loading={loading}></Button> :   <button type='submit' className='btn '>Update</button>}
                                        </div>


                                    </Form>
                                </div>
                            </div>
                        )}


                    </Formik>
</div>
</div>
                {/* </Fragment>
            } */}
        </Fragment>

    )
}
export default UpdateDepertment