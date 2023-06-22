import { Button, Typography } from 'antd'
import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deActiveCourseAction } from '../../action/collegeAdminAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

const CourseBar = ({course,id,header}) => {

    const alert=useAlert()
    const {  loading } = useSelector(state => state.courseDetails)
    const {  loading:activeLoading, isActive } = useSelector(state => state.UpdateCourse)

    const dispatch=useDispatch()
    const DeActiveHendlar =()=>{
        dispatch(deActiveCourseAction(id))
    }
    useEffect(() => {
     if(isActive){
        alert.success("Course active status update")
     }
    }, [isActive,alert])
    
    return (


        <Fragment>
            <div>

                <Typography component="h1" className='text-center'>{header}</Typography>
                <div className='dashboardSummery'>
                    <div>
                        <Link to={`/course/deashboard/${id}`} className='dashboardSummeryP'>

                            {loading ? <Button loading={loading}></Button> : course && course.courseName}

                            <Link  className=' ms-1 ' to={`/course/update/${id}`}>  <Button className='button-all'> Edit</Button>  </Link>
                         {course && course.active===1 ?  <Button className='button-all ms-2' loading={activeLoading} type='primary' danger onClick={DeActiveHendlar}>Deactive</Button> :<Button className='button-all ms-2' type='primary' loading={activeLoading}   onClick={DeActiveHendlar}>Active</Button> }
                        </Link>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseBar