import React, { Fragment } from 'react'
import Search from '../Search/search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookAtlas, faBuilding, faCheck, faHomeAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'
import "./header.css"
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
// import Loader from '../loader/loader'

import { useAlert } from 'react-alert'
import { logout } from '../../../action/userAction'
import { Typography } from '@material-ui/core'
const Header = () => {

    const { user, loading, isAuthenticated } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const alert = useAlert()


    function logoutUser() {
        dispatch(logout())
        alert.success("Logout Successfully")


    }

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


                </div>
                {/* <div className="right1 ">
                
                        <Link to={'/college/register'} >College Exicutive</Link>
                        <Link className='leftBorder'>Government Exicutive</Link>
                  
                </div> */}
                <div className="right1">
                    {/* {user && user.user_role !== 'student' ? (
                        <Link to="/college/register">College Executive</Link>
                    ) : (
                        <Link >College Executive</Link>

                    )} */}
                    <Link>
                        {isAuthenticated ? 'Login As :' : (<Link to={'/login'}> Login / Register </Link>)}     {loading ? <Button loading={loading}></Button> : (user && user.name)}
                    </Link>


                    {/* {user && user.user_role !== 'student' ? (
                        <Link to="/admin">Government Executive</Link>
                    ) : (
                        <Link className='leftBorder'>Government Executive</Link>)} */}
                </div>

            </header>

            <header className='upperHeader'>

                <div className='rigt'>

                    <img className='rigtfirst' src='https://indtoday.com/wp-content/uploads/2019/10/india-govt.jpg' alt='aslkfjd' />
                    <img className='rigtsecond' src="https://www.uxdt.nic.in/wp-content/uploads/2020/06/nic-logo-nic-logo-1-bilingual-blue-1-01.jpg?x76268" alt="img" />

                </div>

                <div className="middle">

               <Link to={'/'}><Typography variant="h3"><i>Common Admission  Platform for Undergraduate Studies</i></Typography></Link>

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
                            <li className="nav-item navli  ">
                                <NavLink className="nav-link" to="/" exact>
                                    <span> 
                                         <i>
                                        <FontAwesomeIcon icon={faHomeAlt} />
                                         </i>
                                        Home
                                        </span>
                                </NavLink>
                            </li>
                            <li className="nav-item navli">
                                <NavLink className="nav-link" to="/colleges" exact>
                                <span> <i>
                                        <FontAwesomeIcon icon={faBuilding} />
                                    </i>  Colleges </span>

                                </NavLink>
                            </li>
                            <li className="nav-item navli">
                                <NavLink className="nav-link" to="/courses" exact>
                                <span>  <i>
                                        <FontAwesomeIcon icon={faBookAtlas} />
                                    </i> Courses</span>
                                </NavLink>
                            </li>
                            <li className="nav-item navli">
                                <NavLink className="nav-link" to="/myApplication" exact>
                                <span>    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>My Application</span>
                                </NavLink>
                            </li>
                           
                            <li class="nav-item dropdown ">
                                {isAuthenticated ? <a href='/#' class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i >
                                        {/* <FontAwesomeIcon icon={faUserAlt} /> */}
                                        <img alt='logo' style={{ borderRadius: '100%',width:'28px', height:'28px'  }} src={user && user.image_url} />
                                    </i>
                                    <span className='ms-2'>Profile</span>
                                </a> :
                                    <li className="nav-item navli">
                                        <NavLink className="nav-link" to="/login" exact>
                                        <span>   <i>
                                                <FontAwesomeIcon icon={faUserAlt} />
                                            </i>Login</span>
                                        </NavLink>
                                    </li>

                                }

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to={"/login"}>Account</Link></li>
                                    <li><Link class="dropdown-item" to={'/'} onClick={logoutUser} >Logout</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    {user && user.type === 'admin' ? <li><Link class="dropdown-item" to={"/admin"}>Deashboard</Link></li> : null}
                                    {(user && user.type === 'manager') || (user && user.user_role === 'waiting') || (user && user.user_role === 'instituteAdmin') ? <li><Link class="dropdown-item" to={"/college/register"}>Deashboard</Link></li> : null}
                                    {/* {user && user.user_role !== 'student' 

                                  } */}
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default Header