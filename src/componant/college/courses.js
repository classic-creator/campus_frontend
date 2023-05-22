import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { clearErrors, getCollegesDetails } from '../../action/collegeAction'



import CourseCard from './collegecardAndComponent/courseCard'
import CoverAndNav from './collegecardAndComponent/coverAndNav'
import Imgcarousel from './collegecardAndComponent/Imgcarousel'
import ImportantLinkCard from './collegecardAndComponent/importantLinkCard'


const Courses = () => {

  const dispatch = useDispatch()
  const { error, courses, college } = useSelector(state => state.collegeDetails);
  const { id } = useParams()
  const alert = useAlert()

  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
  };

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getCollegesDetails(id))
  }, [dispatch, id, alert, error])

  return (
    <Fragment>
      <CoverAndNav college={college} />

      <div className="detailContainer">
        <div className="depertmentbar">
        
           <h3>Departments</h3>

            {courses && [...new Set(courses.map(course => course.depertment_name))]
              .map(department => (
                <Link onClick={() => handleDepartmentClick(department)}>
                  {department}
                </Link>

              ))}


          
        </div>
        <div className="detailsdiv-1 container">
         
          {courses &&
            courses
              .filter((course) => course.depertment_name === selectedDepartment || selectedDepartment === "")
              .map((course) => <CourseCard course={course}  college={college} />)}
        </div>
        <div>

          {/* <ImportantLinkCard /> */}
          <Imgcarousel />
        </div>
      </div>

    </Fragment>

  )
}

export default Courses