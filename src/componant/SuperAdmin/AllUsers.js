import React, { Fragment, useEffect } from 'react'
import AdminSidebar from './adminSidebar'
import TableComponent from '../layout/TableComponent'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getAlluserAction } from '../../action/adminAction'
import { useAlert } from 'react-alert'
import { Button, Image, Space } from 'antd'
import { Link } from 'react-router-dom'

const AllUsers = () => {

    const {loading,users,Total_users,error}=useSelector(state=>state.allUser)
    const dispatch=useDispatch()
    const alert=useAlert()

    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          // width: 50,
          key:'id',
          fixed: 'left'
        },
        {
          title: 'Name',
          dataIndex: 'name',
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
          title: 'Gender',
          dataIndex: 'gender',
          align: "center",
          editable: true,
    
        },
        {
          title: 'Type',
          dataIndex: 'type',
          align: "center",
          editable: true,
    
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'photo',
          render: (image) => <Image src={image} width={150} height={150} />,
        },
    
        {
          title: 'Action',
          dataIndex: "action",
          align: "center"
          , render: (_, record) =>
            rows.length >= 1 ? (
              <Space>
                
               <Link to={`/admin/user/${record.id}`}>  <Button type='primary' loading={loading} > Update </Button></Link> 
              
                {/* <Button onClick={() => console.log('edit')} type='primary'>Edit</Button>
                <Button onClick={() => console.log('edit')} danger type='primary'>Delete</Button> */}
              </Space>
            ) : null
        }
      ]
      const rows = []
    
      users && users.forEach((item) => {
        rows.push({
          id: item.id,
          name: item.name,
          email: item.email,
          gender: item.gender,
          type: item.type,
          image: item.image_url,

    
        })
      })

      useEffect(() => {

        if (error) {
          alert.error(error)
          dispatch(clearErrors())
        }
    
        dispatch(getAlluserAction())
      }, [dispatch,  error, alert])

  return (
    <Fragment>
         <div className="depertmentDeash">
         <AdminSidebar />
      <div className="dashboard">
      <div className='headdept '>
          <h2>User</h2>
          <span>Total Users - {Total_users}</span>
      </div>
        <TableComponent columns={columns} loading={loading} dataSource={rows} />
      </div>
      </div>
    </Fragment>
  )
}

export default AllUsers