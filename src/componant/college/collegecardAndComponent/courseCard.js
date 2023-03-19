import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import "./courseCard.css"

const CourseCard = ({course}) => {

 

  
  return (
   <Fragment>
     
     <div className="card  ">
      <div className="coursecard_body">
        <h2 >{course.courseName}</h2>
        <span>with</span> <h3>{course.collegeName}</h3>
      </div>
    <div className='coursecard_body_2'>

        <p>Duration : {course.duration}</p>
        <p>Fees : {course.fees}</p>
    
        <Link to={`/course/${course.id}`} className="btn btn-primary">Go somewhere</Link>
    </div>
        
    </div>

   </Fragment>
  )
}

export default CourseCard