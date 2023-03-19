import {  faLocationDot, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"


const CollegeCard = ({ college }) => {
    return (
        <Link className='card_body' to={`/college/${college.id}`}>
                 
                        <img src="/collegeimg.jpg" alt="img" />
                  
                    <div >
                            <h2>{college.collegeName}</h2>
                            <p > <FontAwesomeIcon icon={faLocationDot}/> {college.address}</p>
                            <p > <FontAwesomeIcon icon={faMailBulk}/> {college.email}</p>
                            <p >{college.description}</p>
                            <p ><small className="text-muted">Last updated 3 mins ago</small></p>
                            
                    </div>
             
            
        </Link>
    )
}

export default CollegeCard