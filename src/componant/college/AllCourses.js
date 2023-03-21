import React, { Fragment, useEffect} from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../action/courseAction';
import Loader from '../layout/loader/loader';
import CourseCard from './collegecardAndComponent/courseCard';
import "./allCourses.css"
import {  useParams } from 'react-router-dom';
import Search from '../layout/Search/search';


const AllCourses = () => {


  const alert = useAlert()
  const dispatch = useDispatch();
  const { keyword } = useParams()
  const { loading, error, courses } = useSelector(state => state.courses)



  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getAllCourses(keyword))

  }, [dispatch, alert, error, keyword])

 const c={
      link:'courses'}

  return (
    <Fragment>
      {loading ? <Loader /> : <Fragment>
        <h1>Courses</h1>
        <div className='main'>
          <div className='filters'>
            <h2> Filters </h2>

            <p>Search Course : </p>
            <Search c={c}/>

            <p>Fees</p>
            <label htmlFor="lowToHigh">Low To High</label>
            <input type="radio" id='lowToHigh' />
            <label htmlFor="hingToLow">High To Low</label>
            <input type="radio" id='hingToLow' />


          </div>


          <div className="container coursesdiv">
            {courses && courses.map(course => (<CourseCard course={course} />))}
          </div>
        </div>
      </Fragment>}
    </Fragment>
  )
}

export default AllCourses