import React, { Fragment } from 'react'
import AdminSidebar from './adminSidebar'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'

const SuperAdminDashboard = () => {


    return (
        <Fragment>
            <div className='clgdashboard'>
                <div>
                    <AdminSidebar />
                </div>


                <div className='dashboardContainer'>
                    <Typography component="h1">Dashboard</Typography>
                    <div className='dashboardSummery'>
                        <div >
                            <p className='dashboardSummeryP'>
                           
                            </p>

                        </div>
                        <div className="dashboardSummeryBox2">
                            <Link to="/college/course">
                                <p>Institutes</p>
                                
                                {/* <CountUp end={myCourses && myCourses.length} duration={5} /> */}
                            </Link>
                            <Link to="/admin/orders">
                                <p> Applications </p>
                                
                            </Link>
                            <Link to="/confirm/admission/college">
                                <p>Students</p>
                                {/* <CountUp end={clgConfirmApplication && clgConfirmApplication.length} duration={5} /> */}
                              
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default SuperAdminDashboard