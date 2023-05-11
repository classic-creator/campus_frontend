import React, { Fragment, useEffect } from 'react'
import Sidebar from './sidebar'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDepertmentCourseAction } from '../../action/collegeAdminAction'
import { Button, Popconfirm,Space } from 'antd'

import TableComponent from '../layout/TableComponent'



const DepertmentDetails = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const {loading, courses} = useSelector(state => state.depertments)
   

    useEffect(() => {
        dispatch(getDepertmentCourseAction(id))
    }, [dispatch, id])



    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            style: { background: '#1890ff', color: '#fff' },
            fixed:'left',
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
        }, {
            title: 'Action',
            dataIndex: "action",
            align: "center",
           
            render: (_, record) =>
                rows.length >= 1 ? (
                    <Space>
                         <Link to={`/course/deashboard/${record.id}`}> <Button  type='primary'> Go</Button></Link>
                        {/* <Link to={`/course/update/${record.id}`}> <Button type='primary'> Edit</Button></Link> */}
                        <Popconfirm title='Are you sure you want to delete ?' onConfirm={() => handleDelete(record)}>
                            <Button danger type='primary'> Delete</Button>
                        </Popconfirm>
                    </Space>
                ) : null
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
        <div className="depertmentDeash">
          <Sidebar />
          <div className="dashboard">
          <div className='headdept'>
            
              <h2>Registered Course </h2>
            {courses && courses.length>0 ?  <span>{ courses[0].depertment_name }</span> : null}
          </div>
               
                <TableComponent  columns={columns}
                        dataSource={rows}
                      
                        loading={loading}/>
                <Link to={`/register/course/${id}`}>Add Course</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default DepertmentDetails