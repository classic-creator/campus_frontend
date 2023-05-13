import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { clearErrors, getCollegesDetails } from '../../action/collegeAction';
import Loader from '../layout/loader/loader';
import "./collegeDetails.css"




import CoverAndNav from './collegecardAndComponent/coverAndNav';
import ImportantLinkCard from './collegecardAndComponent/importantLinkCard';
import Imgcarousel from './collegecardAndComponent/Imgcarousel';
import { Button, Space, } from 'antd'
import TableComponent from '../layout/TableComponent';

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
      , render: (_, record) =>
        rows.length >= 1 ? (
          <Space>
            {/* <Popconfirm title='Are you sure you want to delete ?'> */}
            <Link to={`/course/${record.id}`}> <Button type='primary'> Go</Button></Link>
            {/* </Popconfirm> */}
            <Button onClick={() => console.log('edit')} type='primary'>Apply</Button>
          </Space>
        ) : null
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


  //seat structure table


  const seatcolumns = [

    {
      dataIndex: "courseName",
      title: "Course name",

    },
    {
      dataIndex: "total_seat",
      title: "Total Seat",

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

  const seatrows = []

 courses && courses.forEach(course => {

      seatrows.push({
        courseName: course.courseName,
        total_seat: course.total_seat,
        open: course.open,
        other: course.other,
        SC: course.SC,
        ST: course.ST,
        EWS: course.EWS,
        OBC: course.OBC,
      })

    })
  




  return (
    <Fragment>
      {loading ? <Loader /> : <Fragment>
        <CoverAndNav college={college} />


        <div className="detailContainer">

          <div className='detailsdiv-1'>

            <p>
              {college && college.description}
            </p>
          </div>


          <div >
            <ImportantLinkCard />
            <Imgcarousel />
          </div>

        </div>

        <div className="container-fluid">

          <h2 className='m-3 text-center'>Courses</h2>

          <TableComponent columns={columns}
            dataSource={rows}
            loading={loading} />
        </div>
        <div className='container-fluid' id='seatStructure'>
          <h2 className='m-3 text-center'>Seat Structure</h2>

          <TableComponent columns={seatcolumns}
            dataSource={seatrows}
            loading={loading} />
        </div>

      </Fragment>}
    </Fragment>
  )
}

export default CollegeDetails