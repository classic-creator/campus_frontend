import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Button } from 'antd'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const CoverAndNav = ( {college ,scrollToSection,courses,seatStructure ,eligibility,duration} ) => {

   

    return (
        <Fragment>
            <Link to={`/college/${college && college.college_id}`}>
            <div className="containers">
                <img className='clgCoverimg' src={college && college.cover_image_url} alt="College Cover" />
                <div className="bottomleft">
                    <h2>{ college && college.collegeName}</h2>
                    <h4>{college && college.depertment_name}</h4>
                    {/* <h1>{college && college.college_id}</h1> */}
                    <span><FontAwesomeIcon icon={faLocationPin} />{college && college.address}</span>
                </div>
                <div className="bottomRight">
                    <p> NAAC 2023 A gread college</p>
                </div>
                
            </div>
            </Link>
            <div className='logo'>
               <Link to={`/college/${college && college.college_id}`}>
               <img src={college && college.logo_image_url} alt='logo' />
               </Link> 
            </div>
            <div className="collegeNav">

                <ul>
                    <li>
                        <Link to={`/college/course/${college && college.college_id}`}>Depertments</Link>
                    </li>
                    <li>
                        <Link to={`/college/links/${college && college.college_id}`}>Links</Link>
                    </li>
                    {courses ?   <li><span  onClick={() => scrollToSection('courses')} >Courses</span> </li>:null }
                    {/* <li><Link to={'notice'}>Notice</Link> </li> */}
                   {seatStructure? <li><span  onClick={() => scrollToSection('section1')} >Seat Structure</span> </li>:null}
                    <li><Link to={`/college/gallery/${college && college.college_id}`}>Gallery</Link> </li>
                    {/* <li><Link >Fee structure</Link> </li> */}
                    {eligibility ?   <li><span  onClick={() => scrollToSection('eligibility')} >Eligibility</span> </li>:null }
                    {duration ?   <li><span  onClick={() => scrollToSection('duration')} >Duration</span> </li>:null }
                    
                </ul>
            </div>

            {/* <Search /> */}
        </Fragment>
    )
}

export default CoverAndNav