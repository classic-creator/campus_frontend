import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Paymentsuccess = () => {
    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
  return (
   <Fragment>
    <div className="vh-100 d-flex justify-content-center align-items-center">
            <div>
                <div className="mb-4 text-center">
                 
                    <FontAwesomeIcon className='greenColor' style={{ 'width':"7vmax", 'height':"7vmax" }} icon={faCheck}/>
                </div>
                <div className="text-center">
                    <h1>Thank You !</h1>
                    <p>Your payments was successfull </p>
                    <p>   Reference No. - <span className='greenColor'>{referenceNum}</span>  </p>
                    <Link to={'/myApplication'} className="btn btn-primary">Back </Link>
                </div>
            </div>
            </div>
   </Fragment>
  )
}

export default Paymentsuccess