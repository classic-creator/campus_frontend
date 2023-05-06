import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllCourses } from '../../action/courseAction';
import Loader from '../layout/loader/loader';
import CourseCard from './collegecardAndComponent/courseCard';
import "./allCourses.css"
import { Link, useParams } from 'react-router-dom';

import AddPreference from '../user/addPreference';
import PreferenceCourses from './PreferenceCourses';

import { getPreferences } from '../../action/preferenceAction';
import SidebarOfcave from './collegecardAndComponent/sidebarOfcave';

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
  const { keyword } = useParams()



  const { preferCourses } = useSelector(state => state.preferedCourse)





  useEffect(() => {

    dispatch(getPreferences());
    dispatch(getAllCourses(keyword))

  }, [dispatch])


  return (
    <Fragment>

      <SidebarOfcave/>
      <div className=" course">
      
        {/* <div className='main'> */}
        
          <div className='allcourse'>
            {/* modal button */}

            {preferCourses ? <PreferenceCourses /> : <span id='modalp'>Add your preferences <AddPreference /></span>}

          {/* </div> */}
        </div>
        <div className='allcourse '>
          <Link  onClick={courseToggle}>Show all courses</Link>
          
            {showResults ? <All /> : null}
            
        </div>
      </div>
    </Fragment>
  )
}
export default AllCourses

const All = () => {

  const { keyword } = useParams()
  const alert = useAlert()
  const dispatch = useDispatch();

  const { loading, courses, error } = useSelector(state => state.courses)

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    // dispatch(getAllCourses(keyword))
  }, [dispatch, error, alert, keyword])

  return (
    <Fragment>
      {loading ? <Loader /> : <Fragment>

        <p id='allCourse'>All courses</p>
        <div className="container ">
          {courses && courses.map(course => (<CourseCard course={course} />))}
        </div>
      </Fragment>}
    </Fragment>
  )
}
