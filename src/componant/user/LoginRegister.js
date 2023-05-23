
import React, { Fragment, useEffect, useRef, useState } from 'react'
import './LoginRegister.css'
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, forgetPassword, login, registerUser } from '../../action/userAction'
import { useLocation, useNavigate } from "react-router-dom"
import Loader from "../layout/loader/loader"
import { useAlert } from "react-alert"
import { Button } from 'antd'

const LoginRegister = () => {
    const loginTab = useRef(null)
    const registerTab = useRef(null)
    const switcherTab = useRef(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const alert = useAlert()

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('')
    const [profile, setProfile] = useState()

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        phon_no: '',
        gender: '',
        user_role: '',
        // profile:'',
    })
    const { name, email, password, confirm_password, phon_no, gender, user_role } = user

    const { error, isAuthenticated, loading } = useSelector(state => state.user)
    const { loading: forgetLoading, message, error: forgetError } = useSelector(state => state.forgetPassword)


    const [forgetEmail, setForgetEmail] = useState()


    const forgetPasswordFunction = (e) => {
        e.preventDefault();

        const myForm = new FormData()
        myForm.set('forgetEmail', forgetEmail)

        dispatch(forgetPassword(myForm))
    }

    const switchTabs = (e, tab) => {

        if (tab === "login") {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");

            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }
    }


    const loginFunction = (e) => {
        e.preventDefault()
        dispatch(login(loginEmail, loginPassword))
    }

    const registerFunction = (e) => {
        e.preventDefault()
        const myForm = new FormData()

        myForm.append('name', name)
        myForm.append('email', email)
        myForm.append('password', password)
        myForm.append('confirm_password', confirm_password)
        myForm.append('phon_no', phon_no)
        myForm.append('gender', gender)
        myForm.append('user_role', user_role)
        myForm.append('profile', profile)

        // console.log(myForm)
        dispatch(registerUser(myForm))

    }
    const regisDataChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleImageChange = (event) => {
        // setImage(event.target.files[0]);
        const file = event.target.files[0];
        if (file) {
            setProfile(file);

        }
    };

    const redirect = location.search ? location.search.split("=")[1] : "/account";

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (forgetError) {
            alert.error(forgetError)
            dispatch(clearErrors())

        }
        if (message) {
            alert.success(message)

        }
        if (isAuthenticated) {
            navigate(redirect)
        }
    }, [dispatch, error, forgetError, message, alert, isAuthenticated, navigate, redirect])

    return (
        <Fragment>
            {/* {loading ? < Loader /> : <Fragment> */}
            {/* login form */}
            <div className="formContainer ">
                <div className="content">

                    <div>
                        <div className='login_signUp_toggle'>
                            <p onClick={(e) => switchTabs(e, "login")} >Login</p>
                            <p onClick={(e) => switchTabs(e, "register")}>Register</p>
                        </div>
                        <button id='switch' ref={switcherTab}></button>


                    </div >

                    <form onSubmit={loginFunction} className='loginForm' ref={loginTab}>
                        <div className="user-details loginData">


                            <div className="input-box" id='loginDatadiv-1'>
                                <span className="details">Email</span>
                                <input
                                    type="email"
                                    value={loginEmail}
                                    placeholder="Enter your email"
                                    required
                                    onChange={e => setLoginEmail(e.target.value)} />
                            </div>

                            <div className="input-box" id='loginDatadiv-2'>
                                <span className="details">Password</span>
                                <input type={showPassword ? 'text' : 'password'}
                                    value={loginPassword}
                                    placeholder="Enter your password"
                                    required
                                    onChange={e => setLoginPassword(e.target.value)} />
                            </div>
                            <div className='showPassword d-flex'>
                                <input type="checkbox" onClick={togglePasswordVisibility} />
                                <span>Show Password</span>
                            </div>

                        </div>

                        <div className="button ">
                            {/* <input type="submit" value="Login" /> */}
                            <Button loading={loading} onClick={loginFunction}>Login</Button>
                        </div>

                        {forgetLoading ? <Loader /> : <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Forget_pass">
                            Forget password?
                        </button>}
                    </form>

                    {/* </div> */}
                    {/* register form */}
                    {/* <div className="content"> */}
                    <form onSubmit={registerFunction} className='registerForm' ref={registerTab}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text"
                                    value={name}
                                    name='name'
                                    placeholder="Enter your name"
                                    required
                                    onChange={regisDataChange} />
                            </div>
                            {/* <div className="input-box">
                                    <span className="details">Username</span>
                                    <input type="text" placeholder="Enter your username" />
                                </div> */}
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="email"
                                    value={email}
                                    name='email'
                                    placeholder="Enter your email"
                                    required
                                    onChange={regisDataChange} />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="number" onChange={regisDataChange} name='phon_no' value={phon_no} placeholder="Enter your number" />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password"
                                    value={password}
                                    name='password'
                                    placeholder="Enter your password"
                                    required
                                    onChange={regisDataChange} />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type={showPassword ? 'text' : 'password'}
                                    value={confirm_password}
                                    name='confirm_password'
                                    placeholder="Confirm your password"
                                    required
                                    onChange={regisDataChange}
                                    id='ConfirmPass'
                                />
                            <div className='showPassword d-flex'>
                                <input type="checkbox" className='align-item-center me-2' id='checkBox' onClick={togglePasswordVisibility} />
                                <span>Show Password</span>
                            </div>
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" onChange={regisDataChange} value='male' name="gender" id="dot-1" />
                            <input type="radio" onChange={regisDataChange} value='female' name="gender" id="dot-2" />
                            <input type="radio" onChange={regisDataChange} value='other' name="gender" id="dot-3" />
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Other</span>
                                </label>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="input-box applyinput me-5">
                                <span className="details">Registation Type</span>
                                <select onChange={regisDataChange} name="user_role" value={user_role}  >
                                    <option value=''>Select</option>
                                    <option name="user_role" value='student'>Student Registation</option>
                                    <option name="user_role" value='instituteAdmin'>User Registation for college</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Profile photo</span>
                                <input type="file" onChange={handleImageChange} />

                            </div>

                        </div>
                        <div className="button">
                            <Button onClick={registerFunction} loading={loading} >Register</Button>
                        </div>
                    </form>
                    <form onSubmit={forgetPasswordFunction}>
                        <div className="modal fade" id="Forget_pass" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Enter Your Email</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="input-group flex-nowrap">
                                            <input type="email"
                                                className="form-control" onChange={e => setForgetEmail(e.target.value)}
                                                value={forgetEmail}
                                                required
                                                name='forgetEmail'
                                                placeholder='Enter your email'
                                                aria-label="Username" aria-describedby="addon-wrapping" />

                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <input type="submit" data-bs-dismiss="modal" className="btn btn-primary" value='Get Link' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>

            </div>


            {/* </Fragment>} */}
        </Fragment>
    )
}

export default LoginRegister