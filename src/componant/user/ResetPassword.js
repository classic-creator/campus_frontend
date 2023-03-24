import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { clearErrors, resetPassword } from '../../action/userAction'
import Loader from '../layout/loader/loader'
import MetaData from '../layout/MetaData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons'

const ResetPassword = () => {

  const {token}=useParams()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const alert=useAlert()

  const {loading,message,error}=useSelector(state=>state.forgetPassword)

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

const resetPasswordSubmit=(e)=>{
    e.preventDefault();

   const myForm =new FormData()

   myForm.set('password',password)
   myForm.set('confirm_password',confirmPassword)
    
    dispatch(resetPassword(myForm,token))
}
useEffect(() => {
 if(error){
  alert.error(error)
  dispatch(clearErrors())
 }
 if(message){
  alert.success(message)
  navigate('/login')
 }
}, [error,alert,navigate,dispatch,message])


  return (
    <Fragment>
  {loading ? (
    <Loader />
  ) : (
    <Fragment>
      <MetaData title="Update Password" />
      <div className="resetPasswordContainer">
        <div className="resetPasswordBox">
          <h2 className="resetPasswordHeading">Update Profile</h2>

          <form
            className="resetPasswordForm"
            encType="multipart/form-data"
            onSubmit={resetPasswordSubmit}
          >
          
          <div >
              <FontAwesomeIcon icon={faLockOpen}  />
              <input type="password"
                  placeholder='new password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div>
          <FontAwesomeIcon icon={faLockOpen}  />
              <input type="password"
                  placeholder='confirm password'
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
              />
          </div>
          
            
            <input
              type="submit"
              value="Change"
              className="resetPasswordBtn"
            />
          </form>
        </div>
      </div>
    </Fragment>
  )}
</Fragment>
  )
}

export default ResetPassword