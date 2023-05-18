import React, { Fragment } from 'react'
import Search from '../Search/search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookAtlas, faBuilding, faCheck, faHomeAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'
import "./header.css"
import { useSelector } from 'react-redux'
import { Button } from 'antd'

const Header = () => {

    const {user,loading}=useSelector(state=>state.user)
    return (
        <Fragment>
            <header className='upperHeader1 container-fluid'>

                <div className="left1">
                    <a href="/">
                        <span>GOVERNMENT OF INDIA </span>
                        <span className='spanhindi'>भारत सरकार</span>
                    </a>
                    <a href="/">
                        <span>Ministry of Electronics and Information Technology </span>
                        <span className='spanhindi' >इलेक्ट्रॉनिकी और सूचना प्रौद्योगिकी मंत्रालय</span>
                    </a>
                </div>
                <div className="middle1">
                  {loading ? <Button loading={loading}></Button>  : null}

                </div>
                {/* <div className="right1 ">
                
                        <Link to={'/college/register'} >College Exicutive</Link>
                        <Link className='leftBorder'>Government Exicutive</Link>
                  
                </div> */}
                <div className="right1">
                    {user && user.user_role !== 'student' ? (
                        <Link to="/college/register">College Executive</Link>
                        ) : (
                        <Link >College Executive</Link>
                       
                    )}
                    
                      {user && user.user_role !== 'student' ? (
                        <Link to="/admin">Government Executive</Link>
                        ) : (
                    <Link className='leftBorder'>Government Executive</Link>   )}
                </div>

            </header>

            <header className='upperHeader'>

                <div className='rigt'>

                    <img className='rigtfirst' src='https://indtoday.com/wp-content/uploads/2019/10/india-govt.jpg' alt='aslkfjd' />
                    <img className='rigtsecond' src="https://static.javatpoint.com/fullformpages/images/nic.png" alt="img" />

                </div>

                <div className="middle">

                    <h3>Common Admission Management Plateform For Undergraduate Studies</h3>

                </div>

                <div className="left">

                    <Search link='colleges' placeholder='Search Colleges' />

                </div>
            </header>

            <nav className="navbar navMain navbar-expand-lg sticky-top navbar-dark bg-primary ">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item navli  navli">
                                <NavLink className="nav-link" to="/" exact>
                                    <i>
                                        <FontAwesomeIcon icon={faHomeAlt} />
                                    </i><span>Home</span>
                                </NavLink>
                            </li>
                            <li className="nav-item navli">
                                <NavLink className="nav-link" to="/colleges" exact>
                                    <i>
                                        <FontAwesomeIcon icon={faBuilding} />
                                    </i> <span> Colleges </span>

                                </NavLink>
                            </li>
                            <li className="nav-item navli">
                                <NavLink className="nav-link" to="/courses" exact>
                                    <i>
                                        <FontAwesomeIcon icon={faBookAtlas} />
                                    </i> <span>Courses</span>
                                </NavLink>
                            </li>
                            <li className="nav-item navli">
                                <NavLink className="nav-link" to="/myApplication" exact>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i><span>My Application</span>
                                </NavLink>
                            </li>
                            <li className="nav-item navli">
                                <NavLink className="nav-link" to="/login" exact>
                                    <i>
                                        <FontAwesomeIcon icon={faUserAlt} />
                                    </i><span>Profile</span>
                                </NavLink>
                            </li>
                            {/* <li className="nav-item navli dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default Header