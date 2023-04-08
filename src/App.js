import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./componant/layout/header/header.js"
import About from "./componant/about/About.js"
import Home from "./componant/home/Home.js"
import AllCourses from "./componant/college/AllCourses.js"
import CollegeDetails from "./componant/college/CollegeDetails.js"
import Courses from "./componant/college/courses.js"
import CourseDetails from "./componant/college/courseDetails.js"
import LoginRegister from "./componant/user/LoginRegister.js"
import Account from "./componant/user/Account.js"
import ChangePassword from "./componant/user/ChangePassword.js"
import StudentDetailsApply from "./componant/application/StudentDetailsApply"
import ApplyAddress from './componant/application/applyAddress';
import ApplyEducationalDetails from './componant/application/ApplyEducationalDetails.js';
import ReviewApplication from './componant/application/ReviewApplication.js';

import ResetPassword from "./componant/user/ResetPassword.js"
import MyApplication from "./componant/application/MyApplication.js"
import store from "./store"


import Footer from "./componant/layout/footer/Footer.js"
import WebFont from "webfontloader"
import { loadUser } from './action/userAction';
import ProtectedRoute from './protectedRoute/protectedRoute';

function App() {
  
  
 

useEffect(()=>{
  WebFont.load({
    google:{
      families:['Roboto','Droid Sans','Chilanka'],
    }
  })
  store.dispatch(loadUser())
})
  return (

    <BrowserRouter>

      <Header />

      <Routes>


        <Route exact path='/' element={<Home />} />
        <Route exact path='/colleges' element={<Home />} />
        <Route exact path='/colleges/:keyword' element={<Home />} />
        <Route exact path='/courses' element={<AllCourses />} />
        <Route exact path='/courses/:keyword' element={<AllCourses />} />
        <Route exact path='/college/:id' element={<CollegeDetails />} />
        <Route exact path='college/course/:id' element={<Courses />} />
        <Route exact path='/course/:id' element={<CourseDetails />} />
        <Route exact path='/login' element={<LoginRegister/>} />
        <Route exact path='/user/reset/:token' element={<ResetPassword/>} />
        <Route exact path='/account' element={<ProtectedRoute component={Account} />} />
        <Route exact path='/password/update' element={<ProtectedRoute component={ChangePassword} />} />
        <Route exact path='/apply/:id' element={<ProtectedRoute component={StudentDetailsApply} />} />
        <Route exact path='/apply/address/:id' element={<ProtectedRoute component={ApplyAddress} />} />
        <Route exact path='/apply/education/:id' element={<ProtectedRoute component={ApplyEducationalDetails} />} />
        <Route exact path='/review/application/:id' element={<ProtectedRoute component={ReviewApplication} />} />
        <Route exact path='/myApplication' element={<ProtectedRoute component={MyApplication} />} />
       


        <Route exact path='/about' element={<About />} />


      </Routes>

      <Footer/>

    </BrowserRouter>




  );
}

export default App;
