import React, { Fragment, useEffect, useState } from 'react'
import "./home.css"
import './seaccarusol.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetCarouselimage, SchemeGetAction } from '../../action/imageAction.js';
import { getColleges } from '../../action/collegeAction.js';
import { getCountAction } from '../../action/userAction.js';
import CountUp from 'react-countup';
import { TextField} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const Home = () => {

  const { photos } = useSelector(state => state.getCarousel)
  const { scheme } = useSelector(state => state.getScheme)
  const { Total_users, application_count } = useSelector(state => state.getcount)
  const dispatch = useDispatch()

  const { colleges } = useSelector(state => state.colleges)

  const [selectedCollege, setCollege] = useState('')
  const clgoption = colleges && colleges.map(college => (college.collegeName));


  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + photos.length) % photos.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % photos.length);
  };
  // const images = [
  //   'https://s3.ap-south-1.amazonaws.com/assets.reflections.live/1596600285014-kdgubww5.jpeg',
  //   "https://www.brainbuxa.com/uploads/blogs/Education%20System%20in%20India_%20Govt's%20role,%20advantages,%20disadvantages.jpeg?w=873&timestamp=20-14-36&fit=crop",
  //   'https://assets.telegraphindia.com/telegraph/2022/Apr/1650477688_school.jpg',

  //   // Add more image URLs here as needed
  // ];

  useEffect(() => {
    dispatch(getColleges())
    dispatch(GetCarouselimage())
    dispatch(getCountAction())
    dispatch(SchemeGetAction())
  }, [dispatch])


 

  return (
    <Fragment>
      <div id='home' className="container-fluid homediv">
        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-indicators">
            {photos && photos.map((_, index) => (
              <button
                type="button"

                key={index}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={activeIndex === index ? 'active' : ''}
                id='indicator'
                aria-current={activeIndex === index}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner  ">
            {photos && photos.map((imageUrl, index) => (
              <div className={`carousel-item  ${activeIndex === index ? 'active' : ''}`} key={index}>
                <img src={imageUrl.image_url} className="d-block w-100 " alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            onClick={handlePrevClick}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            onClick={handleNextClick}
          >
            <span className="carousel-control-next-icon " aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="bar">
          <div className='edu'>

            <div className="bar1">
              <img src="https://assets.sentinelassam.com/h-upload/2020/11/11/172257-assam-government.jpg" alt="img" />
              <h3>Goverment Of Assam</h3>
            </div>
            <div className="bar1">
              <img src="https://cache.careers360.mobi/media/article_images/2022/7/29/school-students.jpg" alt="img" />
              <h3>Education Depertment Of Assam</h3>
            </div>
          </div>
          <div className="minister">
            <div className="minister1">
              <img src="https://cm.assam.gov.in/documents/34104/55533/CM.jpg/ad0d9308-26b0-8aa4-6764-cb89b59fe740?version=1.0&t=1639826849984" alt="img" />
              <div className='d-flex flex-column'>

                <h3>Hon'ble Chif Minister</h3>
                <p className='font-italic'>-<small><i>Dr Himanta Biswa Sarma</i></small></p>
              </div>
            </div>
            <div className="minister2">
              <img src="https://assets.sentinelassam.com/h-upload/2022/08/05/371399-ranoj-pegu.webp" alt="img" />
              <div className='d-flex flex-column text-start'>

                <h3>Hon'ble Education Minister</h3>
                <p className='text-start'>-<small><i>Ranoj Pegu</i></small> </p>
              </div>
            </div>
          </div>
        </div>


        <div class="box-cards ">
          <div class="box-card red">
            <p class="tip"> <i class="bi bi-buildings me-3"></i>Institute
            </p>
            <p class="second-text">    <CountUp end={colleges && colleges.length} duration={5} />+</p>

          </div>
          <div class="box-card blue">
            <p class="tip"> <i class="bi bi-person-lines-fill me-3"></i>Applicant
            </p>
            <p class="second-text">  <CountUp end={Total_users && Total_users} duration={5} />+</p>
          </div>
          <div class="box-card green">

            <p class="tip"><i class="bi bi-window-stack me-3"></i>Applications</p>

            <p class="second-text"><CountUp end={application_count && application_count} duration={5} />+</p>


          </div>
        </div>

        <div className='searchInstitute' style={{ backgroundImage: "url('/backGround.jpg')" }}>

          <div className="searchbar">

            <h4> Search Institut</h4>
            <div className="">

              {clgoption && clgoption.length > 0 ? (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={clgoption}
                  sx={{
                    width: 300,
                 
                  }}
                  onChange={(event, value) => setCollege(value)}
                  value={selectedCollege}
                  renderInput={(params) => (
                    <TextField {...params} name="college1" label="-All-" />
                  )}
                />
              ) : (
                <p>No colleges available.</p>
              )}
            </div>

            {/* <h2>Total institute - xxx</h2> */}
          </div>
          <div className="searchresult">

            <div className="instituteresult">

              {colleges &&
                colleges
                  .filter(college => !selectedCollege || college.collegeName === selectedCollege)
                  .map(college => (

                    <Link to={`/college/${college.id}`}>  <div>
                      <h2>{college.collegeName}  <i className="bi bi-box-arrow-up-right"></i> </h2>
                      <span>{college.city}, {college.address}</span>
                    </div></Link>
                  ))
              }


            </div>
            <Link className='clgLink' to={'/colleges'} > <span>All Colleges  <i class="bi bi-box-arrow-up-right"></i>  </span></Link>
          </div>

        </div>

        <div className='SchemeSlider d-flex'>
          <div className='nameBox'>
            <div className='schemeHead'><h3 className='ms-3'> Schemes</h3>
              <span className='ms-3'>Some educational scheme and scholarship </span>

            </div>
            <div className='schemeName'>
              <ul>
                {scheme && scheme.map(e=>  <li><Link to={e.link}> {e.name}</Link></li>)}
              
              </ul>
            </div>

          </div>
          <div className='imagebox ms-3'>
            <Swiper
              slidesPerView={4}
              centeredSlides={true}
              spaceBetween={10}
              // grabCursor={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              autoplay={{
                delay: 3500,
                // disableOnInteraction: true,
              }}
              // HashNavigation={{
              //     watchState: true,
              //   }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper mt-3"
            >

              {scheme && scheme.map(item => (
                <SwiperSlide key={item.id}>
                  <div>
                    <Link to={item.link}>
                      <img src={item.image_url} style={{ borderRadius: '10px' }} alt="img" />

                      <span>{item.name}</span>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </div>

        <div className='govPartner'>
          {/* <div> <h3>Major iniciative</h3> </div> */}
          <div className='iniciatives'>
            <Link to={'https://gandhi.gov.in/'}>
              <img src="https://dsel.education.gov.in/themes/nexus/assets/images/150yrs.png" style={{ borderRadius: '10px' }} alt="img" />


            </Link>
            <Link to={'https://www.india.gov.in/'}>
              <img src="https://dsel.education.gov.in/themes/nexus/assets/images/india_gov_logo.png" style={{ borderRadius: '10px' }} alt="img" />


            </Link>
            <Link to={'https://data.gov.in/'}>
              <img src="https://dsel.education.gov.in/themes/nexus/assets/images/datagov_logo.png" style={{ borderRadius: '10px' }} alt="img" />
            </Link>
            <Link to={'https://www.mygov.in/'}>
              <img src="https://dsel.education.gov.in/themes/nexus/assets/images/my_gov_logo.png" style={{ borderRadius: '10px' }} alt="img" />


            </Link>
            <Link to={'https://pmnrf.gov.in/en/'}>
              <img src="https://dsel.education.gov.in/themes/nexus/assets/images/pmnrf-logo.png" style={{ borderRadius: '10px' }} alt="img" />


            </Link>
            <Link to={'https://scholarships.gov.in/'}>
              <img src="https://dsel.education.gov.in/themes/nexus/assets/images/NSP-logo.jpg" style={{ borderRadius: '10px' }} alt="img" />


            </Link>

          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Home