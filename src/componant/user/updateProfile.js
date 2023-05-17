import React, { Fragment, useState, useEffect } from "react";
import "./updateProfile.css";
import Loader from "../layout/loader/loader";
import { MdFace } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";

import { useAlert } from "react-alert";

import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import { UpdateProfileAction, loadUser } from "../../action/userAction";
import { clearErrors } from "../../action/applyAction";
import { CHANGE_PROFILE_RESET } from "../../constants/userConstants";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate=useNavigate()

  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);


  const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
  const [avater, setAvater] = useState();
 

  const updateProfileSubmi = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("name", name);
    // myForm.set("email", email);
    myForm.append("profile", avater);

    dispatch(UpdateProfileAction(myForm));
  };

  const updateProfileDataChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setAvater(file);
       
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
    
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(loadUser());

      navigate("/account");

      dispatch({
        type:CHANGE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, alert, navigate, user, isUpdated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Update Profile" />
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form
                className="updateProfileForm"
                encType="multipart/form-data"
               
              >
                <div className="updateProfileName">
                  <MdFace />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
           

                <div id="updateProfileImage">
               
                  <input
                    type="file"
                    name="avater"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  onClick={updateProfileSubmi}
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default UpdateProfile;