import React, { Fragment, useEffect } from 'react'
import './aplicationCard.css'
import { Link } from 'react-router-dom'


const ApplicationCard = ({data}) => {
   
  

    return (
        <Fragment>
            <div className='MyApplication container'>
                <div className='leftDiv'>
                    <p>College Name : {data.collegeName}</p>
                    <p>Course Name : {data.courseName}</p>
                    <p>Address : {data.address}</p>
                </div>
                <div className='middleDiv'>
                    <p>Application status :<span className={data.admission_status==='Selected'||data.admission_status==='confirmed'?'greenColor':'redColor'  }>  {data.admission_status}</span></p> 
                  <p>Application Payment Status :  </p>
                    <p>Admission Payment Status : <span className={ data.admission_payment_status==='paid'?'greenColor':'redColor'}>{data.admission_payment_status}</span> </p>
             
                </div>
                <div className='rightDiv'>
                    <div>

                    <button className='btn btn-primary'>Acknowledgement</button>
                   {data.admission_payment_status!=='paid' && data.admission_status==='Selected'?(<Fragment> <Link to={`/admission/payment/${data.id}`} className='btn btn-primary Paybtm'>Pay Fees</Link> <span className='paynotic'>*If you dont pay your fees then your application will be rejected</span> </Fragment>):null}

                   {data.admission_payment_status==='paid' ? <span className='paynotic greenColor'>*Your admission fees pay succefully for further details you can contact with your college</span>:null}

                    </div>
                   <Link className='btn btn-primary btn-sm mt-2' to={`/view/newpayment/${data.id}`}>Payments reviews</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default ApplicationCard