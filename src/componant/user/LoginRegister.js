import { Button } from '@material-ui/core'
import React, { Fragment, useRef } from 'react'
import './LoginRegister.css'

const LoginRegister = () => {
    const loginTab = useRef(null)
    const registerTab = useRef(null)
    const switcherTab = useRef(null)

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

    return (
        <Fragment>
            {/* Register form */}
            <div className="formContainer ">
                <div className="content">
               
                    <div>
                        <div className='login_signUp_toggle'>
                            <p onClick={(e) => switchTabs(e, "login")} >Login</p>
                            <p onClick={(e) => switchTabs(e, "register")}>Register</p>
                        </div>
                        <button ref={switcherTab}></button>
                    

                </div >
                    <form action="#" className='loginForm' ref={loginTab}>
                        <div className="user-details">
                            
                           
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" required />
                            </div>
                            
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="text" placeholder="Enter your password" required />
                            </div>
                            
                        </div>
                        
                        <div className="button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                {/* </div> */}
                {/* login form */}
                {/* <div className="content"> */}
                    <form action="#" className=' registerForm' ref={registerTab}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input type="text" placeholder="Enter your username" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="text" placeholder="Enter your password" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="text" placeholder="Confirm your password" required />
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


        </Fragment>
    )
}

export default LoginRegister