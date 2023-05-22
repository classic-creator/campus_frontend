import React, { Fragment } from 'react'
import './aplicationCard.css'
import { Link, useNavigate } from 'react-router-dom'



const ApplicationCard = ({data}) => {
  
  const downloadHandlar=()=>{
        // dispatch(DownloadAcknowledgement(data.id))
        window.location.replace(`http://127.0.0.1:8000/api/download/pdf/${data.id}`)
      
  }

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
                  <p>Application Payment Status : <span className={ data.apply_payment_status==='paid'?'greenColor':'redColor'}>{data.apply_payment_status} </span></p>
                    <p>Admission Payment Status : <span className={ data.admission_payment_status==='paid'?'greenColor':'redColor'}>{data.admission_payment_status}</span> </p>
             
                </div>
                <div className='rightDiv'>
                    <div>

                    {/* <button  className='btn btn-primary'>Acknowledgement view</button> */}
                    <button onClick={downloadHandlar} className='btn btn-primary'>Acknowledgement download</button>

                   {data.apply_payment_status!=='paid'?(<Fragment> <span className='paynotic'>*If you dont pay your fees then your application will be rejected  *Check payment review</span> </Fragment>):null}
                   {data.admission_payment_status!=='paid' && data.admission_status==='Selected'?(<Fragment> <span className='paynotic'>*If you dont pay your fees then your application will be rejected  *Check payment review</span> </Fragment>):null}
                   
                   {/* <Link to={`/admission/payment/${data.id}`} className='btn btn-primary Paybtm'>Pay Fees</Link> */}

                   {data.admission_payment_status==='paid' ? <span className='paynotic greenColor'>*Your admission fees pay succefully for further details you can contact with your college</span>:null}

                    </div>
                   <Link className='btn btn-primary btn-sm mt-2' to={`/view/newpayment/${data.id}`}>Payments reviews</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default ApplicationCard