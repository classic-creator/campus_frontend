import React, { Fragment, useEffect } from 'react'
import { Formik,Form } from 'formik'
import TextField from './textField'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useNavigate, useParams } from 'react-router-dom'
import {  AddStudentEducation, GetStudentEducation, clearErrors } from '../../action/applyAction'
import * as Yup from 'yup'
import Loader from '../layout/loader/loader'
import { REGISTER_EDUCATION_RESET } from '../../constants/applyConstants'
import CheckoutSteps from './checkOutStep'
import { Button } from 'antd'
import SelectField from './SelectField'

const ApplyEducationalDetails = () => {



    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate=useNavigate()
    const {id} = useParams()
  
    const { error, message, loading } = useSelector(state => state.applyEducation)
    const {studentEducation,loading:detailsloading}=useSelector(state=>state.studentDetails)
    

    const initialvalue={
        class10_passingYear: studentEducation.class10_passingYear ? studentEducation.class10_passingYear : '',
        class10_roll: studentEducation.class10_roll ? studentEducation.class10_roll : '',
        class10_no: studentEducation.class10_no ? studentEducation.class10_no : '',
        class10_board: studentEducation.class10_board ? studentEducation.class10_board : '',
        class10_school: studentEducation.class10_school ? studentEducation.class10_school : '',
        class10_totalMark: studentEducation.class10_totalMark ? studentEducation.class10_totalMark : '',
        class10_markObtain: studentEducation.class10_markObtain ? studentEducation.class10_markObtain : '',
        class12_passingYear: studentEducation.class12_passingYear ? studentEducation.class12_passingYear : '',
        class12_roll: studentEducation.class12_roll ? studentEducation.class12_roll : '',
        class12_no: studentEducation.class12_no ? studentEducation.class12_no : '',
        class12_board: studentEducation.class12_board ? studentEducation.class12_board : '',
        class12_college: studentEducation.class12_college ? studentEducation.class12_college : '',
        class12_strem: studentEducation.class12_strem ? studentEducation.class12_strem : '',
        class12_totalMark: studentEducation.class12_totalMark ? studentEducation.class12_totalMark : '',
        class12_markObtain: studentEducation.class12_markObtain ? studentEducation.class12_markObtain : '',
    }
    const handleSubmit = async (values, { setSubmitting }) => {
       
        const hasChanged = JSON.stringify(values) !== JSON.stringify(initialvalue);
        
        if (hasChanged) {
        
          dispatch(AddStudentEducation(values));
        }
        else{
  
          setSubmitting(false);
          alert.success('Success')
          navigate(`/upload/file/${id}`)
        }
      };
    
      useEffect(() => {

        if (error) {
          alert.error(error)
          dispatch(clearErrors())
        }
        if (message) {
          alert.success(message)
          navigate(`/upload/file/${id}`)
          // navigate(`/review/application/${id}`)
          dispatch({type:REGISTER_EDUCATION_RESET})
        }
    
        dispatch(GetStudentEducation())
      }, [error,navigate, dispatch, message,id, alert])


    const validate = Yup.object({

        class10_passingYear: Yup.string().max(4, 'Must be characters or less').min(4,'Must be characters or less').required('required'),
        class10_roll: Yup.string().max(15, 'Must be characters or less').required('required'),
        class10_no: Yup.string().max(15, 'Must be characters or less').required('required'),
        class10_board: Yup.string().required('required'),
        class10_school: Yup.string().max(15, 'Must be characters or less').required('required'),
        class10_totalMark: Yup.string().max(15, 'Must be characters or less').required('required'),
        class10_markObtain: Yup.string().required('required'),

        class12_passingYear: Yup.string().max(4, 'Must be characters or less').min(4,'Must be characters or less').required('required'),
        class12_roll: Yup.string().max(15, 'Must be characters or less').required('required'),
        class12_no: Yup.string().max(15, 'Must be characters or less').required('required'),
        class12_board: Yup.string().required('required'),
        class12_college: Yup.string().max(15, 'Must be characters or less').required('required'),
        class12_strem: Yup.string().max(15, 'Must be characters or less').required('required'),
        class12_totalMark: Yup.string().max(15, 'Must be characters or less').required('required'),
        class12_markObtain: Yup.string().required('required'),
       
      })

     const stremOptions =[

     
      { value: 'science', label: 'Science' },
      { value: 'arts', label: 'Arts' },
      { value: 'commerce', label: 'Commerce' },
     ]
    
    
      return (
      //  <Fragment>
      //   {loading ? <Loader/> :  
        <Fragment>
            <CheckoutSteps activeStep={2}/>
          <Formik
            enableReinitialize={true}
            initialValues={initialvalue}
            validationSchema={validate}
            // onSubmit={values => { dispatch(StudentPersonalData(values)) }}
            onSubmit={handleSubmit}
          >
            {Formik => (
              <div> 
                  <Form className='applyForm  applyform'>
                  {detailsloading? <Button loading={detailsloading}></Button>:null}
                    <div className='but'> 
                         <h3>Class 10 exam details</h3>
                     </div>  
                    <TextField label='Passing year' name='class10_passingYear' type='number' />
                    <TextField label='Roll' name='class10_roll' type='taxt' />
                    <TextField label='No' name='class10_no' type='number' />
                    <TextField label='Board' name='class10_board' type='text' />
                    
                    <TextField label='School' name='class10_school' type='text' />
                    <TextField label='Total Mark' name='class10_totalMark' type='number' />
                    <TextField label='Mark Obtain' name='class10_markObtain' type='number' />
                  
                    <div className='but'>
                         <h3>Class 12 exam details</h3>
                        </div> 
                  <TextField label='Passing year' name='class12_passingYear' type='number' />
                    <TextField label='Roll' name='class12_roll' type='taxt' />
                    <TextField label='No' name='class12_no' type='number' />
                    <TextField label='Board' name='class12_board' type='text' />
                    <TextField label='School/College' name='class12_college' type='text' />
                    {/* <TextField label='Strem' name='class12_strem' type='text' /> */}

                    <SelectField label="Strem" name="class12_strem" options={stremOptions} />

                    <TextField label='Total Mark' name='class12_totalMark' type='number' />
                    <TextField label='Mark Obtain' name='class12_markObtain' type='number' />
                    
                   <div className='but'>
                   {loading ? <Button loading={loading}></Button> :<button type='submit' className='btn '>Submit</button>}
                   </div>
                  
                    
                  </Form>
                </div>
            
            )}
    
          </Formik>
    
        {/* </Fragment>} */}
       </Fragment>)
}

export default ApplyEducationalDetails