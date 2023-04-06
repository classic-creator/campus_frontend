import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllCourses} from '../../action/courseAction';
import Loader from '../layout/loader/loader';
import CourseCard from './collegecardAndComponent/courseCard';
import "./allCourses.css"
import { Link, useParams } from 'react-router-dom';
import Search from '../layout/Search/search';
import AddPreference from '../user/addPreference';
import PreferenceCourses from './PreferenceCourses';

import { getPreferences } from '../../action/preferenceAction';

const AllCourses = () => {

  const [showResults, setShowResults] = useState(false)
  const courseToggle = () => {
    if (showResults === false) {
      setShowResults(true)

    }
    if (showResults === true) {
      setShowResults(false)

    }
  }

 
  const dispatch = useDispatch();


 

  const {preferCourses} = useSelector(state => state.preferedCourse)




  
 useEffect(() => {

  dispatch(getPreferences());

 }, [dispatch])
 

  return (
   <Fragment>
 
    
    <h1>Courses</h1>
    <div className='main'>
      <div className='filters'>
        <h2> Filters </h2>

        <p>Search Course : </p>
        <Search  link='courses' placeholder='Search Courses' />

        <p>Fees</p>
        <label htmlFor="lowToHigh">Low To High</label>
        <input type="radio" id='lowToHigh' />
        <label htmlFor="hingToLow">High To Low</label>
        <input type="radio" id='hingToLow' />


      </div>

 <div>
        {/* modal button */}
      
       {preferCourses ? <PreferenceCourses/>: <span id='modalp'>Add your preferences <AddPreference/></span>}
       
      </div>
    </div>
    <div className='allcourse'>
      <Link onClick={courseToggle}>Show all courses</Link>
      {showResults ? <All /> : null}
    </div>
   </Fragment>
  )
}
export default AllCourses

const All = () => {

  const { keyword } = useParams()
  const alert = useAlert()
  const dispatch = useDispatch();

  const {loading,courses,error} = useSelector(state => state.courses)

  useEffect(() => {
  if(error){
    alert.error(error)
    dispatch(clearErrors())
  }
  dispatch(getAllCourses(keyword))
  }, [dispatch,error,alert,keyword])
  
  return (
   <Fragment>
    {loading?<Loader/> :  <Fragment>
      
      <p id='allCourse'>All courses</p>
      <div className="container ">
        {courses && courses.map(course => (<CourseCard course={course} />))}
      </div>
  </Fragment>}
   </Fragment>
  )
}
