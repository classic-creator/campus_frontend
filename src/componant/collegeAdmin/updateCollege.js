import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import Loader from '../layout/loader/loader'
import TextField from '../application/textField'
import { Formik, Form } from 'formik'
import { getCourseDetails } from '../../action/courseAction'
import { UPDATE_COLLEGE_RESET, UPDATE_COURSES_RESET } from '../../constants/collegeAdminConstants'
import { clearErrors, collegeUpdateAction, myCollegeAction, updateCourseAction } from '../../action/collegeAdminAction'
import CourseBar from './courseBar'
import { Button } from 'antd'
import SelectField from '../application/SelectField'

export const UpdateCollege = () => {

    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()
    const { id } = useParams()

    const { loading, error, isUpdated } = useSelector(state => state.myCollegeupdate)
    const { myCollege } = useSelector(state => state.myCollege)

    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            alert.success('Update Course Successfully')
            dispatch({ type: UPDATE_COLLEGE_RESET })
            navigate(`/college/manager/profile`)
        }

        dispatch(myCollegeAction())

    }, [ alert,isUpdated, dispatch, error, navigate])


    const validate = Yup.object({

        collegeName: Yup.string().required('required'),
        address: Yup.string().required('required'),
        rating: Yup.string().required('required'),
      

    })



    const initialvalues = {
        collegeName: myCollege.collegeName ? myCollege.collegeName : '',
        // address: myCollege.address ? myCollege.address : '',
        rating: myCollege.rating ? myCollege.rating : '',
       

    }
    const districtOptions = [
        { value: '', label: 'Select' },
        { value: 'baksa', label: 'Baksa' },
        { value: 'barpeta', label: 'Barpeta' },
        { value: 'biswanath', label: 'Biswanath' },
        { value: 'bongaigaon', label: 'Bongaigaon' },
        { value: 'cachar', label: 'Cachar' },
        { value: 'charaideo', label: 'Charaideo' },
        { value: 'chirang', label: 'Chirang' },
        { value: 'darrang', label: 'Darrang' },
        { value: 'dhemaji', label: 'Dhemaji' },
        { value: 'dhubri', label: 'Dhubri' },
        { value: 'dibrugarh', label: 'Dibrugarh' },
        { value: 'dimahasao', label: 'Dima Hasao' },
        { value: 'goalpara', label: 'Goalpara' },
        { value: 'golaghat', label: 'Golaghat' },
        { value: 'hailakandi', label: 'Hailakandi' },
        { value: 'hojai', label: 'Hojai' },
        { value: 'jorhat', label: 'Jorhat' },
        { value: 'kamrup', label: 'Kamrup' },
        { value: 'kamrup_metropolitan', label: 'Kamrup Metropolitan' },
        { value: 'karbi_anglong', label: 'Karbi Anglong' },
        { value: 'karimganj', label: 'Karimganj' },
        { value: 'kokrajhar', label: 'Kokrajhar' },
        { value: 'lakhimpur', label: 'Lakhimpur' },
        { value: 'majuli', label: 'Majuli' },
        { value: 'morigaon', label: 'Morigaon' },
        { value: 'nagaon', label: 'Nagaon' },
        { value: 'nalbari', label: 'Nalbari' },
        { value: 'sivasagar', label: 'Sivasagar' },
        { value: 'sonitpur', label: 'Sonitpur' },
        { value: 'south_salmara-mankachar', label: 'South Salmara-Mankachar' },
        { value: 'tinsukia', label: 'Tinsukia' },
        { value: 'udalguri', label: 'Udalguri' },
        { value: 'west_karbi_anglong', label: 'West Karbi Anglong' },
      ];
    return (

        <Fragment>
            
            {/* {
                loading ? <Loader /> : <Fragment> */}

                    <Formik
                        enableReinitialize={true}
                        initialValues={initialvalues}
                        validationSchema={validate}
                        // onSubmit={values => { console.log(values) }}
                        onSubmit={values => { dispatch(collegeUpdateAction(values)) }}

                    >
                        {Formik => (
                            <div>


                                <div className='applyFor '>
                                    <Form className='applyForm registerClg'>
                                        <div className='but'>
                                            <h3>Edit College Details</h3>
                                        </div>

                                        <TextField label='College Name' name='collegeName' type='text' />
                                        <SelectField label="District" name="address" options={districtOptions} />
                                        <TextField label='NAAC ranking with year' name='rating' type='text' />
                                       



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
export default UpdateCollege