import React, { Fragment, useEffect, useState } from 'react'
import "./home.css"
import './seaccarusol.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetCarouselimage, SchemeGetAction } from '../../action/imageAction.js';
import { getColleges } from '../../action/collegeAction.js';
import { getCountAction } from '../../action/userAction.js';
import CountUp from 'react-countup';

const Home = () => {

  const {photos}=useSelector(state=>state.getCarousel)
  const { colleges } = useSelector(state => state.colleges)
  const { scheme } = useSelector(state => state.getScheme)
  const { Total_users,application_count } = useSelector(state => state.getcount)
  const dispatch=useDispatch()

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
            {photos &&  photos.map((_, index) => (
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
            { photos && photos.map((imageUrl, index) => (
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
              <span>Hon'ble Chif Minister</span>
            </div>
            <div className="minister2">
              <img src="https://assets.sentinelassam.com/h-upload/2022/08/05/371399-ranoj-pegu.webp" alt="img" />
              <span>Hon'ble Education Minister</span>
            </div>
          </div>
        </div>
        <div className="boxes">
          {/* <div className="box1   box "> */}
          <div class="card  text-light bg-primary mb-3" style={{ width: '18rem', }}>
            <div class="card-header text-center"><h2 >Institute</h2> </div>
            <div class="card-body">
              <h2 class="card-title text-center"> <CountUp end={colleges && colleges.length} duration={5} />+</h2>

            </div>
          </div>
          {/* </div> */}
          {/* <div className="box2   box"> */}
          <div class="card text-light bg-primary mb-3" style={{ width: '18rem', }}>
            <div class="card-header "><h2 className='text-center'>Applicant</h2></div>
            <div class="card-body">
              <h2 class="card-title text-center"> <CountUp end={Total_users && Total_users} duration={5} />+</h2>

            </div>
          </div>
          {/* </div> */}
          {/* <div className="box3   box">
            <h3>User Count</h3>
            <span>5000</span>
          </div> */}
          <div class="card text-light bg-primary mb-3" style={{ width: '18rem', }}>
            <div class="card-header text-center"><h2>Applications</h2></div>
            <div class="card-body">
              <h2 class="card-title text-center"> <CountUp end={application_count && application_count} duration={5} />+</h2>

            </div>
          </div>
        </div>

        <div className='SchemeSlider mt-5'>
          <h3 className='ms-3'> Scheme</h3>
          <span className='ms-3'>Some educational scheme and scholarship provided by government </span>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: true,
            }}
            // HashNavigation={{
            //     watchState: true,
            //   }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper mt-3"
          >

        {scheme && scheme.map(item=>(
          <SwiperSlide  key={item.id} style={{ width: "300px" }}>
              <div>
                <Link to={item.link}>
                  <img src={item.image_url} alt="img" />

                  {/* <span>Anandaram baruah award</span> */}
                </Link>
              </div>
            </SwiperSlide>
            ))}  
        
          </Swiper>

        </div>

        <div className='govPartner'>


        </div>
      </div>
    </Fragment>
  )
}

export default Home