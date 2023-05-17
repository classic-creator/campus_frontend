import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, myCollegeAction } from '../../action/collegeAdminAction'
import './collegeProfile.css'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import Sidebar from './sidebar'
import { useAlert } from 'react-alert'
import Loader from '../layout/loader/loader'
import CountUp from 'react-countup';
import CollegeDataChange from './CollegeDataChange'
import { Button } from 'antd'

const CollegeProfile = () => {

  const alert = useAlert()
  const dispatch = useDispatch()

  const { myCollege, myCourses, clgConfirmApplication, error, loading } = useSelector(state => state.myCollege)

  useEffect(() => {

    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    } else {

      dispatch(myCollegeAction())
    }


  }, [dispatch, alert, error])

  return (
    <Fragment>
      {/* {loading ? <Loader /> : <Fragment> */}

      <div className='clgdashboard'>
        <div>
          <Sidebar />
        </div>
      

       


        {/* {loading ? <Loader /> : (  */}
        <div className='dashboardContainer'>
          <Typography component="h1">Dashboard</Typography>
          <div className='dashboardSummery'>
            <div >
              <p className='dashboardSummeryP'>
                {myCollege && myCollege.collegeName}
                {loading ? <Button loading={loading}></Button> : null}
              </p>

            </div>
            <div className="dashboardSummeryBox2">
              <Link to="/college/course">
                <p>Courses</p>
                {/* <p>{myCourses && myCourses.length}</p> */}
                <CountUp end={myCourses && myCourses.length} duration={5} />
              </Link>
              <Link to="/admin/orders">
                <p>Seat Remain</p>
                {/* <p>{orders && orders.length}</p> */}
              </Link>
              <Link to="/confirm/admission/college">
                <p>Enrolled Students</p>
                <CountUp end={clgConfirmApplication && clgConfirmApplication.length} duration={5} />
                {/* <p>{users && users.length}</p> */}
              </Link>
            </div>
          </div>

          <div className="lineChart">



          </div>
          <div className="doughnutChat">
            {/* <Doughnut
       data={doughnutState} /> */}
          </div>

        </div>
        {/* )} */}

      </div>
      {/* </Fragment>} */}
    </Fragment>
  )
}

export default CollegeProfile
