import { Button } from '@material-ui/core'
import React from 'react'
import { useAlert } from 'react-alert'
import { useDispatch } from 'react-redux'
import { logout } from '../../action/userAction'

const Logout = () => {
    const dispatch=useDispatch()
    const alert =useAlert()

    function logoutUser(){
        dispatch(logout())
        alert.success("Logout Successfully")
       
    }
  return (
   <Button onClick={logoutUser}>
    Logout
   </Button>
  )
}

export default Logout