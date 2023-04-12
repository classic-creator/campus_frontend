import React, { Fragment, useEffect, useState } from 'react'
import { clearErrors,updatePreference } from '../../action/preferenceAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import Loader from '../layout/loader/loader';
import { UPDATE_PREFERENCE_RESET } from '../../constants/preferenceConstants';
import {  useNavigate} from 'react-router-dom';
import { GetPreferedCourses } from '../../action/courseAction';



const UpdatePreference = () => {

  const dispatch = useDispatch();
  const alert = useAlert()
  const  navigate =useNavigate()

  const {loading, error,isUpdated} = useSelector(state => state.updatePreference)
  const { preference } = useSelector(state => state.preference)


  const [college1, setCollege1] = useState('')
  const [college2, setCollege2] = useState('')
  const [college3, setCollege3] = useState('')
  const [course1, setCourse1] = useState('')
  const [course2, setCourse2] = useState('')
  const [course3, setCourse3] = useState('')
  const [address, setAddress] = useState('')




const updatePreferenceFunction=(e)=>{

  e.preventDefault();

  const myForm = new FormData()

  myForm.set('college1', college1)
  myForm.set('college2', college2)
  myForm.set('college3', college3)
  myForm.set('course1', course1)
  myForm.set('course2', course2)
  myForm.set('course3', course3)
  myForm.set('address', address)

  dispatch(updatePreference(myForm))
  

}


  useEffect(() => {

   if(preference ){
    setCollege1(preference.college1)
    setCollege2(preference.college2)
    setCollege3(preference.college3)
    setCourse1(preference.course1)
    setCourse2(preference.course2)
    setCourse3(preference.course3)
    setAddress(preference.address)
   }



    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if(isUpdated){
      alert.success(isUpdated)  
      dispatch(GetPreferedCourses())   
      dispatch({type:UPDATE_PREFERENCE_RESET})
    }
  }, [alert, error,isUpdated,navigate, dispatch,preference])

  return (

  <Fragment>{
    loading? <Loader/> :   <Fragment>

  

<button to={'/preference/update'} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#preferenceModal" >update</button>

   
      <form onSubmit={updatePreferenceFunction} > 
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
                          onChange={(e) => setCollege1(e.target.value)}
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

                          onChange={(e) => setCollege2(e.target.value)}
                        />
                      </div>
                      <div className=" input-box">
                        <label className="form-label">College Preference 3</label>
                        <input type="text"
                          className="form-control shadow-none"
                          value={college3}
                          name='college3'
                          placeholder="Enter college name"

                          onChange={(e) => setCollege3(e.target.value)}
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
                          onChange={(e) => setCourse1(e.target.value)}
                        />
                      </div>
                      <div className=" input-box">
                        <label className="form-label">Course Preference 2</label>
                        <input type='text' className="form-control shadow-none"
                          value={course2}
                          name='course2'
                          placeholder="Enter course name"

                          onChange={(e) => setCourse2(e.target.value)}
                        />

                      </div>
                      <div className="input-box">
                        <label className="form-label">Course Preference 3</label>
                        <input type="text"
                          value={course3}
                          name='course3'
                          placeholder="Enter your name"

                          onChange={(e) => setCourse3(e.target.value)}
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
                          onChange={(e) => setAddress(e.target.value)}
                          className="form-control shadow-none" />
                      </div>
                    </div>
                  </div>
                      <div className="alighn-center my-1">
                        <button type="submit" className="btn btn-dark shadow-none" data-bs-dismiss="modal" >Submit</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                  


                </div>
              
            </div>
          </div>
        </div>
        </form>
     
    </Fragment>
    }</Fragment>

  )
}

export default UpdatePreference