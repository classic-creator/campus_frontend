import React, { Fragment, useEffect, useState } from 'react'
import { clearErrors, registerPreferenceAction } from '../../action/preferenceAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import './preference.css'
import { GetPreferedCourses } from '../../action/courseAction';
import { useParams } from 'react-router-dom';
import {Button} from 'antd'

const AddPreference = () => {

  const dispatch = useDispatch();
  const alert = useAlert()
 const {keyword}=useParams()
  const { error ,loading} = useSelector(state => state.preference)
  const { courses } = useSelector(state => state.courses)



  // const option = uniqueCourses.map(course => ({
  //   label: course,
  //   value: course
  // }));
  // Create an array of options from the Set
  // const option=[]
  const uniqueCourses = [...new Set(courses.map(course => course.courseName))];  //filter same value
  const uniqueCollege = [...new Set(courses.map(course => course.collegeName))];  //filter same value
  const uniqueDepertment = [...new Set(courses.map(course => course.depertment_name))];  //filter same value
  

  const courseoption = uniqueCourses.map(course => (course));
  const clgoption = uniqueCollege.map(course => (course));
  const deptoption = uniqueDepertment.map(course => (course));




  const [preferences, setPreferences] = useState({
    college1: '',
    college2: '',
    college3: '',

    course1: '',
    course2: '',
    course3: '',

    depertment1:'',
    depertment2:'',
    depertment3:'',
    // address: ''
  })



  // const [suggestedOptions, setSuggestedOptions] = useState([]);

  const { college1, college2, college3, course1, course2, course3,depertment1,depertment2,depertment3 } = preferences

  const PreferenceDataChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value })


  }


  const PreferenceFunction = (e) => {


    e.preventDefault();

    const myForm = new FormData()

    myForm.set('college1', college1)
    myForm.set('college2', college2)
    myForm.set('college3', college3)
    myForm.set('course1', course1)
    myForm.set('course2', course2)
    myForm.set('depertment1', depertment1)
    myForm.set('depertment2', depertment2)
    myForm.set('depertment3', depertment3)
    // myForm.set('address', address)

    dispatch(registerPreferenceAction(myForm))

    dispatch(GetPreferedCourses())
  }
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
   

  }, [alert, error, dispatch])

  return (

    <Fragment>

      <Button  type="primary" loading={loading} data-bs-toggle="modal" data-bs-target="#preferenceModal">
        Add Preference
      </Button>



      <form onSubmit={PreferenceFunction} >
        <div className="modal fade" id="preferenceModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center">
                  <i className="bi bi-person-lines-fill fs-3 me-2"></i>Update Your Preference
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">



                <div className="container-fluide ">
                  <div className="row form-div-container">
                    <div className=" input-box form-input-container">
                      <label className="form-label"></label>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={clgoption}
                        // sx={{ width: 300 }}
                        onChange={(event, value) => {
                          setPreferences({ ...preferences, college1: value })
                        }}
                        value={college1}
                        renderInput={(params) => <TextField {...params} name="college1"

                          label="College Preference 1" />}
                      />
                    </div>
                    <div className="input-box form-input-container">
                      <label className="form-label"></label>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={clgoption}
                        sx={{ width: 300 }}
                        onChange={(event, value) => {
                          setPreferences({ ...preferences, college2: value })
                        }}
                        value={college2}
                        renderInput={(params) => <TextField {...params} name="college2"

                          label="College Preference 2" />}
                      />
                    </div>
                    <div className=" input-box form-input-container">
                      {/* <label className="form-label">College Preference 3</label> */}
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={clgoption}
                        sx={{ width: 300 }}
                        onChange={(event, value) => {
                          setPreferences({ ...preferences, college3: value })
                        }}
                        value={college3}
                        renderInput={(params) => <TextField {...params} name="college3"

                          label="College Preference 3" />}
                      />
                    </div>
                    <div className=" input-box form-input-container">
                      {/* <label className="form-label">Course Preference 1</label> */}
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={courseoption}
                        sx={{ width: 300 }}
                        onChange={(event, value) => {
                          setPreferences({ ...preferences, course1: value })
                        }}
                        value={course1}
                        renderInput={(params) => <TextField {...params} name="course1"

                          label="Course Preference 1" />}
                      />

                    </div>
                    <div className=" input-box form-input-container">
                      {/* <label className="form-label">Course Preference 2</label> */}
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={courseoption}
                        sx={{ width: 300 }}
                        onChange={(event, value) => {
                          setPreferences({ ...preferences, course2: value })
                        }}
                        value={course2}
                        renderInput={(params) => <TextField {...params} name="course2"

                          label="Course Preference 2" />}/>
                      

                    </div>
                    <div className="input-box form-input-container">
                      {/* <label className="form-label">Course Preference 3</label> */}
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={courseoption}
                        sx={{ width: 300 }}
                        onChange={(event, value) => {
                          setPreferences({ ...preferences, course3: value })
                        }}
                        value={course3}
                        renderInput={(params) => <TextField {...params} name="course3"

                          label="Course Preference 3" />}
                      />
                    </div>

                    <div className="input-box form-input-container" >
                      {/* <label className="form-label">Depertment Preference 1</label> */}
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        sx={{ width: 300 }}
                        options={deptoption}
                        onChange={(event, value) => {
                          setPreferences({ ...preferences, depertment1: value })
                        }}
                        value={depertment1}
                        renderInput={(params) => <TextField {...params} name="depertment1"

                          label="Depertment Preference 1" />}
                      />
                    </div>
                    <div className="input-box form-input-container">
                      {/* <label className="form-label">Depertment Preference 2</label> */}
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        sx={{ width: 300 }}
                        options={deptoption}
                        onChange={(event, value) => {
                          setPreferences({ ...preferences, depertment2: value })
                        }}
                        value={depertment2}
                        renderInput={(params) => <TextField {...params} name="depertment2"

                          label="Depertment Preference 2" />}
                      />
                    </div>
                    <div className="input-box form-input-container">
                      {/* <label className="form-label">Depertment Preference 3</label> */}
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        sx={{ width: 300 }}
                        options={deptoption}
                        onChange={(event, value) => {
                          setPreferences({ ...preferences, depertment3: value })
                        }}
                       
                        value={depertment3}
                        renderInput={(params) => <TextField {...params} name="depertment3"

                          label="Depertment Preference 3" />}
                      /></div>
                     
                    </div>
                  </div>
                  <div className="alighn-center my-1">
                    <Button type="primary" loading={loading} onClick={PreferenceFunction} >Submit</Button>
                   
                  </div>



                </div>

              </div>
            </div>
          </div>
      </form>

    </Fragment>

  )
}

export default AddPreference