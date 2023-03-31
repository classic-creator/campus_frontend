import { faLocation, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import "./courseCard.css"

const CourseCard = ({course,college}) => {

 

  
  return (
   <Fragment>
     
     <div className="card">
      <div className="coursecard_body">
        <h2 >{course.courseName}</h2>
        <span className='mr-2'>with</span>
       {college ? <h3>{college.collegeName}</h3> :  <h3>{course.collegeName}</h3> }
        <p> <FontAwesomeIcon icon={faLocationPin}/> {course.address}</p>
      </div>
    <div className='coursecard_body_2'>

        <p>Duration : {course.duration}</p>
        <p>Fees : {course.fees}</p>
    
        <Link to={`/course/${course.id}`} className="btn btn-primary">Details/Apply</Link>
    </div>
        
    </div>

   </Fragment>
  )
}

export default CourseCard