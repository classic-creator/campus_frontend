import React, { Fragment } from 'react'
import './aplicationCard.css'


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
                    <p>Application status : {data.admission_status}</p>
                    <p>Payment status : {data.payment_status}</p>
                </div>
                <div className='rightDiv'>
                    <button className='btn btn-primary'>Acknowledgement</button>
                   
                </div>
            </div>
        </Fragment>
    )
}

export default ApplicationCard