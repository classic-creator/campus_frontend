import { Button, Typography } from 'antd'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const CourseBar = ({course,id,loading,header}) => {
    return (
        <Fragment>
            <div>

                <Typography component="h1" className='text-center'>{header}</Typography>
                <div className='dashboardSummery'>
                    <div>
                        <Link to={`/course/deashboard/${id}`} className='dashboardSummeryP'>

                            {loading ? <Button loading={loading}></Button> : course && course.courseName}

                            <Link className='btn btn-secondary ms-3 setting-btn' to={`/course/update/${id}`}>Edit</Link>
                        </Link>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseBar