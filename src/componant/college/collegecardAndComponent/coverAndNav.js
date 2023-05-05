import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const CoverAndNav = ({ college }) => {
    return (
        <Fragment>
            <Link to={`/college/${college.id}`}>
            <div className="containers">
                <img src={college.cover_image_url} alt="Cinque Terre" />
                <div className="bottomleft">
                    <h2>{college.collegeName}</h2>
                    <span><FontAwesomeIcon icon={faLocationPin} />{college.address}</span>
                </div>
                <div className="bottomRight">
                    <p> NAAC 2023 A gread college</p>
                </div>
                
            </div>
            </Link>
            <div className='logo'>
               <Link to={`/college/${college.id}`}>
               <img src={college.logo_image_url} alt='logo' />
               </Link> 
            </div>
            <div className="collegeNav">

                <ul>
                    <li>
                        <Link to={`/college/course/${college.id}`}>Courses</Link>
                    </li>

                    <li><a href="/notice">Notice</a> </li>
                    <li><a href="/notice">Payment</a> </li>
                    <li><a href="/notice">Gallery</a> </li>
                    <li><a href="/myaplication">My Application</a> </li>
                    <li><a href="/myaplication">Contact Us</a> </li>
                    <li><a href="/aboutCollege">About</a></li>
                </ul>
            </div>

            {/* <Search /> */}
        </Fragment>
    )
}

export default CoverAndNav