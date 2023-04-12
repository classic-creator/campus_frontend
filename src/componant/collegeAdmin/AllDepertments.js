import React, { Fragment, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDepertmentAction } from '../../action/collegeAdminAction'
import Sidebar from './sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { DataGrid } from "@material-ui/data-grid"
import { Link } from 'react-router-dom'
import './depertment.css'
import { Button, Popconfirm, Table,Space,Form,Input } from 'antd'

const AllDepertments = () => {


    const dispatch=useDispatch()

    const {depertments} =useSelector(state=>state.depertments)

    useEffect(() => {
        dispatch(getDepertmentAction())
    }, [dispatch])


    // const columns = [
    //   {
    //     field: "id", headerName: "ID",
    //     // minWidth:100,
    //     // maxWidth: 20,
    //     // flex: 0.1
    //     width:160,
    //   },
  
    //   {
    //     field: "name",
    //     headerName: "Name",
    //     // minWidth:130,
    //     // minWidth: 140,
    //     // flex: 0.2,
    //     width:260,
    //   },
    //   {
    //     field: "email",
    //     headerName: "email",
    //     width:320,
    //     // minWidth: 270,
    //     // flex: 0.2,
  
    //   },
    //   {
    //     field: "instructor",
    //     headerName: "Instructor",
    //     width:190,
    //     // minWidth: 130,
    //     // flex: 0.2,
    //   },
   
    //   {
    //     field: "actions",
    //     headerName: "Action",
    //     // flex: 0.1,
    //     // minWidth: 110,
    //     width:140,
       
    //     sortable: false,
    //     renderCell: (params) => {
    //       return (
    //         <Fragment>
    //           <Link className='actionSvg' to={`/depertment/${params.getValue(params.id, "id")}`}>
    //             <FontAwesomeIcon icon={faFilePdf} />
    //           </Link>
    //           <Link className='actionSvg' to={`/depertment/${params.getValue(params.id, "id")}`}>
    //             <FontAwesomeIcon icon={faArrowRight} />
    //           </Link>
  
    //         </Fragment>
    //       );
    //     },
    //   },
    // ];
  

const columns =[
  {
    title: 'Id',
    dataIndex: 'id'
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
    title: 'Email'
    , dataIndex: 'email',
    align: "center",
    editable: true
  },
  {
    title: 'Instructor'
    , dataIndex: 'instructor',
    align: "center",
    editable: true
  },{
    title: 'Action',
    dataIndex: "action",
    align: "center"
    ,render:(_,record)=>
    rows.length>=1 ? (
       <Space>
         {/* <Popconfirm title='Are you sure you want to delete ?'> */}
           <Link to={`/depertment/${record.id}`}> <Button  type='primary'> Go</Button></Link>
        {/* </Popconfirm> */}
          <Button onClick={()=>console.log('edit')} type='primary'>Edit</Button>
          <Button onClick={()=>console.log('edit')} danger type='primary'>Delete</Button>
       </Space>
    ):null
  }
]

    const rows =  []
    

    depertments && depertments.forEach((item) => {
      rows.push({
        id:item.id,
        name: item.depertment_name,
        email: item.depertment_email,
        instructor: item.instructor,
       
  
      })
    })

    
  return (
   <Fragment>
  <div className='dashboard'>
   <Sidebar/>
   <div className="courseTable allCourseTable">
          <h2>Depertment</h2>


          {/* <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
            disableSelectionOnClick

            className='courseListTable'
            autoHeight

           
          /> */}
            <Table
                    columns={columns}
                    dataSource={rows}
                    bordered
                  


                    />

        </div>

        </div>
 
   </Fragment>
  )
}

export default AllDepertments