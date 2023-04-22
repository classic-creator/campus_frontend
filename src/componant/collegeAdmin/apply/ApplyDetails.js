import React, { Fragment, useEffect, useState } from 'react'
import './studentDetails.css'
import { Space, Table, Button } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons'
import { UpdateApplicationStatus, clearErrors } from '../../../action/applyAction'
import { useDispatch, useSelector } from 'react-redux'
import { APPLICATION_UPDATE_RESET } from '../../../constants/applyConstants'
import {useAlert} from 'react-alert'

const ApplyDetails = () => {

    const {loading,error,isUpdated}=useSelector(state=>state.applicationAction)
    const{id} = useParams()
    const [status, setStatus] = useState('')
    const dispatch=useDispatch()
    const alert=useAlert()

    const processOrder = (e)=>{
        e.preventDefault()

        const myForm = new FormData()
    
        myForm.set("admission_status", status)
    
        dispatch(UpdateApplicationStatus({myForm,id}))
    }


    useEffect(() => {
      if(isUpdated){
        dispatch({type:APPLICATION_UPDATE_RESET})
        alert.success('Application status updated')
      }

      if(error){
        alert.error(error)
        dispatch(clearErrors())
      }

    }, [isUpdated,dispatch,alert,error])
    

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            style: { background: '#1890ff', color: '#fff' },
        },
        {
            title: 'Exam Name',
            dataIndex: 'exam',
            align: "center",
            editable: true,
            render: (_, record) => (
                <Link to={`/course/deashboard/${record.id}`}>{record.name}</Link>
            ),
        },
        {
            title: 'Board/university'
            , dataIndex: 'mark_obtain_lastExam',
            align: "center",
            editable: true
        },
        {
            title: 'Roll/No',
            dataIndex: "eligibility",
            align: "center",
            editable: true
        },
        {
            title: 'Total mark',
            dataIndex: 'district',
            align: "center",
            editable: true
        },
        {
            title: 'Mark Obtain',
            dataIndex: "admission_status",
            align: "center",
            editable: true
        },
        {
            title: 'Mark-Sheet',
            dataIndex: "action",
            align: "center"
            , render: (_, record) =>
                rows.length >= 1 ? (
                    <Space>
                        <Link to={`/apply/update/${record.id}`}> <Button type='primary'> Open</Button></Link>
                    </Space>
                ) : null
        },
        {
            title: 'Certificate',
            dataIndex: "action",
            align: "center"
            , render: (_, record) =>
                rows.length >= 1 ? (
                    <Space>
                        <Link to={`/apply/update/${record.id}`}> <Button type='primary'> Open</Button></Link>
                    </Space>
                ) : null
        }
    ]

    const rows = [{
        'name': 'himangshu'
    },
    {
        'name': 'khound'
    }]


    const feesColumns = [
        {
            title: 'Id',
            dataIndex: 'id',
            style: { background: '#1890ff', color: '#fff' },
        },
        {
            title: 'Fees type',
            dataIndex: 'exam',
            align: "center",
            editable: true,
            render: (_, record) => (
                <Link to={`/course/deashboard/${record.id}`}>{record.name}</Link>
            ),
        },
        {
            title: 'Amount'
            , dataIndex: 'mark_obtain_lastExam',
            align: "center",
            editable: true
        },
        {
            title: 'Payment Status',
            dataIndex: "eligibility",
            align: "center",
            editable: true
        },
        {
            title: 'Date',
            dataIndex: 'district',
            align: "center",
            editable: true
        },
        {
            title: 'Payment Method',
            dataIndex: "admission_status",
            align: "center",
            editable: true
        },
        {
            title: 'Recept',
            dataIndex: "action",
            align: "center"
            , render: (_, record) =>
                rows.length >= 1 ? (
                    <Space>
                        <Link to={`/apply/update/${record.id}`}> <Button type='primary'> Open</Button></Link>
                    </Space>
                ) : null
        },

    ]

    return (
        <Fragment>
            <div className="ApplicatinInfo">

                <div className="profile1">
                    <h2>Himangshu Khound</h2>
                    <span>#389475398593</span>
                    <h3>75% in last exam</h3>
                    <span>Science</span>
                    <span>junior science academy , dergaon</span>

                </div>
                <div className="RightBar">
                <div >


                <form className="createProductForm" onSubmit={processOrder}>
                  <h3>Process Application </h3>

                  <div>
                    {/* <MdAccountTree /> */}
                    <FontAwesomeIcon icon={faChartColumn}/>
                    <select name='admission_status' onChange={(e) => setStatus(e.target.value)}>
                      <option value="">choose category</option>
                      <option value="acepect">Acepect</option>
                      <option value="rejected">Rejected</option>
                     {/* {order.orderStatus === "processing" && ( <option value="shipped">Shipped</option>)} */}
                     {/* {order.orderStatus==="shipped" && ( <option value="Delivered">Delivered</option>)} */}

                    
                    </select>
                  </div>
                  <Button
                    id="createProductBtn"
                    type="submit"
                    onClick={processOrder}
                    // disabled={loading ? true : false || status === "" ? true : false}
                    >
                    Process

                  </Button>
                </form>
              </div>
                </div>
            </div>
            <div className="deabord">
                <div className="profile2 container">
                    <h2>Acadamic</h2>

                    <div className="allCourseTable" >

                        <Table
                            columns={columns}
                            dataSource={rows}
                            bordered
                            scroll={{
                                x: 1000,
                                // y: 400,
                              }}
                            // style={{ width: '100%', height: '100%' }}
                        />

                    </div>

                    <h2>Payment History</h2>
                    <div className="allCourseTable"style={{overflowX:'auto' }} >

                        <Table
                            columns={feesColumns}
                            dataSource={rows}
                            bordered
                            scroll={{
                                x: 1000,
                                // y: 400,
                              }}
                            // style={{ width: '100%', height: '100%' }}
                        />

                    </div>

                </div>

                <div className="container">
                    {/* <h2>Files given by Applicant</h2> */}
                </div>
            </div>


        </Fragment>
    )
}

export default ApplyDetails