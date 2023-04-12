import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { clearErrors, getCollegesDetails } from '../../action/collegeAction';
import Loader from '../layout/loader/loader';
import "./collegeDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFilePdf } from '@fortawesome/free-solid-svg-icons';


import { DataGrid } from "@material-ui/data-grid"

import CoverAndNav from './collegecardAndComponent/coverAndNav';
import ImportantLinkCard from './collegecardAndComponent/importantLinkCard';
import Imgcarousel from './collegecardAndComponent/Imgcarousel';
import { Button, Popconfirm, Table,Space,Form,Input } from 'antd'

const CollegeDetails = () => {

  const alert = useAlert()
  const dispatch = useDispatch();
  const { id } = useParams()
  const { loading, error, college, courses } = useSelector(state => state.collegeDetails)

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getCollegesDetails(id))
  }, [dispatch, id, alert, error])


  //course list table
  

  const columns = [
    {
        title: 'Id',
        dataIndex: 'id'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        align: "center",
        editable: true
    },
    {
        title: 'Duration'
        , dataIndex: 'duration',
        align: "center",
        editable: true
    },
    {
        title: 'Fees',
        dataIndex: 'fees',
        align: "center",
        editable: true
    },
    {
        title: 'Eligibility',
        dataIndex: "eligibility",
        align: "center",
        editable: true
    },
    {
        title: 'Action',
        dataIndex: "action",
        align: "center"
        ,render:(_,record)=>
        rows.length>=1 ? (
           <Space>
             {/* <Popconfirm title='Are you sure you want to delete ?'> */}
               <Link to={`/course/${record.id}`}> <Button  type='primary'> Go</Button></Link>
            {/* </Popconfirm> */}
              <Button onClick={()=>console.log('edit')} type='primary'>Apply</Button>
           </Space>
        ):null
    }
]

  const rows = [];

  courses && courses.forEach((item) => {
    rows.push({
      id: item.id,
      name: item.courseName,
      duration: item.duration,
      eligibility: item.eligibility,
      fees: item.fees

    })
  })

  return (
    <Fragment>
      {loading ? <Loader /> : <Fragment>
        <CoverAndNav college={college} />


        <div className="detailContainer">

          <div className='detailsdiv-1'>
            <p>
              {college.description}
            </p>
          </div>


          <div > 
            <ImportantLinkCard />
            <Imgcarousel />
          </div>

        </div>

        <div className="courseTable">
          <h2>Courses</h2>

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
                    loading={loading}


                    />

        </div>
      </Fragment>}
    </Fragment>
  )
}

export default CollegeDetails