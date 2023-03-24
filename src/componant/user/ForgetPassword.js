import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { clearErrors, forgetPassword } from '../../action/userAction'
import Loader from '../layout/loader/loader'

const ForgetPassword = () => {

    const dispatch = useDispatch()
    const alert=useAlert()
  
    const {loading,message,error}=useSelector(state=>state.forgetPassword)

    const [email, setEmail] = useState('')


   const forgetPasswordFunction=(e)=>{
    e.preventDefault();

    const myForm = new FormData()
    myForm.set('email', email)

    dispatch(forgetPassword(myForm))
   }

useEffect(() => {
  if(error){
    alert.error(error)
    dispatch(clearErrors())
  }
  if(message){
    alert.success(message)
   
  }
}, [error,dispatch,message,alert])

    return (
       <Fragment>
        {
            loading ? <Loader/> :  <Fragment>

            <div>
                <form onSubmit={forgetPasswordFunction}>

                    <input
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        required
                        placeholder='Enter your email'

                    />
                    <input type="submit" />
                </form>
            </div>
        </Fragment>
        }
       </Fragment>
    )
}

export default ForgetPassword