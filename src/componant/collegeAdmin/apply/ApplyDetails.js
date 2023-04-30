import React, { Fragment, useEffect, useState } from 'react'
import './studentDetails.css'
import { Space, Table, Button } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons'
import { GetApplicationDetails, UpdateApplicationStatus, clearErrors } from '../../../action/applyAction'
import { useDispatch, useSelector } from 'react-redux'
import { APPLICATION_UPDATE_RESET } from '../../../constants/applyConstants'
import {useAlert} from 'react-alert'
import Loader from '../../layout/loader/loader'
const ApplyDetails = () => {

    const {loading,error,isUpdated}=useSelector(state=>state.applicationAction)
    const {loading:applicationLoading,application}=useSelector(state=>state.applicationDetails)
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
        // dispatch(GetApplicationDetails(id))
        alert.success('Application status updated') 
      }

      if(error){
        alert.error(error)
        dispatch(clearErrors())
      }

      dispatch(GetApplicationDetails(id))
    }, [isUpdated,dispatch,alert,error,id])
    

    const columns = [
        // {
        //     title: 'Id',
        //     dataIndex: 'id',
        //     style: { background: '#1890ff', color: '#fff' },
        // },
        {
            title: 'Exam Name',
            dataIndex: 'name',
            align: "center",
            editable: true,
            render: (_, record) => (
                <Link to={`/course/deashboard/${record.id}`}>{record.name}</Link>
            ),
        },
        {
            title: 'Board/university'
            , dataIndex: 'board',
            align: "center",
            editable: true
        },
        {
            title: 'Roll/No',
            dataIndex: "rollNo",
            align: "center",
            editable: true
        },
        {
            title: 'Total mark',
            dataIndex: 'totalMark',
            align: "center",
            editable: true
        },
        {
            title: 'Mark Obtain',
            dataIndex: "markObtain",
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
        'name': 'HSLC',
        board:application && application.class10_board,
        rollNo:`${application && application.class10_roll} / ${application && application.class10_no}`,
        totalMark:application && application.class10_totalMark,
        markObtain:application && application.class10_markObtain
        
        
    },
    {
        'name': 'HSSLC',
        board:application && application.class12_board,
        rollNo:`${application && application.class12_roll} / ${application && application.class12_no}`,
        totalMark:application && application.class12_totalMark,
        markObtain:application && application.class12_markObtain
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
            editable: true,
          
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
    //    <Fragment>
    //     {applicationLoading ? <Loader/> : 
         <Fragment>
            <div className="ApplicatinInfo">

                <div className="profile1">
                    <div className="profile11">

                    <h2>{ application && application.first_name}{' '}{application && application.middle_name}{' '}{application && application.last_name}</h2>
                    <span className='smlspan'>#{ application && application.id}</span>
                    <span className='smlspan'>{ application && application.email}</span>
                    <p>Application Status :<span className={ application && application.admission_status==='Selected'?'greenColor':'redColor'}>  {application && application.admission_status}</span></p> 
                    <p>Payment Status : <span className={ application && application.payment_status==='paid'?'greenColor':'redColor'}>{application && application.payment_status}</span> </p>
             
                    </div>
                    <div className="profile12">

                    <h3>{application && application.mark_obtain_lastExam}% in last exam</h3>
                    <span>{application && application.qualification==='hs' ? application.class12_strem : ''}</span>
                    <span>{application && application.qualification==='hs' ? (application && application.class12_college ):(application && application.class10_school)}</span>
                    </div>

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
                      <option value="Selected">Selected</option>
                      <option value="Rejected">Rejected</option>
                     {/* {order.orderStatus === "processing" && ( <option value="shipped">Shipped</option>)} */}
                     {/* {order.orderStatus==="shipped" && ( <option value="Delivered">Delivered</option>)} */}

                    
                    </select>
                  </div>
               <Button
                    id="createProductBtn"
                    type="submit"
                    onClick={processOrder}
                    loading={loading}
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
                            // style={{ text-terns }}
                        />

                    </div>

                </div>

                <div className="container">
                    {/* <h2>Files given by Applicant</h2> */}
                </div>
            </div>


        </Fragment>
    // }
    //    </Fragment>
    )
}

export default ApplyDetails