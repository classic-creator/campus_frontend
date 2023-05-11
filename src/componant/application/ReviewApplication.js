import React, { Fragment, useEffect, useState } from 'react'
import TextField from './textField'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { GetStudentAddress, GetStudentEducation, GetStudentPersonalData, GetStudentsFileAction, applyAdmissionAction, clearErrors } from '../../action/applyAction'
import CheckoutSteps from './checkOutStep'
import { APPLY_ADMISSION_RESET } from '../../constants/applyConstants'
import { useAlert } from 'react-alert'
import Loader from '../layout/loader/loader'
import { Button } from 'antd'
import Modal from 'react-modal'

const ReviewApplication = () => {

  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const alert = useAlert()

  const { studentEducation } = useSelector(state => state.studentDetails)
  const { studentPersonalData } = useSelector(state => state.studentDetails)
  const { studentAddress } = useSelector(state => state.studentDetails)
  const { studentsFiles ,loading:fileLoading} = useSelector(state => state.studentDetails)
  const { loading, error, msg } = useSelector(state => state.apply)

  const initialvalue = {
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
    dispatch(GetStudentsFileAction())

  }, [dispatch])

  useEffect(() => {

    if (error) {
      alert.error(error)
      dispatch(clearErrors())
      navigate('/myApplication')
    }
    if (msg) {

      alert.success(msg)
      dispatch({ type: APPLY_ADMISSION_RESET })
      navigate('/myApplication')

    }
  }, [dispatch, error, alert, msg, navigate])

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  function openModal(imageUrl) {
    setImageUrl(imageUrl);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: '80%',
      left: '10%',
      height: '70%',
      top: '20%'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.3s ease-out' // add transition here
    }
  };


  const handleSubmit = async (values, { setSubmitting }) => {
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
      <CheckoutSteps activeStep={3} />
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
                <TextField label='Last Name' name='last_name' type='text' readOnly />
                <TextField label='Email' name='email' type='email' readOnly />
                <TextField label='Father Name' name='father_name' type='text' readOnly />
                <TextField label='Mother Name' name='mother_name' type='text' readOnly />
                <TextField label='Date of Birth' name='dob' type='date' readOnly />
                <TextField label='Phon Number' name='phon_no' type='number' readOnly />

                <TextField label='Identification' name='identification' type='text' readOnly />
                <TextField label='Identification Number' name='identification_no' type='number' readOnly />
                <TextField label='Qualification' name='qualification' type='text' readOnly />
                <TextField label='Mark Obtain LastExam' name='mark_obtain_lastExam' type='number' readOnly />

                <div className='but'>
                  <h3>Address</h3>
                </div>

                <TextField label='State' name='state' type='text' readOnly />
                <TextField label='District' name='district' type='text' readOnly />
                <TextField label='Sub_district' name='sub_district' type='text' readOnly />
                <TextField label='circle_office' name='circle_office' type='text' readOnly />
                <TextField label='police_station' name='police_station' type='text' readOnly />
                <TextField label='post_office' name='post_office' type='text' readOnly />
                <TextField label='pin_no' name='pin_no' type='number' readOnly />


                <div className='but'>
                  <h3>Class 10 exam details</h3>
                </div>
                <TextField label='Passing year' name='class10_passingYear' type='number' readOnly />
                <TextField label='Roll' name='class10_roll' type='number' readOnly />
                <TextField label='No' name='class10_no' type='number' readOnly />
                <TextField label='Board' name='class10_board' type='text' readOnly />
                <TextField label='School' name='class10_school' type='text' readOnly />
                <TextField label='Total Mark' name='class10_totalMark' type='number' readOnly />
                <TextField label='Mark Obtain' name='class10_markObtain' type='number' readOnly />

                <div className='but'>
                  <h3>Class 12 exam details</h3>
                </div>
                <TextField label='Passing year' name='class12_passingYear' type='number' readOnly />
                <TextField label='Roll' name='class12_roll' type='number' readOnly />
                <TextField label='No' name='class12_no' type='number' readOnly />
                <TextField label='Board' name='class12_board' type='text' readOnly />
                <TextField label='School/College' name='class12_college' type='text' readOnly />
                <TextField label='Strem' name='class12_strem' type='text' readOnly />
                <TextField label='Total Mark' name='class12_totalMark' type='number' readOnly />
                <TextField label='Mark Obtain' name='class12_markObtain' type='number' readOnly />


                <div className='but'>
                  <h3>Files Review</h3>
                </div>
                <div className="container formFileContainer">


                  <div>
                    <img src={studentsFiles.passport_image_url} alt='img' />
                    <span>Passport Image</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.passport_image_url)}>Preview</Button>
                  </div>
                  <div>
                    <img src={studentsFiles.signature_image_url} alt='img' />
                    <span>Signature</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.signature_image_url)}>Preview</Button>
                  </div>
                  <div>
                    <img src={studentsFiles.aadhar_image_url} alt='img' />
                    <span>Aadhar</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.aadhar_image_url)}>Preview</Button>
                  </div>
                  <div>
                    <img src={studentsFiles.hslc_registation_image_url} alt='img' />
                    <span>HSLC Registation Card</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.hslc_registation_image_url)}>Preview</Button>
                  </div>
                  <div>
                    <img src={studentsFiles.hslc_marksheet_image_url} alt='img' />
                    <span>HSLC Marksheet Card</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.hslc_marksheet_image_url)}>Preview</Button>
                  </div>
                  <div>
                    <img src={studentsFiles.hslc_certificate_image_url} alt='img' />
                    <span>HSLC Certificate</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.hslc_certificate_image_url)}>Preview</Button>
                  </div>
                  <div>
                    <img src={studentsFiles.hslc_admit_image_url} alt='img' />
                    <span>HSLC Admit Card</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.hslc_admit_image_url)}>Preview</Button>
                  </div>
                  <div>
                    <img src={studentsFiles.hsslc_registation_image_url} alt='img' />
                    <span>HSSLC Registation Card</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.hsslc_registation_image_url)}>Preview</Button>
                  </div>
                  <div>
                    <img src={studentsFiles.hsslc_marksheet_image_url} alt='img' />
                    <span>HSSLC Marksheet Card</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.hsslc_marksheet_image_url)}>Preview</Button>
                  </div>
                  <div>
                    <img src={studentsFiles.hsslc_certificate_image_url} alt='img' />
                    <span>HSSLC Certificate</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.hsslc_certificate_image_url)}>Preview</Button>
                  </div>
                  <div>
                    <img src={studentsFiles.hsslc_admit_image_url} alt='img' />
                    <span>HSSLC Admit Card</span>
                    <Button loading={fileLoading} onClick={() => openModal(studentsFiles.hsslc_admit_image_url)}>Preview</Button>
                  </div>
                </div>

                <Modal isOpen={modalIsOpen} style={customStyles}  timeout={300}  className='previewModal reviewModal' onRequestClose={closeModal}>
                  <img src={imageUrl} alt='img' />
                  <Button onClick={closeModal}>Close</Button>
                </Modal>

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