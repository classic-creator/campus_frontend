import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCollegesDetails } from '../../action/collegeAction'

import CourseCard from './collegecardAndComponent/courseCard'
import CoverAndNav from './collegecardAndComponent/coverAndNav'
import Imgcarousel from './collegecardAndComponent/Imgcarousel'
import ImportantLinkCard from './collegecardAndComponent/importantLinkCard'


const Courses = () => {

  const dispatch = useDispatch()
  const { error, courses, college } = useSelector(state => state.collegeDetails);
  const { id } = useParams()
  const alert = useAlert()


  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getCollegesDetails(id))
  }, [dispatch, id, alert, error])

  return (
    <Fragment>
      <CoverAndNav college={college} />

      <div className="detailContainer">
        <div className="detailsdiv-1 container">
          {courses && courses.map(course => (<CourseCard course={course} />))}
        </div>
        <div>

          <ImportantLinkCard />
          <Imgcarousel />
        </div>
      </div>

    </Fragment>
  )
}

export default Courses