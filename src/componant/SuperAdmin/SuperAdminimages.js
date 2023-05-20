import React, { Fragment, useEffect } from 'react'
import AdminSidebar from './adminSidebar'
import ImageUploadModal from './imageUploadModal'
import { Button, Image, Popconfirm, Space } from 'antd'
import { GetCarouselimage, clearErrors, deleteCarouselImageAction} from '../../action/imageAction'
import { DELETE_CAROUSEL_RESET } from '../../constants/imageConstants'
import { useDispatch, useSelector } from 'react-redux'
import TableComponent from '../layout/TableComponent'
import { useAlert } from 'react-alert'

const SuperAdminimages = () => {
  const { isDeleted,  error,loading:dltLoading } = useSelector(state => state.dltCarousel)
  const {photos,loading}=useSelector(state=>state.getCarousel)
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
      title: 'Image Type',
      dataIndex: 'type',
      align: "center",
      editable: true,

    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'photo',
      render: (image) => <Image src={image} width={150} />,
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

  photos && photos.forEach((item) => {
    rows.push({
      id: item.id,
      image: item.image_url,
      type: 'photos',

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

    dispatch(GetCarouselimage())
  }, [dispatch, isDeleted, error, alert])

  return (
   <Fragment>
      <div className="depertmentDeash">
      <AdminSidebar />
      <div className="dashboard">
      <div className='headdept'>
          <h2>Images</h2>
      </div>
        <ImageUploadModal/>

        <TableComponent columns={columns} loading={loading} dataSource={rows} />
      </div>
      </div>
   </Fragment> 
    
  )
}

export default SuperAdminimages