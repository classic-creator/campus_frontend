import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, myCollegeAction } from '../../action/collegeAdminAction'
import './collegeProfile.css'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import Sidebar from './sidebar'
import { useAlert } from 'react-alert'
import { loadUser } from '../../action/userAction'

const CollegeProfile = () => {

  const alert =useAlert()
  const dispatch = useDispatch()
  const { myCollege, myCourses,error } = useSelector(state => state.myCollege)

  useEffect(() => {
    
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }else{

      dispatch(myCollegeAction())
    }
   

  }, [dispatch,alert,error])

  return (
    <Fragment>

<div className='dashboard'>
      <Sidebar />
      <div className='dashboardContainer'>
        <Typography component="h1">Dashboard</Typography>
        <div className='dashboardSummery'>
          <div>
            <p className='dashboardSummeryP'>
             
              {myCollege && myCollege.collegeName}
            </p>

          </div>
          <div className="dashboardSummeryBox2">
            <Link to="/admin/products">
              <p>Registered Courses</p>
              <p>{myCourses && myCourses.length}</p>
            </Link>

            <Link to="/admin/orders">
              <p>Seat Remain</p>
              {/* <p>{orders && orders.length}</p> */}
            </Link>


            <Link to="/admin/users">
              <p>Admission Confirm</p>
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
    </div>
    </Fragment>
  )
}

export default CollegeProfile