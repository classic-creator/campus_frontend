import React, { Fragment, useEffect } from 'react'
import AdminSidebar from './adminSidebar'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { getAllcollegesAction, getAlluserAction } from '../../action/adminAction'
import { useDispatch, useSelector } from 'react-redux'

import CountUp from 'react-countup';
const SuperAdminDashboard = () => {
    const {Total_users}=useSelector(state=>state.allUser)
    const dispatch=useDispatch()
    const {collegeCounts}=useSelector(state=>state.allCollege)
    const { application_count } = useSelector(state => state.getcount)
    const {user}=useSelector(state=>state.user)

    useEffect(() => {
        dispatch(getAlluserAction())
        dispatch(getAllcollegesAction())
    }, [dispatch])
    

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
                           {user && user.name}
                            </p>

                        </div>
                        <div className="dashboardSummeryBox2">
                            <Link to="/college/course">
                                <p>Institutes</p>
                                
                                <CountUp end={collegeCounts && collegeCounts} duration={5} />
                            </Link>
                            <Link to="/admin/orders">
                                <p> Applications </p>
                                <CountUp end={application_count && application_count} duration={5} />
                                
                            </Link>
                            <Link to="/confirm/admission/college">
                                <p>Students</p>
                                <CountUp end={Total_users && Total_users} duration={5} />
                              
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default SuperAdminDashboard