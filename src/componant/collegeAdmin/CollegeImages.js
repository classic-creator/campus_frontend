import React, { Fragment, useEffect } from 'react'
import TableComponent from '../layout/TableComponent'
import { Image, Space, Button, Popconfirm } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { myCollegeAction } from '../../action/collegeAdminAction'
import Sidebar from './sidebar'
import CollegeDataChange from './CollegeDataChange'
import { useAlert } from 'react-alert'
import { DELETE_IMAGE_RESET } from '../../constants/imageConstants'
import { clearErrors } from '../../action/collegeAction'
import { deleteImageAction } from '../../action/imageAction'

const CollegeImages = () => {

  const dispatch = useDispatch()
  const alert = useAlert()
  const { photos, cover_image, logo_image } = useSelector(state => state.myCollege)
  const { isDeleted,  error } = useSelector(state => state.deleteImg)

  const deleteHandler = (id) => {
    dispatch(deleteImageAction(id))
  }
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      // width: 50,
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
              <Button type='primary' danger> Delete </Button>
            </Popconfirm>
            {/* <Button onClick={() => console.log('edit')} type='primary'>Edit</Button>
            <Button onClick={() => console.log('edit')} danger type='primary'>Delete</Button> */}
          </Space>
        ) : null
    }
  ]
  const rows = [
    {
      id: cover_image && cover_image.id,
      image: cover_image && cover_image.image_url,
      type: 'cover '
    },
    {

      id: logo_image && logo_image.id,
      image: logo_image && logo_image.image_url,
      type: 'logo '
    }
  ]


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
      dispatch({ type: DELETE_IMAGE_RESET })
    }
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }

    dispatch(myCollegeAction())
  }, [dispatch, isDeleted, error, alert])



  return (
    <Fragment>
      <div className="depertmentDeash">
        <Sidebar />
        <div className="dashboard">
          <div className='headdept'>

            <h2>Images</h2>
          </div>
          <CollegeDataChange />

          <TableComponent columns={columns} dataSource={rows} />
        </div>
      </div>
    </Fragment>
  )
}

export default CollegeImages