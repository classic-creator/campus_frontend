import React, { Fragment, useEffect } from 'react'
import MetaData from '../layout/MetaData.js'
import CollegeCard from './CollegeCard.js'
import "./home.css"
import { useSelector, useDispatch } from "react-redux"
import { clearErrors, getColleges } from '../../action/collegeAction.js'
import Loader from '../layout/loader/loader.js'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch();
  const alert=useAlert();
  const {keyword} =useParams()

  const { loading, error, colleges } = useSelector(state => state.colleges)

  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getColleges(keyword))
  }, [dispatch,error,alert,keyword])


  return (
    <Fragment>
      {loading ? <Loader /> : <Fragment>

        <MetaData title="CAMPUS-Home" />
        <div className='container'>
          {colleges && colleges.map(college => (
            <CollegeCard college={college} />
          ))}
        </div>
      </Fragment>}
    </Fragment>
  )
}

export default Home