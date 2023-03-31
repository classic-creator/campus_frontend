import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllCourses, GetPreferedCourses, getPreferedCourses } from '../../action/courseAction';
import Loader from '../layout/loader/loader';
import CourseCard from './collegecardAndComponent/courseCard';
import "./allCourses.css"
import { Link, useParams } from 'react-router-dom';
import Search from '../layout/Search/search';
import Preference from '../user/preference';
import PreferenceCourses from './PreferenceCourses';

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

  const alert = useAlert()
  const dispatch = useDispatch();
  const { keyword } = useParams()

  const { loading, courses ,error} = useSelector(state => state.courses)

  const {isAuthenticated}=useSelector(state=>state.user)


  
 useEffect(() => {

  if (error) {
      alert.error(error);
      dispatch(clearErrors())
  }
  
  dispatch(getAllCourses(keyword))

 }, [error,alert,dispatch,keyword])
 

  return (
   <Fragment>
    {loading? <Loader/> :  <Fragment>
    
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
       <span >Courses matching with your Preference  <Preference/>
        </span>
          
       {isAuthenticated ? <PreferenceCourses/>: <p>update your preferences</p>}

      </div>
    </div>
    <div className='allcourse'>
      <Link onClick={courseToggle}>Show all courses</Link>
      {showResults ? <All /> : null}
    </div>

    

  

</Fragment>}
   </Fragment>
  )
}
export default AllCourses

const All = () => {

  const { loading, courses } = useSelector(state => state.courses)
  return (
    <Fragment>
      {loading ? <Loader /> : <Fragment>
        <p id='allCourse'>All courses</p>
        <div className="container ">
          {courses && courses.map(course => (<CourseCard course={course} />))}
        </div></Fragment>}
    </Fragment>
  )
}
