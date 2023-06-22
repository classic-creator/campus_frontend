import React, { Fragment, useEffect, useRef } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { clearErrors, getCourseDetails } from '../../action/courseAction'
import "./courseDetails.css"


import CoverAndNav from './collegecardAndComponent/coverAndNav'
// import { DataGrid } from '@material-ui/data-grid'
import ImportantLinkCard from './collegecardAndComponent/importantLinkCard'
import Imgcarousel from './collegecardAndComponent/Imgcarousel'
import TableComponent from '../layout/TableComponent'
import { Button } from 'antd'
import HeaderTypography from '../layout/header/headerTypography'


const CourseDetails = () => {

  const { error, course,loading } = useSelector(state => state.courseDetails)
  const dispatch = useDispatch()
  const alert = useAlert()
  const { id } = useParams()

  useEffect(() => {
    if (error) {
     alert.error(error)
     dispatch(clearErrors())
    }

    dispatch(getCourseDetails(id))
   

  }, [dispatch, id, alert, error])

  //course list table
  // const columns = [
  //   {
  //     dataIndex: "Fees",
  //     headerName: "Header",
  //     // minWidth: 100,

  //     // flex: 0.3
  //   },

  //   {
  //     dataIndex: "name",
  //     headerName: "1st Year",
  //     // minWidth: 100,
  //     // flex: 0.3,
  //   },
  //   {
  //     dataIndex: "eligibility",
  //     headerName: "2st Year",

  //     // minWidth: 100,
  //     // flex: 0.3,

  //   },
  //   {
  //     dataIndex: "duration",
  //     headerName: "3st Year",

  //     // minWidth: 100,
  //     // flex: 0.3,
  //   },
  //   {
  //     dataIndex: "fees",
  //     headerName: "4st Year",
  //     // minWidth: 100,
  //     // flex: 0.3,
  //   },
  // ];

  // const rows = [];

  const seatcolumns = [

    {
      dataIndex: "total_seat", title: "Total Seat",
      
    },
    
    {
      dataIndex: "EWS",
      title: "EWS",
      
    },
    {
      dataIndex: "EWS",
      title: "EWS",
      
      
    },
    {
      dataIndex: "SC",
      title: "SC",
      
      
    },
    {
      dataIndex: "OBC",
      title: "OBC",
      
    },
    {
      dataIndex: "other",
      title: "Others",
      
    },
    {
      dataIndex: "open",
      title: "Open",
     
    },
  ]
  const seatrows = [{

    total_seat: course && course.total_seat,
    open:course && course.open,
    other:course && course.other,
    SC:course && course.SC,
    ST:course && course.ST,
    EWS:course && course.EWS,
    OBC:course && course.OBC,
    
    
  }
  ];

  const scrollRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (



    <Fragment>
      <CoverAndNav  scrollToSection={scrollToSection} eligibility seatStructure duration college={course} />
      <div className='courseHeader'>

      <h2 className='courseHeaderh2'>{course && course.courseName}</h2>
      <Link to={`/apply/${id}`} className="btn btn-primary item-center" >Apply</Link>
      </div>
      <div className="detailContainer mb-5">
      {loading ?    <Button danger  loading={loading}></Button> :null}
        <div className='detailsdiv-1 p-edit pl-3 flex-column' >
          <h4  className='m-3 text-left' >About course :</h4>
          <p className='m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias non facere quae? Corrupti molestias repellendus beatae, cum dolore inventore unde commodi eius corporis, nemo, maiores ad quam autem assumenda quia! Illum itaque, iure inventore voluptate natus minus vel nam voluptatibus mollitia, qui, ex aliquid perferendis magnam recusandae cupiditate libero.</p>

          <h4 className='m-3' id="eligibility" ref={scrollRef}>Eligibility :</h4>
          <p className='m-3'  id="duration" ref={scrollRef}>{course && course.eligibility}</p>
          <h4  className='m-3' >Duration :</h4>
          <p className='m-3'>{course && course.duration},Number of semister : 6</p>
        </div>
        

        <div>
          {/* <ImportantLinkCard />
          <Imgcarousel /> */}
        </div>

      </div>


      {/* <div className=" courseTable table container" id='FeeStructure'>
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
      </div> */}
        
        <HeaderTypography header={'Seat Structure'}/>

      <div className="container mt-3" id="section1" ref={scrollRef} >
      

                    <TableComponent columns={seatcolumns}
                        dataSource={seatrows} />
      </div>

      

    </Fragment>



  )
}

export default CourseDetails