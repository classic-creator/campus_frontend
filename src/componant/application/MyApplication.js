import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMyApplications, clearErrors } from '../../action/applyAction'
import ApplicationCard from './ApplicationCard.js'
import Loader from '../layout/loader/loader'
import { useAlert } from 'react-alert'

const MyApplication = () => {

  const {loading,error,applications}=useSelector(state=>state.application)
  const alert=useAlert()

  const dispatch = useDispatch()

  useEffect(() => {

    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }

    dispatch(GetMyApplications())
  }, [dispatch,error,alert])

  return (

   <Fragment>
    {loading ? <Loader/> :  <Fragment>
      <h1>my Applications</h1>

      <div>

     {applications && applications.map(data=>(<ApplicationCard data={data}/>))}
     

      </div>

    </Fragment>}
   </Fragment>
  )
}

export default MyApplication