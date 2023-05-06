import React, { Fragment } from 'react'
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
                    <p>Application status :<span className={data.admission_status==='Selected'?'greenColor':'redColor'}>  {data.admission_status}</span></p> 
                    <p>Payment Status : <span className={ data.payment_status==='paid'?'greenColor':'redColor'}>{data.payment_status}</span> </p>
             
                </div>
                <div className='rightDiv'>
                    <button className='btn btn-primary'>Acknowledgement</button>
                   {data.payment_status!='paid' && data.admission_status==='Selected'?(<Fragment> <Link to={`/admission/payment/${data.id}`} className='btn btn-primary Paybtm'>Pay Fees</Link> <span className='paynotic'>*If you dont pay your fees then your application will be rejected</span> </Fragment>):null}

                   {data.payment_status==='paid' ? <span className='paynotic greenColor'>*Your admission fees pay succefully for further details you can contact with your college</span>:null}
                   
                </div>
            </div>
        </Fragment>
    )
}

export default ApplicationCard