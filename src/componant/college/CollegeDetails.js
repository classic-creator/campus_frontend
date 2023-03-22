import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getCollegesDetails } from '../../action/collegeAction';
import Loader from '../layout/loader/loader';
import "./collegeDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFilePdf } from '@fortawesome/free-solid-svg-icons';


import { DataGrid } from "@material-ui/data-grid"

import CoverAndNav from './collegecardAndComponent/coverAndNav';
import ImportantLinkCard from './collegecardAndComponent/importantLinkCard';
import Imgcarousel from './collegecardAndComponent/Imgcarousel';

const CollegeDetails = () => {

  const alert = useAlert()
  const dispatch = useDispatch();
  const { id } = useParams()
  const { loading, error, college, courses } = useSelector(state => state.collegeDetails)

  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getCollegesDetails(id))
  }, [dispatch, id, alert, error])


  //course list table
  const columns = [
    {
      field: "id", headerName: "Sl no",
      minWidth:100,
      // maxWidth: 20,
      flex: 0.1
    },

    {
      field: "name",
      headerName: "C_Name",
      minWidth:130,
      // minWidth: 140,
      flex: 0.2,
    },
    {
      field: "eligibility",
      headerName: "Eligibility",

      minWidth: 270,
      flex: 0.2,

    },
    {
      field: "duration",
      headerName: "Duration",

      minWidth: 130,
      flex: 0.2,
    },
    {
      field: "fees",
      headerName: "Fees",
      minWidth: 110,
      flex: 0.13,
    },


    {
      field: "actions",
      flex: 0.1,
      headerName: "Action",
      minWidth: 110,
     
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/course/${params.getValue(params.id, "id")}`}>
              <FontAwesomeIcon icon={faFilePdf} />
            </Link>
            <Link to={`/course/${params.getValue(params.id, "id")}`}>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>

          </Fragment>
        );
      },
    },
  ];

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
      </Fragment>}
    </Fragment>
  )
}

export default CollegeDetails