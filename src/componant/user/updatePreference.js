import React, { Fragment, useEffect,  useState } from 'react'
import { clearErrors, getPreferences, updatePreference } from '../../action/preferenceAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';

import { UPDATE_PREFERENCE_RESET } from '../../constants/preferenceConstants';
import { useNavigate } from 'react-router-dom';
import { GetPreferedCourses } from '../../action/courseAction';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { Button } from 'antd'


const UpdatePreference = () => {

  const dispatch = useDispatch();
  const alert = useAlert()
  const navigate = useNavigate()

  const { loading, error, isUpdated } = useSelector(state => state.updatePreference)
  const { preference } = useSelector(state => state.preference)
  const { courses } = useSelector(state => state.courses)

  const [college1, setCollege1] = useState('')
  const [college2, setCollege2] = useState('')
  const [college3, setCollege3] = useState('')
  const [course1, setCourse1] = useState('')
  const [course2, setCourse2] = useState('')
  const [course3, setCourse3] = useState('')
  const [depertment1, setDepertment1] = useState('')
  const [depertment2, setDepertment2] = useState('')
  const [depertment3, setDepertment3] = useState('')
  // const [address, setAddress] = useState('')

  const uniqueCourses = [...new Set(courses.map(course => course.courseName))];  //filter same value
  const uniqueCollege = [...new Set(courses.map(course => course.collegeName))];  //filter same value
  const uniqueDepertment = [...new Set(courses.map(course => course.depertment_name))];  //filter same value


  const courseoption = uniqueCourses.map(course => (course));
  const clgoption = uniqueCollege.map(course => (course));
  const deptoption = uniqueDepertment.map(course => (course));

  const updatePreferenceFunction = (e) => {

    e.preventDefault();

    const myForm = new FormData()

    myForm.set('college1', college1)
    myForm.set('college2', college2)
    myForm.set('college3', college3)
    myForm.set('course1', course1)
    myForm.set('course2', course2)
    myForm.set('course3', course3)
    myForm.set('depertment1', depertment1)
    myForm.set('depertment2', depertment2)
    myForm.set('depertment3', depertment3)
    // myForm.set('address', address)

    dispatch(updatePreference(myForm))
    dispatch(getPreferences());

  }


  useEffect(() => {

    if (preference) {
      setCollege1(preference.college1)
      setCollege2(preference.college2)
      setCollege3(preference.college3)
      setCourse1(preference.course1)
      setCourse2(preference.course2)
      setCourse3(preference.course3)
      setDepertment1(preference.depertment1)
      setDepertment2(preference.depertment2)
      setDepertment3(preference.depertment3)
      // setAddress(preference.address)
    }



    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (isUpdated) {
      alert.success(isUpdated)
      dispatch(GetPreferedCourses())
      dispatch({ type: UPDATE_PREFERENCE_RESET })
    }
  }, [alert, error, isUpdated, navigate, dispatch, preference])

  return (

    // <Fragment>{
    //   loading? <Loader/> : 
    <Fragment>



      <Button loading={loading} to={'/preference/update'} type="primary" data-bs-toggle="modal" data-bs-target="#preferenceModal" >Update</Button>


      <form onSubmit={updatePreferenceFunction} >
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


                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={clgoption}
                        sx={{ width: 300 }}
                        onChange={(event, value) => setCollege1(value)}
                        value={college1}
                        renderInput={(params) => <TextField {...params} name="college1"

                          label="College Preference 1" />}
                      />
                    </div>



                    <div className=" input-box form-input-container">

                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={courseoption}
                        sx={{ width: 300 }}
                        onChange={(event, value) => setCourse1(value)}
                        value={course1}
                        renderInput={(params) => <TextField {...params} name="course1"

                          label="Course Preference 1" />}
                      />
                    </div>


                    <div className="input-box form-input-container">

                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        sx={{ width: 300 }}
                        options={deptoption}
                        onChange={(event, value) => setDepertment1(value)}
                        value={depertment1}
                        renderInput={(params) => <TextField {...params} name="depertment1"

                          label="Depertment Preference 1" />}
                      />
                    </div>



                    <div className="align-center form-input-button ">
                      <Button loading={loading} onClick={updatePreferenceFunction} data-bs-dismiss="modal" type='primary'  >Submit</Button>

                    </div>
                  </div>
                </div>
              </div>



            </div>

          </div>
        </div>
      </form>
      {/* </div> */}

    </Fragment >
    // }</Fragment>

  )
}

export default UpdatePreference