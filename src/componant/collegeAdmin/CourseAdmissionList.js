import { Space, Table,Button } from 'antd'
import React, { Fragment, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidebar from './sidebar'

import {useDispatch, useSelector} from 'react-redux'
import { GetCourseApplications } from '../../action/applyAction'

const CourseAdmissionList = () => {
 
    const {id}=useParams()
    const dispatch =useDispatch()
    const {applications} =useSelector(state=>state.courseApplyList)

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
            editable: true
        },
        {
            title: 'district',
            dataIndex: 'district',
            align: "center",
            editable: true
        },
        // {
        //     title: 'category',
        //     dataIndex: "eligibility",
        //     align: "center",
        //     editable: true
        // },
        {
            title: 'Application Status',
            dataIndex: "admission_status",
            align: "center",
            editable: true,
           
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
            name: item.name,
            admission_status: item.admission_status,
            district: item.district,
            mark_obtain_lastExam: item.mark_obtain_lastExam


        })
    })


    return (
        <Fragment>
            <div className='dashboard'>


                <Sidebar />
                <div className="container allCourseTable" style={{ maxWidth: '100%' }}>

                    <Table
                        columns={columns}
                        dataSource={rows}
                        bordered
                        rowSelection={true}
                    />

                </div>
          
            </div>
        </Fragment>
    )
}

export default CourseAdmissionList