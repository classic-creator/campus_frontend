import React, { Fragment, useEffect } from 'react'
import AdminSidebar from './adminSidebar'

import { Button, Image, Popconfirm, Space } from 'antd'
import {SchemeGetAction, clearErrors, deleteCarouselImageAction } from '../../action/imageAction'
import { DELETE_CAROUSEL_RESET} from '../../constants/imageConstants'
import { useDispatch, useSelector } from 'react-redux'
import TableComponent from '../layout/TableComponent'
import { useAlert } from 'react-alert'
import SchemeUploadModal from './SchemeUploadmodal'

const SchemeAdminimages = () => {
  const { isDeleted,  error,loading:dltLoading } = useSelector(state => state.dltCarousel)
  const {scheme,loading,error:getschemeError}=useSelector(state=>state.getScheme)
  const dispatch=useDispatch()
  const alert=useAlert()
  const deleteHandler = (id) => {
    dispatch(deleteCarouselImageAction(id))
  }
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      // width: 50,
      key:'id',
      fixed: 'left'
    },
   
    {
      title: 'Poster',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <Image src={image} width={150} />,
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
    
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    
    },

    {
      title: 'Action',
      dataIndex: "action",
      align: "center"
      , render: (_, record) =>
        rows.length >= 1 ? (
          <Space>
            <Popconfirm onConfirm={() => { deleteHandler(record.id) }} title='Are you sure you want to delete ?'>
              <Button type='primary' loading={dltLoading} danger> Delete </Button>
            </Popconfirm>
            {/* <Button onClick={() => console.log('edit')} type='primary'>Edit</Button>
            <Button onClick={() => console.log('edit')} danger type='primary'>Delete</Button> */}
          </Space>
        ) : null
    }
  ]
  const rows = []

  scheme && scheme.forEach((item) => {
    rows.push({
      id: item.id,
      image: item.image_url,
      link:item.link,
      name: item.name,

    })
  })

  
  useEffect(() => {

    if (isDeleted) {
      alert.success('Delete Image SuccessFully')
      dispatch({ type: DELETE_CAROUSEL_RESET })
    }
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (getschemeError) {
      alert.error(getschemeError)
      dispatch(clearErrors())
    }

    dispatch(SchemeGetAction())
  }, [dispatch, isDeleted, error,getschemeError, alert])

  return (
   <Fragment>
      <div className="depertmentDeash">
      <AdminSidebar />
      <div className="dashboard">
      <div className='headdept'>
          <h2>Schemes</h2>
      </div>
        <SchemeUploadModal/>

        <TableComponent columns={columns} loading={loading} dataSource={rows} />
      </div>
      </div>
   </Fragment> 
    
  )
}

export default SchemeAdminimages