import React, { Fragment, useEffect } from 'react'
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from 'chart.js';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmStudentAction, GetCourseApplications, getSelectedApplication } from '../../action/applyAction';
import CountUp from 'react-countup';
import { getCourseDetails } from '../../action/courseAction';
import {  Typography } from '@material-ui/core';
import { Button, Space } from 'antd';
import CourseDataChange from './CourseDataChange';
import TableComponent from '../layout/TableComponent';
import { getCoursePaymenthistoryAction } from '../../action/paymentAction';

const CourseDeashboard = () => {


    const { id } = useParams()
    const dispatch = useDispatch()
    const { applications } = useSelector(state => state.courseApplyList)
    const { SelectedApplication } = useSelector(state => state.selectedApplication)
    const {  course ,loading } = useSelector(state => state.courseDetails)
    const {ConfirmStudent} =useSelector(state=>state.confirmStudent)
    const {payments,loading:feesLoading} =useSelector(state=>state.payments)
   
  
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

    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          editable: true,
          fixed: 'left'
        },
        {
          title: 'Fees Type',
          dataIndex: 'fees_type',
          align: "center",
        
        
        },
        {
          title: 'Amount'
          , dataIndex: 'amount',
          align: "center",
      
        },
        {
          title: 'Last Date',
          dataIndex: "last_date",
          align: "center", 
      },
        {
          title: 'Status',
          dataIndex: "status",
          align: "center", 
          editable: true,
          render(text, record) {
            return {
              props: {
                style: { color: record.status==='active'? "green" : "red"  }
              },
              children: <div>{text}</div>
            };
          }
      },

      {
          title: 'Total Student/Registrant',
          dataIndex: "StudentDetails",
          align: "center",  
      },
        {
          title: 'Action',
          dataIndex: "action",
          align: "center"
          , render: (_, record) =>
            rows.length >= 1 ? (
              <Space>
                <Link to={`/payment/details/${record.id}`}> <Button type='primary'> Open</Button></Link>
              </Space>
            ) : null
        }
      ]
    
      const rows = []
    
    
      payments && payments.forEach((item) => {
        rows.push({
          id: item.id,
          fees_type: item.fees_type,
          amount: '₹'+ item.amount,
          last_date:item.last_date,
          status:item.active_status,
          StudentDetails:item.totalStudents +'/'+item.feePaymentStudent
        
        })
      })

    useEffect(() => {
        dispatch(GetCourseApplications(id))
        dispatch(getSelectedApplication(id))
        dispatch(getCourseDetails(id))
        dispatch(ConfirmStudentAction(id))
        dispatch(getCoursePaymenthistoryAction(id))
    }, [dispatch, id])

    return (
        < Fragment>
            <div className='clgdashboard'>
               <div> <Sidebar /></div>
                <div className="dashboardContainer">
                    {/* <CourseDataChange /> */}
                <Typography component="h1">Course Dashboard</Typography>
                <div className='dashboardSummery'>
                    <div>
                        <p className='dashboardSummeryP'>

                         {loading ? <Button loading={loading}></Button> :  course && course.courseName}

                    <Link className='btn btn-secondary ms-3 setting-btn' to={`/course/update/${id}`}>Settings</Link>
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
            <div className="container-fluid">
                <div className='tableHeader-with-button ' >
                <h3 className='m-3 text-center'>Active Fees / Fees History</h3>
                 <Link className='btn btn-paimary' to={`/add/new/fees/${id}`}> New Fees Request </Link>
                </div>
                <TableComponent columns={columns} loading={feesLoading} dataSource={rows}/>
            </div>
        </Fragment>
    )
}

export default CourseDeashboard