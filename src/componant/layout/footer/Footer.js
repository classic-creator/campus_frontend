import { faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./footer.css"


const Footer = () => {
  return (
    <footer id="footer">

    <div className='leftFooter'>
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download app for android and Ios mobil phone </p>
        {/* <img src={Playstore} alt="playstore" />
        <img src={Appstore} alt="app store" /> */}
    </div>

    <div className="midfooter">
        <h1>CAMPUS</h1>
        <p>Common Admission Management Plateform for under graduate studies</p>
        <p>Education is first priority</p>
        <p>copyright 2022 &copy; NIC</p>
        <a href="/">instagram</a>
        <a href="/">facebook</a>
    </div>

    <div className="rightfooter">

        <h4> Contact Us</h4>
        <p><FontAwesomeIcon icon={faLocation}/> North lakhimpur Nic office,DC complex</p>
       
       <p> <FontAwesomeIcon icon={faPhone}/>656565324986</p>
       <p> <FontAwesomeIcon icon={faPhone}/>656565324986</p>
       <p> <FontAwesomeIcon icon={faMailBulk}/>campus@gmail.com</p>
    </div>
</footer>
  )
}

export default Footer