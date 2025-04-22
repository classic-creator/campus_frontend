
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React ,{Fragment}from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
// import { MdFacebook, MdInsertChart } from 'react-icons/md'


const Footer = () => {
  return (
<Fragment>
    {/* <section>Footer Example 4</section> */}
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Common Admission  Platform for Undergraduate Studies - <span>CAMPUS</span></h3>

				<p class="footer-links">
					<Link to={'/'} class="link-1">Home</Link>
					
					<Link to={'/colleges'}>Colleges</Link>
				
					<Link to={'/courses'}>Courses</Link>
				
					<Link to={'/myApplication'}>Applications</Link>
					
					<Link to={'/account'}>Profile</Link>
					<Link to={'/college/manager/profile'}>College Deashboard</Link>
					
					
				</p>

				<p class="footer-company-name"> Design and Developed by NIC COPYRIGHT © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>NIC North Lakhimpur</span> Assam, North Lakhimpur</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 555 555 5555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@gov.nic.in</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About NIC</span>
					National Informatics Centre provides ICT services to government departments, promotes digital governance, and empowers citizens through technology.
				</p>

				<div class="footer-icons">

					<Link to={''}><i class="bi bi-facebook"></i> </Link>
					<Link to={''}><i class="bi bi-instagram"></i></Link>
					<Link to={''}><i class="bi bi-twitter"></i></Link>
					<Link to={''}><i class="bi bi-linkedin"></i></Link>

				</div>

			</div>

		</footer>
    </Fragment>
//     <footer id="footer">

//     <div className='leftFooter'>
//         <h4>DOWNLOAD OUR APP</h4>
//         <p>Download app for android and Ios mobil phone </p>
//         {/* <img src={Playstore} alt="playstore" />
//         <img src={Appstore} alt="app store" /> */}
//     </div>

//     <div className="midfooter">
//         <h1>CAMPUS</h1>
//         <p>Common Admission Management Plateform for under graduate studies</p>
//         <p>Education is first priority</p>
//         <p>copyright 2022 &copy; NIC</p>
//         <a href="/">instagram</a>
//         <a href="/">facebook</a>
//     </div>

//     <div className="rightfooter">

//         <h4> Contact Us</h4>
//         <p><FontAwesomeIcon icon={faLocation}/> North lakhimpur Nic office,DC complex</p>
       
//        <p> <FontAwesomeIcon icon={faPhone}/>656565324986</p>
//        <p> <FontAwesomeIcon icon={faPhone}/>656565324986</p>
//        <p> <FontAwesomeIcon icon={faMailBulk}/>campus@gmail.com</p>
//     </div>
// </footer>
  )
}

export default Footer