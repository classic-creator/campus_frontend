import React, { Fragment, useEffect } from 'react'
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from 'chart.js';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmStudentAction, GetCourseApplications, getSelectedApplication } from '../../action/applyAction';
import CountUp from 'react-countup';
import { getCourseDetails } from '../../action/courseAction';
import { Button, Typography } from '@material-ui/core';
import CourseDataChange from './CourseDataChange';

const CourseDeashboard = () => {


    const { id } = useParams()
    const dispatch = useDispatch()
    const { applications } = useSelector(state => state.courseApplyList)
    const { SelectedApplication } = useSelector(state => state.selectedApplication)
    const {  course } = useSelector(state => state.courseDetails)
    const {ConfirmStudent} =useSelector(state=>state.confirmStudent)

    useEffect(() => {
        dispatch(GetCourseApplications(id))
        dispatch(getSelectedApplication(id))
        dispatch(getCourseDetails(id))
        dispatch(ConfirmStudentAction(id))
    }, [dispatch, id])

    ChartJS.register(...registerables);

    // const admission = 4;
    // const seat = 9
    const doughnutState = {
        labels: [`Admission Confirm : ${ConfirmStudent.length}`, `Vacant seat : ${course['seat_capacity']}`],
        datasets: [
            {

                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [ConfirmStudent.length,course['seat_capacity']]

            }
        ]
    }

    return (
        < Fragment>
            <div className='clgdashboard'>
               <div> <Sidebar /></div>
                <div className="dashboardContainer">
                    <CourseDataChange />
                <Typography component="h1">Course Dashboard</Typography>
                <div className='dashboardSummery'>
                    <div>
                        <p className='dashboardSummeryP'>

                            {course && course.courseName}
                        </p>

                    </div>

                    <div className="doughnutChat">
                        <Doughnut
                            data={doughnutState} />
                    </div>


                    <div className="dashboardSummeryBox2">
                        <Link to={`/course/apply/${id}`}>
                            <p>admission requests</p>
                            <CountUp end={applications && applications.length} duration={5} />
                            {/* <p>{applications && applications.length}</p> */}
                        </Link>

                        <Link to={`/application/selected/${id}`}>
                            <p>Sort List Student</p>
                            {/* <p>{SelectedApplication && SelectedApplication.length}</p> */}
                            <CountUp end={SelectedApplication && SelectedApplication.length} duration={5} />
                        </Link>


                        <Link to={`/confirm/students/${id}`}>
                            <p>Confirm Student</p>
                            <CountUp end={ConfirmStudent && ConfirmStudent.length} duration={5} />
                     
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseDeashboard