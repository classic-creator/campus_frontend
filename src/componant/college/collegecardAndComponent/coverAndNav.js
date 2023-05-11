import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const CoverAndNav = ({ college }) => {

    

    return (
        <Fragment>
            <Link to={`/college/${college.college_id}`}>
            <div className="containers">
                <img className='clgCoverimg' src={college.cover_image_url} alt="Cinque Terre" />
                <div className="bottomleft">
                    <h2>{college.collegeName}</h2>
                    {/* <h1>{college.college_id}</h1> */}
                    <span><FontAwesomeIcon icon={faLocationPin} />{college.address}</span>
                </div>
                <div className="bottomRight">
                    <p> NAAC 2023 A gread college</p>
                </div>
                
            </div>
            </Link>
            <div className='logo'>
               <Link to={`/college/${college.college_id}`}>
               <img src={college.logo_image_url} alt='logo' />
               </Link> 
            </div>
            <div className="collegeNav">

                <ul>
                    <li>
                        <Link to={`/college/course/${college.college_id}`}>Courses</Link>
                    </li>

                    <li><Link to={'notice'}>Notice</Link> </li>
                    <li><Link to={'#seatStructure'}>Seat Structure</Link> </li>
                    <li><Link to={`/college/gallery/${college.college_id}`}>Gallery</Link> </li>
                    <li><a herf='#FeeStructure'>Fee structure</a> </li>
                    
                </ul>
            </div>

            {/* <Search /> */}
        </Fragment>
    )
}

export default CoverAndNav