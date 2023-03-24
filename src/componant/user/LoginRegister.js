
import React, { Fragment, useEffect, useRef, useState } from 'react'
import './LoginRegister.css'
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, login, registerUser } from '../../action/userAction'
import { useLocation, useNavigate,Link } from "react-router-dom"
import Loader from "../layout/loader/loader"
import { useAlert } from "react-alert"

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


    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    })
    const { name, email, password, confirm_password } = user
    const { error, isAuthenticated, loading } = useSelector(state => state.user)

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

    const registerFunction =(e)=>{
        e.preventDefault()
        const myForm=new FormData()

        myForm.set('name',name)
        myForm.set('email',email)
        myForm.set('password',password)
        myForm.set('confirm_password',confirm_password)
        dispatch(registerUser(myForm))

    }
const regisDataChange=(e)=>{
    setUser({ ...user, [e.target.name]: e.target.value })
}

    const redirect = location.search ? location.search.split("=")[1] : "/account";

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isAuthenticated) {
            navigate(redirect)
        }
    }, [dispatch, error, alert, isAuthenticated, navigate, redirect])

    return (
        <Fragment>
            {loading ? < Loader /> : <Fragment>
                {/* login form */}
                <div className="formContainer ">
                    <div className="content">

                        <div>
                            <div className='login_signUp_toggle'>
                                <p onClick={(e) => switchTabs(e, "login")} >Login</p>
                                <p onClick={(e) => switchTabs(e, "register")}>Register</p>
                            </div>
                            <button ref={switcherTab}></button>


                        </div >
                        <form onSubmit={loginFunction} className='loginForm' ref={loginTab}>
                            <div className="user-details loginData">


                                <div className="input-box" id='loginDatadiv-1'>
                                    <span className="details">Email</span>
                                    <input
                                        type="text"
                                        value={loginEmail}
                                        placeholder="Enter your email"
                                        required
                                        onChange={e => setLoginEmail(e.target.value)} />
                                </div>

                                <div className="input-box" id='loginDatadiv-2'>
                                    <span className="details">Password</span>
                                    <input type="text"
                                        value={loginPassword}
                                        placeholder="Enter your password"
                                        required
                                        onChange={e => setLoginPassword(e.target.value)} />
                                </div>

                            </div>

                            <div className="button">
                                <input type="submit" value="Login" />
                            </div>

                        <Link to={'/forgetPassword'}>forget password?...</Link>
                        </form>
                        {/* </div> */}
                        {/* register form */}
                        {/* <div className="content"> */}
                        <form onSubmit={registerFunction} className=' registerForm' ref={registerTab}>
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
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input type="text" placeholder="Enter your username"  />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="text"
                                        value={email}
                                        name='email'
                                        placeholder="Enter your email"
                                        required
                                        onChange={regisDataChange} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input type="text" placeholder="Enter your number" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input type="text"
                                        value={password}
                                        name='password'
                                        placeholder="Enter your password"
                                        required
                                        onChange={regisDataChange} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Confirm Password</span>
                                    <input type="text"
                                        value={confirm_password}
                                        name='confirm_password'
                                        placeholder="Confirm your password"
                                        required
                                        onChange={regisDataChange} />
                                </div>
                            </div>
                            <div className="gender-details">
                                <input type="radio" name="gender" id="dot-1" />
                                <input type="radio" name="gender" id="dot-2" />
                                <input type="radio" name="gender" id="dot-3" />
                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <label for="dot-1">
                                        <span className="dot one"></span>
                                        <span className="gender">Male</span>
                                    </label>
                                    <label for="dot-2">
                                        <span className="dot two"></span>
                                        <span className="gender">Female</span>
                                    </label>
                                    <label for="dot-3">
                                        <span className="dot three"></span>
                                        <span className="gender">Prefer not to say</span>
                                    </label>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                    </div>

                </div>


            </Fragment>}
        </Fragment>
    )
}

export default LoginRegister