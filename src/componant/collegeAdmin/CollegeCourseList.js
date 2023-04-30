import React, { useEffect ,Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCollegeCourseAction } from '../../action/collegeAdminAction'
import { Button, Popconfirm, Table, Space, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
const CollegeCourseList = () => {

    const dispatch=useDispatch()

    const {courses,loading} =useSelector(state=>state.collegeCourses)

useEffect(() => {
   dispatch( getCollegeCourseAction())
}, [dispatch])


const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        style: { background: '#1890ff', color: '#fff' },
        fixed:'left',
        // width:10
    },
    {
        title: 'Action',
        dataIndex: "action",
        align: "center",
        // fixed:"right",
        // width:40,
        render: (_, record) =>
            rows.length >= 1 ? (
                <Space>
                     <Link to={`/course/deashboard/${record.id}`}> <Button  type='primary'> Go</Button></Link>
                    <Link to={`/course/update/${record.id}`}> <Button type='primary'> Edit</Button></Link>
                    {/* <Popconfirm title='Are you sure you want to delete ?' onConfirm={() => handleDelete(record)}>
                        <Button danger type='primary'> Delete</Button>
                    </Popconfirm> */}
                </Space>
            ) : null
    },
    {
        title: 'Name',
        dataIndex: 'name',
        align: "center",
        // fixed:'left',
        // width:50,
        editable: true,
        render: (_, record) => (
            <Link to={`/course/deashboard/${record.id}`}>{record.name}</Link>
        ),
    },
    {
        title: 'Duration'
        , dataIndex: 'duration',
        align: "center",
        editable: true,
        // width:23
    },
    {
        title: 'Fees',
        dataIndex: 'fees',
        align: "center",
        editable: true,
        // width:23
    },
    {
        title: 'Eligibility',
        dataIndex: "eligibility",
        align: "center",
        editable: true,
        // width:90
    },
   
]

const rows = []


courses && courses.forEach((item) => {
    rows.push({
        id: item.id,
        name: item.courseName,
        duration: item.duration,
        fees: item.fees,
        eligibility: item.eligibility


    })
})

  return (
   <Fragment>
   <div className="container">
   <Table
   columns={columns}
                        dataSource={rows}
                        bordered
                        loading={loading}
                        // scroll={{
                            //     x: 1300,
                            //     y: 400,
                            //   }}
                            />
                            </div>
   </Fragment>
  )
}

export default CollegeCourseList