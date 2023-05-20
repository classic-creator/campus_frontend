import React, { Fragment, useEffect } from 'react'
import { clearErrors, updateUserAction } from '../../action/adminAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useNavigate, useParams } from 'react-router-dom'
import { UPDATE_USER_RESET } from '../../constants/adminConstants'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
// import TextField from '../application/textField'
import SelectField from '../application/SelectField'
import { Button } from 'antd'
import AdminSidebar from './adminSidebar'

const UpdateUser = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()
    const { id } = useParams()

    const { loading, error, isUpdated  } = useSelector(state => state.updateUser)


    const typeOption = [
        { value: '', label: 'Select' },
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
    ]
    const validate = Yup.object({

        // id: Yup.string().required('required'),
        // name: Yup.number().required('required'),
        type: Yup.string().required('required'),


    })



    const initialvalues = {
        // id: '',
        // name: '',
        type: '',


    }
    // const initialvalues = {
    //     id: details.id ? details.id : '',
    //     name: details.name ? details.name : '',
    //     type: details.type ? details.type : '',


    // }


    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            alert.success('Update user Successfully')
            dispatch({ type: UPDATE_USER_RESET })
            navigate(`/admin/users`)
        }

        // dispatch(getCourseDetails(id))

    }, [alert, dispatch, error,isUpdated, navigate])
    return (

        <Fragment>

          
            <div className="depertmentDeash">
                <AdminSidebar />
                <div className="dashboard">
                    <div className='headdept '>
                        <h2> Update User</h2>

                    </div>
                    <Formik
                        enableReinitialize={true}
                        initialValues={initialvalues}
                        validationSchema={validate}
                        // onSubmit={values => { console.log(values) }}
                        onSubmit={values => { dispatch(updateUserAction({ id, values })) }}

                    >
                        {Formik => (
                            <div>


                                <div className='applyFor '>
                                    <Form className='applyForm registerClg'>
                                        <div className='but'>
                                            <h3>Update User</h3>
                                        </div>

                                        {/* <TextField label='User Id' name='id' type='text' readOnly />
                                        <TextField label='User Name' name='name' type='text' readOnly /> */}
                                        <SelectField label="User Role" name="type" options={typeOption} />




                                        <div className='but'>
                                            {loading ? <Button loading={loading}></Button> : <button type='submit' className='btn '>Update</button>}
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

export default UpdateUser