import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCourseDetails } from '../../action/courseAction'

import CoverAndNav from './collegecardAndComponent/coverAndNav'

const CourseDetails = () => {

    const {error,course}=useSelector(state=>state.courseDetails)
    const dispatch=useDispatch()
    const alert =useAlert()
    const {id}=useParams()

    useEffect(() => {
      if(error){
        return alert.error(error)
      }
      
    dispatch(getCourseDetails(id))
    
    }, [dispatch,id,alert,error])
    
  
  return (
   
    
  
    <Fragment>
     <CoverAndNav college={course} />
      <h1>{course.courseName}</h1>
    </Fragment>
    
  
  
  )
}

export default CourseDetails