import { Field, Form, Formik } from 'formik'
import React, { Fragment, useEffect, useState } from 'react'
import TextField from './textField'
import Modal from 'react-modal'
import './fileform.css'
import { Button } from 'antd'
import { ApplicationFileUploadAction, GetStudentsFileAction } from '../../action/applyAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { REGISTER_FILES_RESET } from '../../constants/applyConstants'
import { useNavigate, useParams } from 'react-router-dom'

const FileUpload = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const alert =useAlert()
  const {id}=useParams()
   const {message,error}= useSelector(state=>state.applyfiles)
   const {studentsFiles}=useSelector(state=>state.studentDetails)

  const [selectedFiles, setSelectedFiles] = useState({})
  const [previewModalIsOpen, setPreviewModalIsOpen] = useState(false)
  const [previewFileUrl, setPreviewFileUrl] = useState('')

  const openPreviewModal = (fileUrl) => {
    setPreviewFileUrl(fileUrl)
    setPreviewModalIsOpen(true)
  }

  const closePreviewModal = () => {
    setPreviewModalIsOpen(false)
    setPreviewFileUrl('')
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

  const handleFileSelection = (event, fieldName) => {
    setSelectedFiles({
      ...selectedFiles,
      [fieldName]: URL.createObjectURL(event.target.files[0])
    })
  }

  const renderPreviewButton = (fieldName) => {
    if (selectedFiles[fieldName]) {
      return (
        <div>
          <Button type='button' onClick={() => openPreviewModal(selectedFiles[fieldName])}>
            Preview
          </Button>
          <Modal
            isOpen={previewModalIsOpen}
            onRequestClose={closePreviewModal}
            className='previewModal'
            style={customStyles}
            timeout={300}
          >
            <img src={previewFileUrl} alt='Preview' />
            <Button className='preview' type='primary' onClick={closePreviewModal}>Close Preview</Button>
          </Modal>
        </div>
      )
    } else {
      return (
        <div>
          <Button type='button' disabled>
            Preview
          </Button>
        </div>
      )
    }
  }
 useEffect(() => {

if(message){
     alert.success(message)
    navigate(`/review/application/${id}`)
    dispatch({type:REGISTER_FILES_RESET})
}
   dispatch(GetStudentsFileAction())
 }, [message,alert,dispatch,id,navigate])
 
//  const initialvalue={
//   profile_photo: studentsFiles.passport_image_url ? studentsFiles.passport_image_url : '',
//   signature: studentsFiles.signature ? studentsFiles.signature : '',
//   prc: studentsFiles.prc ? studentsFiles.prc : '',
//   aadhar: studentsFiles.aadhar_image_url ? studentsFiles.aadhar_image_url : '',
//   hslc_admit: studentsFiles.signature_image_url ? studentsFiles.signature_image_url : '',
//   hslc_registation: studentsFiles.hslc_registation_image_url ? studentsFiles.hslc_registation_image_url : '',
//   hslc_marksheet: studentsFiles.hslc_marksheet_image_url ? studentsFiles.hslc_marksheet_image_url : '',
//   hslc_certificate: studentsFiles.hslc_certificate_image_url ? studentsFiles.hslc_certificate_image_url : '',
//   hsslc_admit: studentsFiles.hsslc_admit_image_url ? studentsFiles.hsslc_admit_image_url : '',
//   hsslc_registation: studentsFiles.hsslc_registation_image_url ? studentsFiles.hsslc_registation_image_url : '',
//   hsslc_marksheet: studentsFiles.hsslc_marksheet_image_url ? studentsFiles.hsslc_marksheet_image_url : '',
//   hsslc_certificate: studentsFiles.hsslc_certificate_image_url ? studentsFiles.hsslc_certificate_image_url : '',
 
// }

  return (
    <Fragment>
      <Formik
        // enableReinitialize={true}
        // initialValues={initialvalue}
      
        // validationSchema={validate}
        onSubmit={values => { dispatch(ApplicationFileUploadAction(values)) }}
      // onSubmit={values => { console.log(values) }}
      >

        {/* {Formik => ( */}
        {({ values, setFieldValue }) => ( 
          < div >
          <Form className='applyForm fileForm'>
            <div className="formcontent">
            <div className=' '>
              <p>Passport Photo</p>
              <input
             label='Photo'
                name='profile_photo'
                type='file'
                
                onChange={(event) => {
                  setFieldValue("profile_photo", event.target.files[0]);
                  handleFileSelection(event, 'Photo')
                
                }}
              /></div>
              {renderPreviewButton('Photo')} 
             
            </div>
            <div className="formcontent">
            <div>
              <p>Signature</p>
              <input
              label='Signature'
                name='signature'
                type='file'
                onChange={(event) =>{
                  setFieldValue("signature", event.target.files[0]);
                  handleFileSelection(event, 'Signature')
                }}
              /></div>
              {renderPreviewButton('Signature')}
            </div>
            <div className="formcontent">
            <div>
              <p >PRC</p>
              <input
                label='PRC'
                name='prc'
                type='file'
                onChange={(event) =>{
                  setFieldValue("prc", event.target.files[0]);
                  handleFileSelection(event, 'PRC')
                }
                }
              /></div>
              {renderPreviewButton('PRC')}
            </div>
            <div className="formcontent">
            <div>
              <p >Aadhar</p>
              <input
                label='Aadhar'
                name='aadhar'
                type='file'
                onChange={(event) =>{
                  setFieldValue("aadhar", event.target.files[0]);
                  handleFileSelection(event, 'Aadhar')
                }
                }
              /></div>
              {renderPreviewButton('Aadhar')}
            </div>
            <div className="formcontent">
            <div>
              <p>HSLC Admit</p>
              <input
                label='HSLC_Admit'
                name='hslc_admit'
                type='file'
                onChange={(event) =>{
                  setFieldValue("hslc_admit", event.target.files[0]);
                  handleFileSelection(event, 'HSLC_Admit')
                }
                }
              /></div>
              {renderPreviewButton('HSLC_Admit')}
            </div>
            <div className="formcontent">
            <div>
              <p >HSLC Certificate</p>
              <input
                label='HSLC_certificate'
                name='hslc_certificate'
                type='file'
                onChange={(event) =>{
                  setFieldValue("hslc_certificate", event.target.files[0]);
                  handleFileSelection(event, 'HSLC_certificate')
                }
                }
              /></div>
              {renderPreviewButton('HSLC_certificate')}
            </div>
            <div className="formcontent">
            <div>
              <p>HSLC Marksheet</p>
              <input
                label='HSLC_marksheet'
                name='hslc_marksheet'
                type='file'
                onChange={(event) =>{
                  setFieldValue("hslc_marksheet", event.target.files[0]);
                  handleFileSelection(event, 'HSLC_marksheet')
                }
                }
              /></div>
              {renderPreviewButton('HSLC_marksheet')}
            </div>
            <div className="formcontent">
 <div>
              <p>HSLC Registation</p>
              <input
                label='HSLC_Registation'
                name='hslc_registation'
                type='file'
                onChange={(event) =>{
                  setFieldValue("hslc_registation", event.target.files[0]);
                  handleFileSelection(event, 'HSLC_Registation')
                }
                }
              /></div>
              {renderPreviewButton('HSLC_Registation')}
            </div>
            <div className="formcontent">

            <div>
              <p >HSLC Admit</p>

              <input
                label='HSSLC_Admit'
                name='hsslc_admit'
                type='file'
                onChange={(event) =>{
                  setFieldValue("hsslc_admit", event.target.files[0]);
                  handleFileSelection(event, 'HSSLC_Admit')
                }
                }
              /></div>
              {renderPreviewButton('HSSLC_Admit')}
            </div>
            <div className="formcontent">
            <div>
              <p>HSSLC Certificate</p>
              <input
                label='HSSLC_certificate'
                name='hsslc_certificate'
                type='file'
                onChange={(event) =>{
                  setFieldValue("hsslc_certificate", event.target.files[0]);
                  handleFileSelection(event, 'HSSLC_certificate')
                }
                }
              /></div>
              {renderPreviewButton('HSSLC_certificate')}
            </div>
            <div className="formcontent">
            <div>
              <p>HSSLC Marksheet</p>
              <input
                label='HSSLC_marksheet'
                name='hsslc_marksheet'
                type='file'
                onChange={(event) =>{
                  setFieldValue("hsslc_marksheet", event.target.files[0]);
                  handleFileSelection(event, 'HSSLC_marksheet')
                }
                }
              /></div>
              {renderPreviewButton('HSSLC_marksheet')}
            </div>
            <div className="formcontent">
            <div>
              <p>HSSLC Registation</p>
              <input
                label='HSSLC_Registation'
                name='hsslc_registation'
                type='file'
                onChange={(event) =>{
                  setFieldValue("hsslc_registation", event.target.files[0]);
                  handleFileSelection(event, 'HSSLC_Registation')
                }
                }
              /></div>
              {renderPreviewButton('HSSLC_Registation')}
            </div>




            <div className='but'>
              <button type='submit' className='btn '>Submit</button>
            </div>


          </Form>
</div>
           
            )}

    </Formik>


</Fragment >
)
}

export default FileUpload