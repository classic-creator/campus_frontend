import React, { Fragment, useEffect, useRef, useState } from 'react'
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
// import SidebarOfcave from './collegecardAndComponent/sidebarOfcave';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMultiply } from '@fortawesome/free-solid-svg-icons';

const AllCourses = ({scrollToSection}) => {

  const {isAuthenticated}=useSelector(state=>state.user)
  const [showResults, setShowResults] = useState(false)
  const courseToggle = () => {
    // setShowResults(!showResults);
    // if (showResults) {
      
      // scrollToSection('courses');
    // }
    if(showResults===false){
      setShowResults(true)
  scrollToSection('courses');
    }
    if(showResults===true){
      setShowResults(false)
     
    }
  }


  const dispatch = useDispatch();
  const { keyword } = useParams()

  const { preferCourses } = useSelector(state => state.preferedCourse)


  useEffect(() => {

    dispatch(getPreferences());
    dispatch(getAllCourses(keyword))

  }, [dispatch, keyword])

 
  const allCoursesRef = useRef(null);

 

  return (
    <Fragment>

      {/* <SidebarOfcave/> */}
      <div className=" course">

        {/* <div className='main'> */}

        <div className='allcourse'>
          {/* modal button */}
          <div className='preferenceBtn'>
            
          <Link to="#allCourses" onClick={courseToggle}>Show all courses {showResults ? <FontAwesomeIcon icon={faMultiply} /> : <FontAwesomeIcon icon={faEye} />} </Link>


            {preferCourses ? <PreferenceCourses /> : <div id='modalp'><span>Add your preferences </span>    {isAuthenticated ?  <AddPreference /> : <Link className='btn btn-primary' to={'/login'}>Add</Link>} </div>}
          </div>

          {/* </div> */}
        </div>


        <div className='allcourse ' ref={allCoursesRef} id="allCourses">
          {/* <Link onClick={courseToggle}>Show all courses {showResults ? <FontAwesomeIcon icon={faMultiply} /> : <FontAwesomeIcon icon={faEye} />} </Link> */}

          {showResults ? <All  /> : null}

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

        <p >All courses </p>
        <div className="container"   >
          {courses && courses.map(course => (<CourseCard key={course.id} course={course} />))}
        </div>
      </Fragment>}
    </Fragment>
  )
}
