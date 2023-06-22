import { Button, Space, Popconfirm } from 'antd'
import React, { Fragment, useEffect } from 'react'
import TableComponent from '../layout/TableComponent'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteNoticAction, clearErrors, getNotsAction } from '../../action/collegeAdminAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import Sidebar from './sidebar'
import { DELETE_NOTIC_RESET } from '../../constants/collegeAdminConstants'
import HeaderTypography from '../layout/header/headerTypography'

const AdminNotics = () => {

  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()

  const { notic, loading } = useSelector(state => state.getNotic)
  const { loading: deleteLoad, error: deleteErr, isDeleted } = useSelector(state => state.dltNotic)

const handelDelete=(id)=>{

  dispatch(DeleteNoticAction(id))
}

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      // width: 50,
      fixed: 'left',
      key:'id'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      align: "center",
      editable: true,

    },
    {
      title: 'Links',
      dataIndex: 'link',
      align: "center",
      editable: true,
      //   render: (_, record) => (
      //     <Link to={`/depertment/${record.id}`}>{record.link}</Link>
      //   ),
    },
    {
      title: 'Action',
      dataIndex: "action",
      align: "center"
      , render: (_, record) =>
        rows.length >= 1 ? (
          <Space>
            <Popconfirm onConfirm={()=>handelDelete(record.id)} title='Are you sure you want to delete ?'  >
              <Button danger loading={deleteLoad} type='primary'> Delete</Button>
            </Popconfirm>
            {/* <Button onClick={() => console.log('edit')} type='primary'>Edit</Button>
            <Button onClick={() => console.log('edit')} danger type='primary'>Delete</Button> */}
          </Space>
        ) : null
    }
  ]

  const rows = []


  notic && notic.forEach((item) => {
    rows.push({
      id: item.id,
      title: item.title,
      link: item.link,
    })
  })
  useEffect(() => {
    if (isDeleted) {
      alert.success('Delete Links Successfully')
      dispatch({ type: DELETE_NOTIC_RESET })
      navigate('/links')
    }
    if (deleteErr) {
      alert.error(deleteErr)
      dispatch(clearErrors())
    }
    dispatch(getNotsAction())
  }, [dispatch, isDeleted, alert, deleteErr, navigate])

  return (
    <Fragment>
    <HeaderTypography header={'Notics'} mb={0} mt={0} />
    <div className="depertmentDeash">
    <div className='sidebardiv'>
       <Sidebar />
      </div>
      <div className="dashboard mt-3">
          <TableComponent columns={columns} loading={loading}  dataSource={rows} />
          <Link to={`/add/links`}>Add Notics</Link>
        </div>
      </div>
    </Fragment>
  )
}

export default AdminNotics