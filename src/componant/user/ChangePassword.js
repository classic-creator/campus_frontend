import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, updatePassword } from '../../action/userAction'
import { CHANGE_PASSWORD_RESET } from '../../constants/userConstants'
import Loader from '../layout/loader/loader'
import MetaData from '../layout/MetaData'
import "./changePassword.css"

const ChangePassword = () => {

    const dispatch =useDispatch()
    const alert=useAlert()
    const navigate=useNavigate()

    const {loading,isUpdated,error}=useSelector(state=>state.profile)
 
    const [password, setNewPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')



    const updatePasswordSubmit = (e) => {

        e.preventDefault();
        const myForm = new FormData()

     
        myForm.set("password", password);
        myForm.set("confirm_password", confirm_password);

        dispatch(updatePassword(myForm))
    }

    useEffect(() => {
     
        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
        if(isUpdated){
            alert.success('Change Password Successfullt')
            navigate('/account')

            dispatch({type:CHANGE_PASSWORD_RESET})
        }



    }, [error,alert,dispatch,isUpdated,navigate])
    

  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title="Change Password" />
        <div className="updatePasswordContainer">
          <div className="updatePasswordBox">
            <h2 className="updatePasswordHeading">Change Password
            </h2>

            <form
              className="updatePasswordForm"
              encType="multipart/form-data"
              onSubmit={updatePasswordSubmit}
            >

            <div className="loginPassword">
                <FontAwesomeIcon icon={faLock} />
                <input type="password"
                    placeholder='new password'
                    required
                    value={password}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div className="loginPassword">
                <FontAwesomeIcon icon={faLock} />
                <input type="password"
                    placeholder='confirm password'
                    required
                    value={confirm_password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            
              
              <input
                type="submit"
                value="Change"
                className="updatePasswordBtn"
              />
            </form>
          </div>
        </div>
      </Fragment>
    )}
  </Fragment>

  )
}

export default ChangePassword