import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCourseDetails } from '../../action/courseAction'
import "./courseDetails.css"


import CoverAndNav from './collegecardAndComponent/coverAndNav'
import { DataGrid } from '@material-ui/data-grid'
import ImportantLinkCard from './collegecardAndComponent/importantLinkCard'
import Imgcarousel from './collegecardAndComponent/Imgcarousel'
import Loader from '../layout/loader/loader'

const CourseDetails = () => {

  const { loading ,error, course } = useSelector(state => state.courseDetails)
  const dispatch = useDispatch()
  const alert = useAlert()
  const { id } = useParams()

  useEffect(() => {
    if (error) {
      return alert.error(error)
    }

    dispatch(getCourseDetails(id))

  }, [dispatch, id, alert, error])

  //course list table
  const columns = [
    {
      field: "Fees", headerName: "Header",
      minWidth: 100,

      flex: 0.3
    },

    {
      field: "name",
      headerName: "1st Year",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "eligibility",
      headerName: "2st Year",

      minWidth: 100,
      flex: 0.3,

    },
    {
      field: "duration",
      headerName: "3st Year",

      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "fees",
      headerName: "4st Year",
      minWidth: 100,
      flex: 0.3,
    },
  ];

  const rows = [];

  const seatcolumns = [

    {
      field: "Fees", headerName: "Total",
      // minWidth:100,

      flex: 0.3
    },

    {
      field: "General",
      headerName: "General",
      // minWidth: 100,
      flex: 0.3,
    },
    {
      field: "EWS",
      headerName: "EWS",
      // minWidth: 100,
      flex: 0.3,
    },
    {
      field: "St",
      headerName: "St",

      // minWidth: 100,
      flex: 0.3,

    },
    {
      field: "Sc",
      headerName: "Sc",

      // minWidth: 100,
      flex: 0.3,
    },
    {
      field: "Obc",
      headerName: "Obc",
      // minWidth: 100,
      flex: 0.2,
    },
    {
      field: "Obc",
      headerName: "Others",
      // minWidth: 120,
      flex: 0.3,
    },
  ]
  const seatrows = [];
  return (



    <Fragment>
      <CoverAndNav college={course} />
      <h2 className='courseHeader'>{course.courseName}</h2>

      <div className="detailContainer">

        <div className='detailsdiv-1 pl-3 flex-column' >
          <h4 >About course :</h4>
          <p className='m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias non facere quae? Corrupti molestias repellendus beatae, cum dolore inventore unde commodi eius corporis, nemo, maiores ad quam autem assumenda quia! Illum itaque, iure inventore voluptate natus minus vel nam voluptatibus mollitia, qui, ex aliquid perferendis magnam recusandae cupiditate libero.</p>

          <h4 >Eligibility :</h4>
          <p className='m-3'>{course.eligibility}</p>
          <h4 >Duration :</h4>
          <p className='m-3'>{course.duration},Number of semister : 6</p>
        </div>
        

        <div>
          <ImportantLinkCard />
          <Imgcarousel />
        </div>

      </div>


      <div className=" courseTable table container">
        <h3>Fees Structure</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
          disableSelectionOnClick

          className='courseListTable'
          autoHeight

        />
      </div>
      <div className="courseTable table container">
        <h3>Seat Structure</h3>
        <DataGrid
          rows={seatrows}
          columns={seatcolumns}
          pageSize={2}
          rowsPerPageOptions={[2]}
          disableSelectionOnClick

          className='courseListTable'
          autoHeight

        />
      </div>

      <Link className="btn btn-primary item-center">Apply</Link>

    </Fragment>



  )
}

export default CourseDetails