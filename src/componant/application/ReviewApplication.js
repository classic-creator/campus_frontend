import React,{Fragment, useEffect} from 'react'
import TextField from './textField'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { GetStudentAddress, GetStudentEducation, GetStudentPersonalData, applyAdmissionAction, clearErrors } from '../../action/applyAction'
import CheckoutSteps from './checkOutStep'
import { APPLY_ADMISSION_RESET } from '../../constants/applyConstants'
import { useAlert } from 'react-alert'
import Loader from '../layout/loader/loader'


const ReviewApplication = () => {

  const dispatch=useDispatch()
  const {id}=useParams()
  const navigate=useNavigate()
  const alert=useAlert()

  const {studentEducation}=useSelector(state=>state.studentDetails)
  const { studentPersonalData } = useSelector(state => state.studentDetails)
  const {studentAddress}=useSelector(state=>state.studentDetails)

  const {loading,error,msg}=useSelector(state=>state.apply)

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

    state: studentAddress.state ? studentAddress.state : '',
        district: studentAddress.district ? studentAddress.district : '',
        sub_district: studentAddress.sub_district ? studentAddress.sub_district : '',
        circle_office: studentAddress.circle_office ? studentAddress.circle_office : '',
        police_station: studentAddress.police_station ? studentAddress.police_station : '',
        post_office: studentAddress.post_office ? studentAddress.post_office : '',
        pin_no: studentAddress.pin_no ? studentAddress.pin_no : '',
}


useEffect(() => {

 

  dispatch(GetStudentAddress())
  dispatch(GetStudentEducation())
  dispatch(GetStudentPersonalData())

}, [dispatch])

useEffect(() => {

  if(error){
    alert.error(error)
    dispatch(clearErrors())
    navigate('/myApplication')
  }
  if(msg){
   
    alert.success(msg)
    dispatch({type:APPLY_ADMISSION_RESET})
    navigate('/myApplication')
   
  }
}, [dispatch,error,alert,msg,navigate])

const handleSubmit = async (values,{ setSubmitting }) => {
  // Check if form values have changed from initial values
  const hasChanged = JSON.stringify(values) !== JSON.stringify(initialvalue);

  if (hasChanged) {
    // Make API call to save data to database
    
    setSubmitting(false);
    alert.success('Success')
    navigate(`/review/application/${id}`)
  }
  else {
    dispatch(applyAdmissionAction(id));
  }
};

  return (
   <Fragment>
        <CheckoutSteps activeStep={3}/>
      <Formik
        enableReinitialize={true}
        initialValues={initialvalue}
        // validationSchema={validate}
        // onSubmit={values => { dispatch(StudentPersonalData(values)) }}
        onSubmit={handleSubmit}
        readOnly
      >
        {Formik => (
          <div>
      

            <div className='applyFor '>
              <Form className='applyForm  applyform'>

                <div className='but'>
                  <h3>Personal details</h3>
                </div>
                <TextField label='First Name' name='first_name' type='text' readOnly />
                <TextField label='Middle Name' name='middle_name' type='text' readOnly />
                <TextField label='Last Name' name='last_name' type='text' readOnly/>
                <TextField label='Email' name='email' type='email'readOnly />
                <TextField label='Father Name' name='father_name' type='text' readOnly/>
                <TextField label='Mother Name' name='mother_name' type='text' readOnly/>
                <TextField label='Date of Birth' name='dob' type='date' readOnly/>
                <TextField label='Phon Number' name='phon_no' type='number' readOnly/>

                <TextField label='Identification' name='identification' type='text' readOnly/>
                <TextField label='Identification Number' name='identification_no' type='number' readOnly/>
                <TextField label='Qualification' name='qualification' type='text' readOnly/>
                <TextField label='Mark Obtain LastExam' name='mark_obtain_lastExam' type='number' readOnly/>

                <div className='but'>
                  <h3>Address</h3>
                </div>

                <TextField label='State' name='state' type='text' readOnly/>
                <TextField label='District' name='district' type='text' readOnly/>
                <TextField label='Sub_district' name='sub_district' type='text' readOnly/>
                <TextField label='circle_office' name='circle_office' type='text' readOnly/>
                <TextField label='police_station' name='police_station' type='text' readOnly/>
                <TextField label='post_office' name='post_office' type='text'readOnly />
                <TextField label='pin_no' name='pin_no' type='number' readOnly/>


                <div className='but'>
                  <h3>Class 10 exam details</h3>
                </div>
                <TextField label='Passing year' name='class10_passingYear' type='number'readOnly />
                <TextField label='Roll' name='class10_roll' type='number' readOnly/>
                <TextField label='No' name='class10_no' type='number' readOnly/>
                <TextField label='Board' name='class10_board' type='text' readOnly/>
                <TextField label='School' name='class10_school' type='text' readOnly/>
                <TextField label='Total Mark' name='class10_totalMark' type='number' readOnly/>
                <TextField label='Mark Obtain' name='class10_markObtain' type='number' readOnly/>

                <div className='but'>
                  <h3>Class 12 exam details</h3>
                </div>
                <TextField label='Passing year' name='class12_passingYear' type='number' readOnly/>
                <TextField label='Roll' name='class12_roll' type='number' readOnly/>
                <TextField label='No' name='class12_no' type='number' readOnly/>
                <TextField label='Board' name='class12_board' type='text' readOnly/>
                <TextField label='School/College' name='class12_college' type='text' readOnly/>
                <TextField label='Strem' name='class12_strem' type='text' readOnly />
                <TextField label='Total Mark' name='class12_totalMark' type='number' readOnly/>
                <TextField label='Mark Obtain' name='class12_markObtain' type='number' readOnly/>

                <div className='but'>
                  <button type='submit' className='btn '>Submit</button>
                </div>
              </Form>
            </div>
          </div>
        )}

      </Formik>


    
   </Fragment>
  )
}

export default ReviewApplication