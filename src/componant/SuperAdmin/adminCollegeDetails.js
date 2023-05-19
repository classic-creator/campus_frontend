import React, { Fragment, useEffect } from 'react'
import AdminSidebar from './adminSidebar'
import TableComponent from '../layout/TableComponent'
import { useDispatch, useSelector } from 'react-redux'
import { adminCollegeDetailsAction, clearErrors, getAllcollegesAction, getAlluserAction } from '../../action/adminAction'
import { useAlert } from 'react-alert'
import { Button, Image, Space } from 'antd'
import { Link, useParams } from 'react-router-dom'

const CollegeCourses = () => {

    const {loading,collegeDetails,courses,error}=useSelector(state=>state.admincollegedetail)
    const dispatch=useDispatch()
    const alert=useAlert()
    const {id}=useParams()

    const columns = [
        {
          title: 'Course Id',
          dataIndex: 'id',
          // width: 50,
          key:'id',
          fixed: 'left'
        },
        {
          title: 'Course Name',
          dataIndex: 'name',
          align: "center",
          editable: true,
    
        },
        
        
        {
          title: 'Duration',
          dataIndex: 'duration',
          align: "center",
          editable: true,
    
        },
        {
          title: 'Vacent/Total Seat',
          dataIndex: 'seat',
          align: "center",
          editable: true,
    
        },
        {
          title: 'Applicatio Fees',
          dataIndex: 'application_fees',
          align: "center",
          editable: true,
    
        },
        {
          title: 'Admission Fees',
          dataIndex: 'admission_fees',
          align: "center",
          editable: true,
    
        },
       
    
        {
          title: 'Action',
          dataIndex: "action",
          align: "center"
          , render: (_, record) =>
            rows.length >= 1 ? (
              <Space>
                
                <Link to={`/course/${record.id}`}><Button type='primary' loading={loading} > Go </Button>
                </Link>  
                {/* <Button onClick={() => console.log('edit')} type='primary'>Edit</Button>
                <Button onClick={() => console.log('edit')} danger type='primary'>Delete</Button> */}
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
          seat: item.vacent_seat +'/'+item.seat_capacity,
          application_fees: item.application_fees,
          admission_fees: item.admission_fees,
        
        })
      })

      useEffect(() => {

        if (error) {
          alert.error(error)
          dispatch(clearErrors())
        }
    
        dispatch(adminCollegeDetailsAction(id))
      }, [dispatch,  error, alert])

  return (
    <Fragment>
         <div className="depertmentDeash">
         <AdminSidebar />
      <div className="dashboard">
      <div className='headdept'>
          <h2>Institute Name</h2>
          <span> {collegeDetails && collegeDetails.collegeName} </span>
      </div>
        <TableComponent columns={columns} loading={loading} dataSource={rows} />
      </div>
      </div>
    </Fragment>
  )
}

export default CollegeCourses