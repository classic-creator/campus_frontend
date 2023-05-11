import { Space, Table,Button } from 'antd'
import React, { Fragment, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../sidebar'

import {useDispatch, useSelector} from 'react-redux'
import { GetCourseApplications } from '../../../action/applyAction'
import TableComponent from '../../layout/TableComponent'

const CourseAdmissionList = () => {
 
    const {id}=useParams()
    const dispatch =useDispatch()
    const {applications,loading} =useSelector(state=>state.courseApplyList)

    useEffect(() => {
      dispatch(GetCourseApplications(id))
    }, [dispatch,id])
    

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            style: { background: '#1890ff', color: '#fff' },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            align: "center",
            editable: true,
            render: (_, record) => (
                <Link to={`/course/deashboard/${record.id}`}>{record.name}</Link>
              ),
        },
        {
            title: 'Parcentage'
            , dataIndex: 'mark_obtain_lastExam',
            align: "center",
            editable: true,
            render(text, record) {
                return {
                 
                  children: <div>{text}%</div>
                };
              }
        },
        {
            title: 'Address',
            dataIndex: 'circle_office',
            align: "center",
            editable: true
        },
        {
            title: 'Cast',
            dataIndex: "eligibility",
            align: "center",
            editable: true
        },
        {
            title: 'DOB',
            dataIndex: "dob",
            align: "center",
            editable: true,
          
           
        },
        {
            title: 'Payment Status',
            dataIndex: "admission_payment_status",
            align: "center",
            editable: true,
            render(text, record) {
                return {
                  props: {
                    style: { color: record.admission_payment_status==='paid'? "green" : "red" }
                  },
                  children: <div>{text}</div>
                };
              }
           
        },
        {
            title: 'Action',
            dataIndex: "action",
            align: "center"
            ,render:(_,record)=>
            rows.length>=1 ? (
               <Space>                
                  <Link to={`/apply/update/${record.id}`}> <Button  type='primary'> Open</Button></Link>
               </Space>
            ):null
        }
    ]

    const rows = []


    applications && applications.forEach((item) => {
        rows.push({
            id: item.id,
            name: item.first_name + ' '+item.middle_name+' ' + item.last_name,
            mark_obtain_lastExam: item.mark_obtain_lastExam,
            admission_status: item.admission_status,
            admission_payment_status: item.admission_payment_status,
            circle_office:item.circle_office,
            dob:item.dob


        })
    })


    return (
        <Fragment>
    <div className="depertmentDeash">
      <Sidebar />
      <div className="dashboard">
      <div className='headdept'>
        
          <h2>Application request</h2>
          {applications && applications.length>0?  <span>{applications[0].courseName}</span>:null}
      </div>
        
        <TableComponent columns={columns}
            dataSource={rows} loading={loading} />
      </div>
    </div>
    </Fragment>
    )
}

export default CourseAdmissionList