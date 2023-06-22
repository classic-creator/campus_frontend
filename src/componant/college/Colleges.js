import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';
import Loader from '../layout/loader/loader';
import { clearErrors, getColleges } from '../../action/collegeAction';
import CollegeCard from '../home/CollegeCard';
import LoadingBar from 'react-top-loading-bar';
import HeaderTypography from '../layout/header/headerTypography';


const Colleges = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const { keyword } = useParams()
  const { loading, error, colleges } = useSelector(state => state.colleges)

  
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    
    dispatch(getColleges(keyword))
  }, [dispatch, error, alert, keyword])

  return (
    <Fragment>
   
    {loading ?   <Loader  /> : null}
     
      <MetaData title="Colleges" />
      <HeaderTypography  header={'Colleges'}/>
      <div className='container'>
        {colleges && colleges.map(college => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
     
    </Fragment>
  )
}
export default Colleges