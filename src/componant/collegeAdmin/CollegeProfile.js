import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myCollegeAction } from '../../action/collegeAdminAction'

const CollegeProfile = () => {

  const dispatch=useDispatch()
  const {myCollege}=useSelector(state=>state.college)
  useEffect(() => {
   dispatch(myCollegeAction())
  }, [dispatch])
  
  return (
    <div>{myCollege && myCollege.collegeName}</div>
  )
}

export default CollegeProfile