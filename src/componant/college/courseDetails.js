import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CourseDetails = () => {

    const {loading,error,course}=useSelector(state=>state.cours)
    const dispatch=useDispatch()
    const alert =useAlert()

  return (
   
    <CoverAndNav college={college} />
  )
}

export default CourseDetails