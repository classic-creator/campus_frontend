import React, { Fragment, useEffect, useState } from 'react'
import Sidebar from './sidebar'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDepertmentCourseAction } from '../../action/collegeAdminAction'
import { Button, Popconfirm, Table, Space, Form, Input } from 'antd'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'



const DepertmentDetails = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const {loading, courses} = useSelector(state => state.depertments)
    
    // const [gridData, setGridData] = useState([])
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getDepertmentCourseAction(id))
    }, [dispatch, id])



    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            style: { background: '#1890ff', color: '#fff' },
            fixed:'left',
            width:10
        },
        {
            title: 'Action',
            dataIndex: "action",
            align: "center",
            // fixed:"right",
            width:40,
            render: (_, record) =>
                rows.length >= 1 ? (
                    <Space>
                         <Link to={`/course/deashboard/${record.id}`}> <Button  type='primary'> Go</Button></Link>
                        <Link to={`/course/update/${record.id}`}> <Button type='primary'> Edit</Button></Link>
                        <Popconfirm title='Are you sure you want to delete ?' onConfirm={() => handleDelete(record)}>
                            <Button danger type='primary'> Delete</Button>
                        </Popconfirm>
                    </Space>
                ) : null
        },
        {
            title: 'Name',
            dataIndex: 'name',
            align: "center",
            // fixed:'left',
            width:50,
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
            width:23
        },
        {
            title: 'Fees',
            dataIndex: 'fees',
            align: "center",
            editable: true,
            width:23
        },
        {
            title: 'Eligibility',
            dataIndex: "eligibility",
            align: "center",
            editable: true,
            width:90
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


    const handleDelete = (value) => {

    }


    return (
        <Fragment>
            <div className='dashboard'>

                <Sidebar />
                <div className="container">

               
                    <h2>Registered Courses</h2>
                <div className="allCourseTable" style={{overflowX:'auto' }}>
                    <Table
                        columns={columns}
                        dataSource={rows}
                        bordered
                        loading={loading}
                        scroll={{
                            x: 1300,
                            y: 400,
                          }}
                    />

                </div>
                <Link to={`/register/course/${id}`}>Add Course</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default DepertmentDetails