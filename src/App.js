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


import Footer from "./componant/layout/footer/Footer.js"
import WebFont from "webfontloader"

function App() {

useEffect(()=>{
  WebFont.load({
    google:{
      families:['Roboto','Droid Sans','Chilanka'],
    }
  })
})
  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route exact path='/colleges' element={<Home />} />
        <Route exact path='/colleges/:keyword' element={<Home />} />
        <Route exact path='/courses' element={<AllCourses />} />
        <Route exact path='/courses/:keyword' element={<AllCourses />} />
        <Route exact path='/college/:id' element={<CollegeDetails />} />
        <Route exact path='college/course/:id' element={<Courses />} />
        <Route exact path='/course/:id' element={<CourseDetails />} />


        <Route exact path='/about' element={<About />} />


      </Routes>

      <Footer/>

    </BrowserRouter>



  );
}

export default App;
