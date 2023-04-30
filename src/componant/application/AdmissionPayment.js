import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AdmissionPaymentAction } from '../../action/applyAction'

const AdmissionPayment = () => {
    const dispatch=useDispatch()
    const {id}=useParams()
    const payAdmission=()=>{
     
    dispatch(AdmissionPaymentAction(id))


    }
  return (
    <Fragment>
        <button onClick={payAdmission}>Pay now</button>
    </Fragment>
  )
}

export default AdmissionPayment