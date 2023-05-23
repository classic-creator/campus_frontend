import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./componant/layout/header/header.js"
import About from "./componant/about/About.js"
import Home from "./componant/home/Home.js"
import Colleges from "./componant/college/Colleges.js"
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
import RegisterCollege from './componant/collegeAdmin/RegisterCollege.js';
import CollegeProfile from './componant/collegeAdmin/CollegeProfile.js';
import CreateDepertment from './componant/collegeAdmin/CreateDepertment.js';
import AllDepertments from './componant/collegeAdmin/AllDepertments.js';
import DepertmentDetails from './componant/collegeAdmin/DepertmentDetails.js';
import AddCourse from './componant/collegeAdmin/AddCourse.js';
import CollegeImages from './componant/collegeAdmin/CollegeImages.js';
import UpdateCourse from './componant/collegeAdmin/UpdateCourse.js';
import CourseDeashboard from './componant/collegeAdmin/CourseDeashboard.js';
import CourseAdmissionList from './componant/collegeAdmin/apply/CourseAdmissionList.js';
import CollegeCourseList from './componant/collegeAdmin/CollegeCourseList.js';
import ApplyDetails from './componant/collegeAdmin/apply/ApplyDetails.js';
import SelectedApplicationList from './componant/collegeAdmin/apply/SelectedApplicationList.js';
import ConfirmStudentsList from './componant/collegeAdmin/apply/ConfirmStudentsList.js';
import CollegeConfirmStudentList from './componant/collegeAdmin/apply/CollegeConfirmStudentList.js';
import AdmissionPayment from './componant/application/AdmissionPayment.js';
import ImageGallery from './componant/college/collegecardAndComponent/ImageGallery.js';
import FileUpload from './componant/application/ApplicationFileUpload';

import ResetPassword from "./componant/user/ResetPassword.js";
import UpdateProfile from './componant/user/updateProfile';
import MyApplication from "./componant/application/MyApplication.js"
import store from "./store"


import Footer from "./componant/layout/footer/Footer.js"
import WebFont from "webfontloader"
import { loadUser } from './action/userAction';
import ProtectedRoute from './protectedRoute/protectedRoute';
// import Sidebar from './componant/collegeAdmin/sidebar';
// import { RouteWrapper } from './protectedRoute/routeWrapper'
import AddNewPayment from './componant/collegeAdmin/Payment/addNewPayment';
import CoursePaymentDetails from './componant/collegeAdmin/Payment/CoursePaymentDetails.js';
import StudentNew_old_payments from './componant/payment/studentNew_old_payments';
import AddLinks from './componant/collegeAdmin/addLinks';
import Links from './componant/collegeAdmin/Links.js';
import Notice from './componant/college/Notice';

import SuperAdminDashboard from './componant/SuperAdmin/SuperAdminDashboard';
import SuperAdminimages from './componant/SuperAdmin/SuperAdminimages.js';
import AllUsers from './componant/SuperAdmin/AllUsers';
import AllColleges from './componant/SuperAdmin/AllCollegesList';
import CollegeCourses from './componant/SuperAdmin/adminCollegeDetails';
import UpdateCollege from './componant/collegeAdmin/updateCollege';
import Paymentsuccess from './componant/payment/paymentsuccess';
import SchemeAdminimages from './componant/SuperAdmin/Schemes';
import UpdateUser from './componant/SuperAdmin/updateUser';
import RegisterWaiting from './componant/collegeAdmin/registerWaiting';
import AllApprovelList from './componant/SuperAdmin/AllApprovelList';
import LoadingBar from 'react-top-loading-bar';
import { useSelector } from 'react-redux';
import RegisterSuccess from './componant/collegeAdmin/registerSuccessPage';
import NotFound from './componant/layout/notFound/NotFound';
// import { useSelector } from 'react-redux';
// import Loader from './componant/layout/loader/loader';


function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      }

    })

    store.dispatch(loadUser())
  })

  return (


    // <BrowserRouter>
    <>


      <ScrollToTop />
      <Header />
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/colleges' element={<Colleges />} />
        <Route exact path='/colleges/:keyword' element={<Colleges />} />
        <Route exact path='/courses' element={<AllCourses />} />
        <Route exact path='/courses/:keyword' element={<AllCourses />} />
        <Route exact path='/college/:id' element={<CollegeDetails />} />
        <Route exact path='college/course/:id' element={<Courses />} />
        <Route exact path='/course/:id' element={<CourseDetails />} />
        <Route exact path='/login' element={<LoginRegister />} />
        <Route exact path='/college/links/:id' element={<Notice />} />
        <Route exact path='/user/reset/:token' element={<ResetPassword />} />
        <Route exact path='/account' element={<ProtectedRoute component={Account} />} />
        <Route exact path='/password/update' element={<ProtectedRoute component={ChangePassword} />} />
        <Route exact path='/profile/update' element={<ProtectedRoute component={UpdateProfile} />} />
        <Route exact path='/apply/:id' element={<ProtectedRoute component={StudentDetailsApply} />} />
        <Route exact path='/apply/address/:id' element={<ProtectedRoute component={ApplyAddress} />} />
        <Route exact path='/apply/education/:id' element={<ProtectedRoute component={ApplyEducationalDetails} />} />
        <Route exact path='/review/application/:id' element={<ProtectedRoute component={ReviewApplication} />} />
        <Route exact path='/upload/file/:id' element={<ProtectedRoute component={FileUpload} />} />
        <Route exact path='/myApplication' element={<ProtectedRoute component={MyApplication} />} />
        <Route exact path='/college/register' element={<ProtectedRoute component={RegisterCollege} />} />
        <Route exact path='/college/waiting' element={<ProtectedRoute component={RegisterSuccess} />} />
        <Route exact path='/admission/payment/:id' element={<ProtectedRoute component={AdmissionPayment} />} />
        <Route exact path='/college/gallery/:id' element={<ProtectedRoute component={ImageGallery} />} />
        <Route exact path='/view/newpayment/:id' element={<ProtectedRoute component={StudentNew_old_payments} />} />
        <Route path="/paymentsuccess" element={<Paymentsuccess />} />
    
        <Route exact path='/college/depertment/create' element={<ProtectedRoute isAdmin={true} component={CreateDepertment} />} />
        <Route exact path='/depertments' element={<ProtectedRoute isAdmin={true} component={AllDepertments} />} />
        <Route exact path='/depertment/:id' element={<ProtectedRoute isAdmin={true} component={DepertmentDetails} />} />
        <Route exact path='/Register/Course/:id' element={<ProtectedRoute isAdmin={true} component={AddCourse} />} />
        <Route exact path='/course/update/:id' element={<ProtectedRoute isAdmin={true} component={UpdateCourse} />} />
        <Route exact path='/college/edit' element={<ProtectedRoute isAdmin={true} component={UpdateCollege} />} />
        <Route exact path='/course/deashboard/:id' element={<ProtectedRoute isAdmin={true} component={CourseDeashboard} />} />
        <Route exact path='/course/apply/:id' element={<ProtectedRoute isAdmin={true} component={CourseAdmissionList} />} />
        <Route exact path='/apply/update/:id' element={<ProtectedRoute isAdmin={true} component={ApplyDetails} />} />
        <Route exact path='/application/selected/:id' element={<ProtectedRoute isAdmin={true} component={SelectedApplicationList} />} />
        <Route exact path='/college/course' element={<ProtectedRoute isAdmin={true} component={CollegeCourseList} />} />
        <Route exact path='/confirm/students/:id' element={<ProtectedRoute isAdmin={true} component={ConfirmStudentsList} />} />
        <Route exact path='/confirm/admission/college' element={<ProtectedRoute isAdmin={true} component={CollegeConfirmStudentList} />} />
        <Route exact path='/add/new/fees/:id' element={<ProtectedRoute isAdmin={true} component={AddNewPayment} />} />
        <Route exact path='/payment/details/:id' element={<ProtectedRoute isAdmin={true} component={CoursePaymentDetails} />} />
        <Route exact path='/add/links' element={<ProtectedRoute isAdmin={true} component={AddLinks} />} />
        <Route exact path='/links' element={<ProtectedRoute isAdmin={true} component={Links} />} />
        <Route exact path='/college/images' element={<ProtectedRoute isAdmin={true} component={CollegeImages} />} />
        <Route exact path='/college/manager/profile' element={<ProtectedRoute isAdmin={true} component={CollegeProfile} />} />

        <Route exact path='/admin' element={<ProtectedRoute isSuperAdmin={true} component={SuperAdminDashboard} />} />
        <Route exact path='/admin/images' element={<ProtectedRoute isSuperAdmin={true} component={SuperAdminimages} />} />
        <Route exact path='/admin/request/colleges' element={<ProtectedRoute isSuperAdmin={true} component={AllApprovelList} />} />
        <Route exact path='/admin/users' element={<ProtectedRoute isSuperAdmin={true} component={AllUsers} />} />
        <Route exact path='/admin/colleges' element={<ProtectedRoute isSuperAdmin={true} component={AllColleges} />} />
        <Route exact path='/admin/college/:id' element={<ProtectedRoute isSuperAdmin={true} component={CollegeCourses} />} />
        <Route exact path='/admin/Schemes' element={<ProtectedRoute isSuperAdmin={true} component={SchemeAdminimages} />} />
        <Route exact path='/admin/user/:id' element={<ProtectedRoute isSuperAdmin={true} component={UpdateUser} />} />

        <Route exact path='/about' element={<About />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </>
    // </BrowserRouter>




  );
}

export default App;
