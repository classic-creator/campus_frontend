import React, { Fragment } from 'react'
import Search from '../Search/search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookAtlas, faBuilding, faCheck, faHomeAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'
import "./header.css"
import { useDispatch, useSelector } from 'react-redux'
import { Button, Image, Progress } from 'antd'
// import Loader from '../loader/loader'
import LoadingBar from 'react-top-loading-bar';
import { LinearProgress } from '@material-ui/core'
import Loader from '../loader/loader'
import { useAlert } from 'react-alert'
import { logout } from '../../../action/userAction'
const Header = () => {

    const { user, loading ,isAuthenticated} = useSelector(state => state.user)
    const dispatch=useDispatch()
    const alert=useAlert()


    function logoutUser(){
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
                    {loading ? <Button loading={loading}></Button> : null}

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
                    Login As : {user && user.name}
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
                            {/* <li className="nav-item navli">
                                <NavLink className="nav-link" to="/login" exact>
                                    <i>
                                        <FontAwesomeIcon icon={faUserAlt} />
                                    </i><span>Profile</span>
                                </NavLink>
                            </li> */}
                            <li class="nav-item dropdown ">
                           {isAuthenticated ?     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i >
                                        {/* <FontAwesomeIcon icon={faUserAlt} /> */}
                                        <Image style={{borderRadius: '100%'}} width={25} height={25} src={user && user.image_url}/>
                                    </i>
                                    <span className='ms-2'>Profile</span>
                                </a> :   
                               <li className="nav-item navli">
                                <NavLink className="nav-link" to="/login" exact>
                                    <i>
                                        <FontAwesomeIcon icon={faUserAlt} />
                                    </i><span>Login</span>
                                </NavLink>
                            </li>  

                        }

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to={"/login"}>Account</Link></li>
                                    <li><Link class="dropdown-item" to={'/'} onClick={logoutUser} >Logout</Link></li>
                                    <li><hr class="dropdown-divider"/></li>
                                  {user && user.type==='admin' ?  <li><Link class="dropdown-item" to={"/admin"}>Deashboard</Link></li> :null}
                                  {(user && user.type==='manager') || (user && user.user_role === 'waiting')  || (user && user.user_role === 'instituteAdmin')  ?  <li><Link class="dropdown-item" to={"/college/register"}>Deashboard</Link></li> :null}
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