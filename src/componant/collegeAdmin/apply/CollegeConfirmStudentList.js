
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../sidebar'

import { Link } from 'react-router-dom'

import { Button, Space } from 'antd'
import { myCollegeAction } from '../../../action/collegeAdminAction'
import TableComponent from '../../layout/TableComponent'

const CollegeConfirmStudentList = () => {

    const dispatch = useDispatch()

     const { clgConfirmApplication, loading } = useSelector(state => state.myCollege)
    
  
    useEffect(() => {

      
        dispatch(myCollegeAction())
    }, [dispatch])
 
  
     
const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      // width: 50,
      fixed: 'left',
      key:'id'

    },
    {
      title: 'Name',
      dataIndex: 'name',
      align: "center",
      editable: true,
      render: (_, record) => (
        <Link to={`/depertment/${record.id}`}>{record.name}</Link>
      ),
    },
    {
      title: 'Course Name'
      , dataIndex: 'course',
      align: "center",
      editable: true
    },
    {
      title: 'Depertment Name'
      , dataIndex: 'depertment',
      align: "center",
      editable: true
    },
    {
      title: 'Last exam'
      , dataIndex: 'last_exam',
      align: "center",
      editable: true
    },
    {
      title: 'Mark obtain'
      , dataIndex: 'last_exam_mark',
      align: "center",
      editable: true
    },
     {
      title: 'Action',
      dataIndex: "action",
      align: "center"
      , render: (_, record) =>
        rows.length >= 1 ? (
          <Space>
            {/* <Popconfirm title='Are you sure you want to delete ?'> */}
            <Link to={`/apply/update/${record.id}`}> <Button type='primary'> Go</Button></Link>
            {/* </Popconfirm> */}
           
          </Space>
        ) : null
    }
  ]

  const rows = []


    clgConfirmApplication && clgConfirmApplication.forEach((item) => {
        rows.push({
          id: item.id,
          name: item.first_name +' '+item.middle_name+' '+item.last_name,
          depertment: item.depertment_name,
          course: item.courseName,
          last_exam:item.qualification,
          last_exam_mark:item.mark_obtain_lastExam

        })
      })

  return (
    <Fragment>
    <div className="depertmentDeash">
      <Sidebar />
      <div className="dashboard">
      <div className='headdept'>
        
          <h2>Enrolled students</h2>
      </div>
        
        <TableComponent  columns={columns}
            dataSource={rows} loading={loading}/>
      </div>
    </div>
    </Fragment>
  )
}

export default CollegeConfirmStudentList