import React, { Fragment, useEffect } from 'react'
import TableComponent from '../../layout/TableComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getCoursePaymentDetailsAction } from '../../../action/paymentAction'
import {  useParams } from 'react-router-dom'
import Sidebar from '../sidebar'

import CourseBar from '../courseBar'

const CoursePaymentDetails = () => {


  const { payment_Data, loading } = useSelector(state => state.coursePayData)
  const { course } = useSelector(state => state.courseDetails)
  const dispatch = useDispatch()
  const { id } = useParams()

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      editable: true,
      fixed: 'left'
    },
    {
      title: 'Student id',
      dataIndex: 'student_id',
      align: "center",


    },
    {
      title: 'Student Name',
      dataIndex: 'student',
      align: "center",


    },

    {
      title: 'Payment id'
      , dataIndex: 'payment_id',
      align: "center",

    },
    {
      title: 'Amount'
      , dataIndex: 'amount',
      align: "center",

    },
    {
      title: 'Pay Date',
      dataIndex: "pay_date",
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
            style: { color: record.status === 'captured' ? "green" : "red" }
          },
          children: <div>{text}</div>
        };
      }
    },

    //   {
    //     title: 'Action',
    //     dataIndex: "action",
    //     align: "center"
    //     , render: (_, record) =>
    //       rows.length >= 1 ? (
    //         <Space>
    //           <Link to={`/payment/details/${record.id}`}> <Button type='primary'> Open</Button></Link>
    //         </Space>
    //       ) : null
    //   }
  ]
  const rows = []
  payment_Data && payment_Data.forEach((item) => {
    rows.push({
      id: item.id,
      student: item.name,
      student_id: item.student_id,
      payment_id: item.payment_id,
      amount: '₹' + item.amount,
      pay_date: item.created_at,
      status: item.payment_status,
    })
  })
  useEffect(() => {

    dispatch(getCoursePaymentDetailsAction(id))
  }, [dispatch,id])


  return (
    <Fragment>
      <div className='clgdashboard'>
        <div> <Sidebar /></div>
        <div className="dashboardContainer">
          {/* <CourseDataChange /> */}
         <CourseBar course={course} id={course.id} header={'Payment Details'} />
          <TableComponent columns={columns} loading={loading} dataSource={rows} />
        </div>
      </div>
    </Fragment>
  )
}

export default CoursePaymentDetails