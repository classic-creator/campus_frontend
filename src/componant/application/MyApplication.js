import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMyApplications, clearErrors } from '../../action/applyAction'
import ApplicationCard from './ApplicationCard.js'
import Loader from '../layout/loader/loader'
import { useAlert } from 'react-alert'
import HeaderTypography from '../layout/header/headerTypography'

const MyApplication = () => {

  const { loading, error, applications } = useSelector(state => state.application)
  const alert = useAlert()
  const dispatch = useDispatch()

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(GetMyApplications())
  }, [dispatch, error, alert])

  return (
    <Fragment>
      <HeaderTypography header={'Applications'} mb={4} mt={0}/>
      {loading ? <Loader /> :null}
        {applications.length > 0 ? (<Fragment>
          <div>
            {applications && applications.map(data => (<ApplicationCard key={data.id} data={data} />))}
          </div></Fragment>) : <div className='container text-aline-center mt-5 pt-5'><p >No record found</p></div>}
    </Fragment>
  )
}
export default MyApplication