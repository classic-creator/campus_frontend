import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCollegeCourseAction } from '../../action/collegeAdminAction'
import { Button, Popconfirm, Table, Space, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import Sidebar from './sidebar'
import TableComponent from '../layout/TableComponent'
const CollegeCourseList = () => {

    const dispatch = useDispatch()

    const { courses, loading } = useSelector(state => state.collegeCourses)

    useEffect(() => {
        dispatch(getCollegeCourseAction())
    }, [dispatch])


    const columns = [
        {
            title: 'Course Id',
            dataIndex: 'id',
            style: { background: '#1890ff', color: '#fff' },
            fixed: 'left',
            // width:10
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
        // {
        //     title: 'Fees',
        //     dataIndex: 'fees',
        //     align: "center",
        //     editable: true,
        //     // width:23
        // },
        {
            title: 'Total Seat/vacent',
            dataIndex: "seat",
            align: "center",
            editable: true,
            // width:90
        },
        {
            title: 'Eligibility',
            dataIndex: "eligibility",
            align: "center",
            editable: true,
            // width:90
        } ,
        {
            title: 'Action',
            dataIndex: "action",
            align: "center",
            // fixed:"right",
            // width:40,
            render: (_, record) =>
                rows.length >= 1 ? (
                    <Space>
                        <Link to={`/course/deashboard/${record.id}`}> <Button type='primary'> Go</Button></Link>
                        {/* <Link to={`/course/update/${record.id}`}> <Button type='primary'> Edit</Button></Link> */}
                        {/* <Popconfirm title='Are you sure you want to delete ?' onConfirm={() => handleDelete(record)}>
                        <Button danger type='primary'> Delete</Button>
                    </Popconfirm> */}
                    </Space>
                ) : null
        }

    ]

    const rows = []


    courses && courses.forEach((item) => {
        rows.push({
            id: item.id,
            name: item.courseName,
            duration: item.duration,
            // fees: item.fees,
            eligibility: item.eligibility,
            seat:item.seat_capacity +'/'+item.vacent_seat


        })
    })

    return (
        <Fragment>
        <div className="depertmentDeash">
          <Sidebar />
          <div className="dashboard">
          <div className='headdept'>
            
              <h2>All Courses</h2>
          </div>
            
            <TableComponent  columns={columns}
                    dataSource={rows}
                    loading={loading} />
            </div>
            </div>
            
        </Fragment>
    )
}

export default CollegeCourseList