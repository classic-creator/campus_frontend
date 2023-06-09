import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import Loader from '../layout/loader/loader'
import { Link,  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import "./Account.css"
import { Button, Image } from 'antd'
import { useAlert } from 'react-alert'
import { logout } from '../../action/userAction'


const Account = () => {

    const dispatch=useDispatch()
    const alert=useAlert()
    const navigate=useNavigate()
    const {user, loading,isAuthenticated}=useSelector(state=>state.user)

    useEffect(()=>{
        
        if(isAuthenticated===false){
            navigate("/login")
        }
    },[navigate,isAuthenticated])


    function logoutUser(){
        dispatch(logout())
        alert.success("Logout Successfully")
    }

  return (
    <Fragment>
        {loading ? <Loader/>:
            <Fragment>
        <MetaData title={`${user.name}'s Profile`}/>
        <div className='profileContainer'>
            <div>
                <h1>MY PROFILE</h1>
                <Image width={350} height={350} style={{borderRadius: '100%'}}  src={user.image_url} alt={user.name} />
                <Link to={"/profile/update"}>Edit Profile</Link>
            </div>
            <div>
                <div>
                    <h4>Full Name</h4>
                    <p>{user.name}</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>{user.email}</p>
                </div>
                <div>
                    <h4>Joined On</h4>
                    <p>{(user.created_at)}</p>
                </div>
                <div>
                    <Link to="/myApplication">My Application</Link>
                    <Link to="/password/update">Change password</Link>
                    <Button id='logoutBtn' onClick={logoutUser} loading={loading}>Logout</Button>
                </div>
            </div>
        

        </div>
    </Fragment>
}
    </Fragment>
  )
}

export default Account