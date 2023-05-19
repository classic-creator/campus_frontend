import React, { Fragment, useEffect } from 'react'
import AdminSidebar from './adminSidebar'
import TableComponent from '../layout/TableComponent'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getAllcollegesAction, getAlluserAction } from '../../action/adminAction'
import { useAlert } from 'react-alert'
import { Button, Image, Space } from 'antd'
import { Link } from 'react-router-dom'

const AllColleges = () => {

    const {loading,colleges,collegeCounts,error}=useSelector(state=>state.allCollege)
    const dispatch=useDispatch()
    const alert=useAlert()

    const columns = [
        {
          title: 'Institute Id',
          dataIndex: 'id',
          // width: 50,
          key:'id',
          fixed: 'left'
        },
        {
          title: 'College Name',
          dataIndex: 'name',
          align: "center",
          editable: true,
    
        },
        
        
        {
          title: 'Registered by',
          dataIndex: 'user_id',
          align: "center",
          editable: true,
    
        },
        {
          title: 'Email',
          dataIndex: 'email',
          align: "center",
          editable: true,
    
        },
        {
          title: 'District',
          dataIndex: 'district',
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
                
                <Link to={`/admin/college/${record.id}`}><Button type='primary' loading={loading} > Courses </Button>
                </Link>  
                {/* <Button onClick={() => console.log('edit')} type='primary'>Edit</Button>
                <Button onClick={() => console.log('edit')} danger type='primary'>Delete</Button> */}
              </Space>
            ) : null
        }
      ]
      const rows = []
    
      colleges && colleges.forEach((item) => {
        rows.push({
          id: item.id,
          name: item.collegeName,
          email: item.email,
          district: item.address,
          user_id: item['create-by'],
        
        })
      })

      useEffect(() => {

        if (error) {
          alert.error(error)
          dispatch(clearErrors())
        }
    
        dispatch(getAllcollegesAction())
      }, [dispatch,  error, alert])

  return (
    <Fragment>
         <div className="depertmentDeash">
         <AdminSidebar />
      <div className="dashboard">
      <div className='headdept'>
          <h2>Institute </h2>
          <span> Total Institute - {collegeCounts} </span>
      </div>
        <TableComponent columns={columns} loading={loading} dataSource={rows} />
      </div>
      </div>
    </Fragment>
  )
}

export default AllColleges