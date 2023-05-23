import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const RegisterSuccess = () => {
 
  return (
   <Fragment>
    <div className="vh-100 d-flex justify-content-center align-items-center">
            <div>
                <div className="mb-4 text-center">
                 
                    {/* <FontAwesomeIcon className='greenColor' style={{ 'width':"7vmax", 'height':"7vmax" }} icon={f}/> */}
                    <i class="bi bi-hourglass-split redColor" style={{ 'width':"7vmax", 'height':"7vmax" }}></i>
                </div>
                <div className="text-center">
                    <h1>Thank You !</h1>
                    <p>Your College is Waiting for Approvel </p>
                    {/* <p>   Reference No. - <span className='greenColor'>{referenceNum}</span>  </p> */}
                    <Link to={'/'} className="btn btn-primary">Back </Link>
                </div>
            </div>
            </div>
   </Fragment>
  )
}

export default RegisterSuccess