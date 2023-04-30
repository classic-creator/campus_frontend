import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearErrors, GetPreferedCourses } from '../../action/courseAction';
import Loader from '../layout/loader/loader';
import CourseCard from './collegecardAndComponent/courseCard';
import UpdatePreference from '../user/updatePreference';

const PreferenceCourses = () => {

  const { loading, preferCourses, error } = useSelector(state => state.preferedCourse)
  const dispatch = useDispatch()
  const { keyword } = useParams()
  const alert = useAlert()


  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

    dispatch(GetPreferedCourses(keyword))

  }, [error, alert, dispatch, keyword])


  return (

    <Fragment>
      {loading ? <Loader /> : <Fragment>
      <span id='modalp' >Courses matching with your Preference  <UpdatePreference/></span>
        <div className="coursesdiv prefered">
        {preferCourses && preferCourses.map(course => (<CourseCard course={course} />))}
      </div></Fragment>}

    </Fragment>
  )
}

export default PreferenceCourses