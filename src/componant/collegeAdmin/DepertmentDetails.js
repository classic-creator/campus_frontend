import React, { Fragment, useEffect, useState } from 'react'
import Sidebar from './sidebar'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDepertmentCourseAction } from '../../action/collegeAdminAction'
import { Button, Popconfirm, Table,Space,Form,Input } from 'antd'



const DepertmentDetails = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const { courses } = useSelector(state => state.depertments)
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
        },
        {
            title: 'Name',
            dataIndex: 'name',
            align: "center",
            editable: true,
            render: (_, record) => (
                <Link to={`/course/${record.id}`}>{record.name}</Link>
              ),
        },
        {
            title: 'Duration'
            , dataIndex: 'duration',
            align: "center",
            editable: true
        },
        {
            title: 'Fees',
            dataIndex: 'fees',
            align: "center",
            editable: true
        },
        {
            title: 'Eligibility',
            dataIndex: "eligibility",
            align: "center",
            editable: true
        },
        {
            title: 'Action',
            dataIndex: "action",
            align: "center"
            ,render:(_,record)=>
            rows.length>=1 ? (
               <Space>
                 <Popconfirm title='Are you sure you want to delete ?' onConfirm={()=>handleDelete(record)}>
                    <Button danger type='primary'> Delete</Button>
                </Popconfirm>
                  <Link to={`/course/update/${record.id}`}> <Button  type='primary'> Edit</Button></Link>
               </Space>
            ):null
        }
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


const handleDelete =(value)=>{
   
}


    return (
        <Fragment>
            <div className='dashboard'>

                <Sidebar />
                <div className="container allCourseTable" style={{ maxWidth: '100%' }}>

                    <Table
                    columns={columns}
                    dataSource={rows}
                    bordered
                    
                    />

                </div>
                <Link to={`/register/course/${id}`}>Add Course</Link>
            </div>
        </Fragment>
    )
}

export default DepertmentDetails