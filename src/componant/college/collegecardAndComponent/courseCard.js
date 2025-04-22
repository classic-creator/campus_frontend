import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import "./courseCard.css"

const CourseCard = ({course,college}) => {

 

  
  return (
   <Fragment>
     
     <div className="card courseCard " >
      <div className="coursecard_body">
        <h2 >{course.courseName}</h2>
       
       {college ? <div className="clgname"><img src={college.logo_image_url} alt="" /><h3 >{college.collegeName}</h3></div> :  <div className="clgname"><img src={course.image_path} alt="" /><h3>{course.collegeName}</h3></div> }
        <p> <FontAwesomeIcon icon={faLocationPin}/> {course.address} , {course.city}</p>
        <p>  {course.depertment_name}</p>
        <p>Duration: {course.duration}year</p>
      </div>
    <div className='coursecard_body_2'>

        <p>Application fees: {course.admission_fees}</p>
        <p>Admission fees: {course.application_fees}</p>
    
        <Link to={`/course/${course.id}`} className="btn applybtn btn-primary">Details/Apply</Link>
    </div>
        
    </div>

   </Fragment>
  )
}

export default CourseCard