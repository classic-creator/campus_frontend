import React, { Fragment, useEffect, useState } from 'react'
import { clearErrors, registerPreferenceAction } from '../../action/preferenceAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';

import { GetPreferedCourses } from '../../action/courseAction';


const AddPreference = () => {

  const dispatch = useDispatch();
  const alert = useAlert()

  const {  error } = useSelector(state => state.preference)

  const [preferences, setPreferences] = useState({
    college1: '',
    college2: '',
    college3: '',

    course1: '',
    course2: '',
    course3: '',

    address: ''
  })


  const { college1, college2, college3, course1, course2, course3, address } = preferences

  const PreferenceDataChange = (e) => {
    setPreferences({...preferences, [e.target.name]: e.target.value })
  }
  const PreferenceFunction = (e) => {
    

   e.preventDefault();

    const myForm = new FormData()

    myForm.set('college1', college1)
    myForm.set('college2', college2)
    myForm.set('college3', college3)
    myForm.set('course1', course1)
    myForm.set('course2', course2)
    myForm.set('course3', course3)
    myForm.set('address', address)

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

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#preferenceModal">
    Add Preference
    </button>


   
      <form onSubmit={PreferenceFunction} > 
        <div className="modal fade" id="preferenceModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
            
                <div className="modal-header">
                  <h5 className="modal-title d-flex align-items-center">
                    <i className="bi bi-person-lines-fill fs-3 me-2"></i>Update Your Preference
                  </h5>

                </div>
                <div className="modal-body">


                
                  <div className="container-fluide user-details">
                    <div className="row">
                      <div className=" input-box">
                        <label className="form-label">College Preference 1</label>
                        <input
                          className="form-control shadow-none"
                          type="text"
                          value={college1}
                          name='college1'
                          placeholder="Enter college name"
                          required
                          onChange={PreferenceDataChange}
                        />
                      </div>
                      <div className="input-box">
                        <label className="form-label">College Preference 2</label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          value={college2}
                          name='college2'
                          placeholder="Enter college name"

                          onChange={PreferenceDataChange}
                        />
                      </div>
                      <div className=" input-box">
                        <label className="form-label">College Preference 3</label>
                        <input type="text"
                          className="form-control shadow-none"
                          value={college3}
                          name='college3'
                          placeholder="Enter college name"

                          onChange={PreferenceDataChange}
                        />
                      </div>
                      <div className=" input-box">
                        <label className="form-label">Course Preference 1</label>
                        <input type="text"
                          className="form-control shadow-none"
                          value={course1}
                          name='course1'
                          placeholder="Enter course name"
                          required
                          onChange={PreferenceDataChange}
                        />
                      </div>
                      <div className=" input-box">
                        <label className="form-label">Course Preference 2</label>
                        <input type='text' className="form-control shadow-none"
                          value={course2}
                          name='course2'
                          placeholder="Enter course name"

                          onChange={PreferenceDataChange}
                        />

                      </div>
                      <div className="input-box">
                        <label className="form-label">Course Preference 3</label>
                        <input type="text"
                          value={course3}
                          name='course3'
                          placeholder="Enter your name"

                          onChange={PreferenceDataChange}
                          className="form-control shadow-none" />
                      </div>

                      <div className="input-box">
                        <label className="form-label">Depertment Preference 1</label>
                        <input type="text"
                          placeholder='Enter depertment name'
                          className="form-control shadow-none" />
                      </div>
                      <div className="input-box">
                        <label className="form-label">Depertment Preference 2</label>
                        <input type="text"
                          placeholder='Enter depertment name'
                          className="form-control shadow-none" />
                      </div>
                      <div className="input-box">
                        <label className="form-label">Depertment Preference 3</label>
                        <input type="text"
                          placeholder='Enter depertment name'
                          className="form-control shadow-none" />
                      </div>
                      <div className="input-box">
                        <label className="form-label">Address Preference</label>
                        <input type="text"
                          value={address}
                          name='address'
                          placeholder="Enter address"
                          required
                          onChange={PreferenceDataChange}
                          className="form-control shadow-none" />
                      </div>
                    </div>
                  </div>
                      <div className="alighn-center my-1">
                        <button type="submit" className="btn btn-dark shadow-none m-2" data-bs-dismiss="modal" >Submit</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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