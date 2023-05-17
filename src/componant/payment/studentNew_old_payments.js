import React, { Fragment, useEffect } from 'react'
import TableComponent from '../layout/TableComponent';
import { Button, Space } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentNewPaymentAction, getStudentPayHistory } from '../../action/paymentAction';
// import Razorpay from 'razorpay'
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

const StudentNew_old_payments = () => {

const {new_payments,loading}=useSelector(state=>state.stdNewPayments)
const {paymentsHistory,loading:historyloading}=useSelector(state=>state.paymentData)
const {user}=useSelector(state=>state.user)
const dispatch=useDispatch()
const {id}=useParams()


const hendelPayment=async (datas)=>{
  
  const {data:{key}}= await axios.get('/api/get/razorpay/key')
  const token = localStorage.getItem('token');
  const config = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`
    },
  };

const {data:{orderId,orderAmount}}=  await axios.post(`/api/process/payment/${datas.id}`, datas, config)
 
const options={
  key:key,
  amount:orderAmount,
 
  currency:'INR',
  name:'CAMPUS',
  description:'test transistion',
  order_id: orderId,
  callback_url:'http://127.0.0.1:8000/api/payment/varification',
  prefill:{
    name:user.name,
    email:user.email,
    contact:'9365665169'
  },

notes:{
  'address':'nic north lakhimpur',
  'fees_id':datas.id,
  'user_id':user.id,
 
},
custom_fields: [
  {
    "display_name": "Fees ID",
    "variable_name": "fees_id",
    "value": datas.id
  }
]

}

 const rzp = new window.Razorpay(options);
  rzp.open();

}



  const columns = [
    {
      title: 'Fees Id',
      dataIndex: 'id',
      
      editable: true,
      fixed: 'left',
      key: 'id',
    },
    {
      title: 'Fees Type',
      dataIndex: 'fees_type',
      align: "center",
      // key: 'fees_type',
      
      
    },
    {
      title: 'Amount'
      , dataIndex: 'amount',
      align: "center",
      // key: 'amount',
      
      
    },
    {
      title: 'Last Date',
      dataIndex: "last_date",
      align: "center",
      // key: 'last_date',
    },



    {
      title: 'Action',
      dataIndex: "action",
      align: "center",
      // key:'action'
       render: (_, record) =>
        rows.length >= 1 ? (
          <Space>
            <Button type='primary' id='rzp-button1' onClick={() => hendelPayment(record)}> Pay now</Button>
          </Space>
        ) : null
    }
  ]

  const rows = []


  new_payments && new_payments.forEach((item) => {
    rows.push({
      key: item.id,
      id: item.id,
      fees_type: item.fees_type,
      amount:  item.amount,
      last_date:item.last_date,
    
    })
  })


  const hiatorycolumns = [
    {
      title: 'Fees Id',
      dataIndex: 'fees_id',
      key: 'id',
      editable: true,
      fixed: 'left'
    },
    {
      title: 'Payment Id',
      dataIndex: 'payment_id',
      // key: 'payment_id',
      editable: true,

      align: "center",
    },

    {
      title: 'Status',
      dataIndex: 'status',
      // key: 'status',
      align: "center",


    },
    {
      title: 'Fees Type',
      dataIndex: 'fees_type',
      // key: 'status',
      align: "center",


    },
    {
      title: 'Amount'
      , dataIndex: 'amount',
      // , key: 'amount',
      align: "center",

    },
    {
      title: 'Payment Date',
      dataIndex: "date",
      // key: "last_date",
      align: "center",
    },



    {
      title: 'Action',
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <Space>
          <Link to={`/pay/fees/${record.id}`}>
            <Button type='primary'>Download receipt</Button>
          </Link>
        </Space>
      )
    }
  ]

  const historyrows = []

  paymentsHistory && paymentsHistory.forEach((item)=>{
    historyrows.push({
      key: item.payment_id,
      payment_id: item.payment_id,
      fees_id:item.fees_id,
      status:item.payment_status,
      date:item.created_at,
      amount:item.amount,
      fees_type:item.fees_type,

  })

  })
  useEffect(() => {
   dispatch(getStudentNewPaymentAction(id))
   dispatch(getStudentPayHistory(id))
  }, [id,dispatch])
  

  return (
    <Fragment>
      <div className='container'>

      <h3 className='m-4 text-center'>New Panding Payment</h3>
      <TableComponent columns={columns}  loading={loading} dataSource={rows} />
      <h3 className='m-4 text-center'>Payment History</h3>
      <TableComponent columns={hiatorycolumns} loading={historyloading} dataSource={historyrows} />
      </div>

    </Fragment>
  )
}

export default StudentNew_old_payments