import React, { Fragment, useEffect } from 'react'
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from 'chart.js';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { GetCourseApplications } from '../../action/applyAction';


const CourseDeashboard = () => {


    const {id}=useParams()
    const dispatch =useDispatch()
    const {applications} =useSelector(state=>state.courseApplyList)

    useEffect(() => {
      dispatch(GetCourseApplications(id))
    }, [dispatch,id])

    ChartJS.register(...registerables);

    const admission = 4;
    const seat = 9
    const doughnutState = {
        labels: ["Admission Confirm", "Total Seat"],
        datasets: [
            {

                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [admission, seat]

            }
        ]
    }

    return (
        < Fragment>
            <div className='dashboard'>
                <Sidebar />
                <div className="dashboardSummery">
                    <div className="doughnutChat">
                        <Doughnut
                            data={doughnutState} />
                    </div>


                    <div className="dashboardSummeryBox2">
                        <Link to={ `/course/apply/${id}`}>
                            <p>admission requests</p>
                            <p>{applications && applications.length}</p>
                        </Link>

                        <Link to="/admin/orders">
                            <p>Sort List Student</p>
                            {/* <p>{orders && orders.length}</p> */}
                        </Link>


                        <Link to="/admin/users">
                            <p>Confirm Student</p>
                            {/* <p>{users && users.length}</p> */}
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseDeashboard