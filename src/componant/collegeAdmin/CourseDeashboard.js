import React, { Fragment, useEffect } from 'react'
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from 'chart.js';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmStudentAction, GetCourseApplications, getSelectedApplication } from '../../action/applyAction';
import CountUp from 'react-countup';
import { getCourseDetails } from '../../action/courseAction';

import { Button, Popconfirm, Space, Tag } from 'antd';

import TableComponent from '../layout/TableComponent';
import { clearErrors, getCoursePaymenthistoryAction, updateFeesStatusAction } from '../../action/paymentAction';
import { CLOSED_PAYMENT_RESET } from '../../constants/paymentConsttants';
import { useAlert } from 'react-alert';
import CourseBar from './courseBar';

const CourseDeashboard = () => {


    const { id } = useParams()
    const dispatch = useDispatch()
    const alert=useAlert()
    const { course_applications } = useSelector(state => state.courseApplyList)
    const { SelectedApplication } = useSelector(state => state.selectedApplication)
    const {  course ,loading } = useSelector(state => state.courseDetails)
    const {ConfirmStudent} =useSelector(state=>state.confirmStudent)
    const {payments,loading:feesLoading} =useSelector(state=>state.payments)

    const {isUpdated,error:updateError,loading:updateLoading}=useSelector(state=>state.closePayment)
   
  
    ChartJS.register(...registerables);

    // const admission = 4;
    // const seat = 9
    const doughnutState = {
        labels: [`Admission Confirm : ${ConfirmStudent.length}`, `Vacant seat : ${course['seat_capacity']}`],
        datasets: [
            {

                backgroundColor: ["#00FF00", "#FF0000"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [ConfirmStudent.length,course['seat_capacity']]

            }
        ]
    }

const ClodePayment=(record)=>{

  dispatch(updateFeesStatusAction(record.id))

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
        
          render:(_, { status }) => {
            let color = status === 'active' ? 'green' : 'red';
            return <Tag color={color} key={status}>{status}</Tag>;
          }
      },

      {
          title: 'Registrant/Total Student',
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
                <Link to={`/payment/details/${record.id}`}> <Button type='primary'> Details</Button></Link>
                  <Popconfirm  onConfirm={() => ClodePayment(record)} title='Are you sure you want to Closed ?'>
                  <Button loading={updateLoading} type='primary' danger > Closed</Button>
                </Popconfirm>
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
          StudentDetails:item.feePaymentStudent +'/'+item.totalStudents
        
        })
      })

    useEffect(() => {
        dispatch(GetCourseApplications(id))
        dispatch(getSelectedApplication(id))
        dispatch(getCourseDetails(id))
        dispatch(ConfirmStudentAction(id))
        dispatch(getCoursePaymenthistoryAction(id))

        if(isUpdated){
          dispatch({type:CLOSED_PAYMENT_RESET})
          alert.success('Closed Payment Request Successfully')
        }
        if(updateError){
          alert.error(updateError)
          dispatch(clearErrors())
        }
    }, [dispatch,updateError, id,alert,isUpdated])

    return (
        < Fragment>
            <div className='clgdashboard'>
               <div> <Sidebar /></div>
                <div className="dashboardContainer">
                    {/* <CourseDataChange /> */}
                
                <CourseBar course={course} header={'Course Deashboard'} id={id} />
                <div className='dashboardSummery'>
                    <div className="doughnutChat">
                        <Doughnut
                            data={doughnutState} />
                    </div>


                    <div className="dashboardSummeryBox2">
                        <Link to={`/course/apply/${id}`}>
                            <p>admission requests</p>
                            <CountUp end={course_applications && course_applications.length>1 && course_applications.length} duration={5} />
                            {/* <p>{course_applications && course_applications.length}</p> */}
                        </Link>

                        <Link to={`/application/selected/${id}`}>
                            <p>Sort List Student</p>
                            {/* <p>{SelectedApplication && SelectedApplication.length}</p> */}
                            <CountUp end={SelectedApplication && SelectedApplication.length} duration={5} />
                        </Link>


                        <Link to={`/confirm/students/${id}`}>
                            <p>Enrolled Student</p>
                            <CountUp end={ConfirmStudent && ConfirmStudent.length} duration={5} />
                     
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className='tableHeader-with-button ' >
                <h3 className='me-2  text-center'>Active Fees / Fees History</h3>
                 <Link  to={`/add/new/fees/${id}`}><Button className='button-all'> New Fees Request</Button> </Link>
                </div>
                <TableComponent columns={columns} loading={feesLoading} dataSource={rows}/>
            </div>
        </Fragment>
    )
}

export default CourseDeashboard