import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ isAdmin,isSuperAdmin, component: Component, ...routeProps }) => {

    const { isAuthenticated, loading, user } = useSelector(state => state.user)

    if(!loading && isAuthenticated===false){

        return <Navigate to={'/login'}/>
    }

    if(isAdmin===true && user.type!=='manager'){
        return <Navigate to={'/login'} />
    }
    if(isSuperAdmin===true && user.type!=='admin'){
        return <Navigate to={'/login'} />
    }

    return (
        <Fragment>
        {loading === false ? (
            <Component {...routeProps} />
           ) : null}
         </Fragment>
    )
}

export default ProtectedRoute