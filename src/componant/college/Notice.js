import React, { Fragment, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'
import TableComponent from '../layout/TableComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getpublicNotsAction } from '../../action/collegeAdminAction'
import { Space,Button } from 'antd'
import CoverAndNav from './collegecardAndComponent/coverAndNav'
import { getCollegesDetails } from '../../action/collegeAction'

const Notice = () => {
  const dispatch = useDispatch()
 
const {id}=useParams()
  const { notic, loading } = useSelector(state => state.getNotic)
  const { college} = useSelector(state => state.collegeDetails)
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
           
           <Link to={record.link}> <Button type='primary'> open</Button></Link>  
           
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
   dispatch(getpublicNotsAction(id))
   dispatch(getCollegesDetails(id))
  }, [dispatch,id])
  
  return (
   <Fragment>
         <CoverAndNav college={college} />
    <div className="container-fluid">
      <h2 className='m-3 text-center'> Important Links</h2>
        <TableComponent columns={columns} loading={loading} dataSource={rows}/>
    </div>


   </Fragment>
  )
}

export default Notice