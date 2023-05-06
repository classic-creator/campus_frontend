import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData.js'

import "./home.css"


const Home = () => {


  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };
  const images = [
    'https://assets.sentinelassam.com/h-upload/2020/11/11/172257-assam-government.jpg',
    'https://yt3.ggpht.com/a/AATXAJzoKjsscbsknY5-d43HqovorX2sC4VGxVfgew=s900-c-k-c0xffffffff-no-rj-mo',
    'https://3.bp.blogspot.com/-cFllAAzc4Tk/XN6YxW3LyuI/AAAAAAAACFU/Kc-483lCEwkoK-TM6C4WyWxEDcFZdTLkwCLcBGAs/s1600/256a.png',

    // Add more image URLs here as needed
  ];
  return (
    <Fragment>
      <div className="container-fluid homediv">
        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-indicators">
            {images.map((_, index) => (
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
            {images.map((imageUrl, index) => (
              <div className={`carousel-item  ${activeIndex === index ? 'active' : ''}`} key={index}>
                <img src={imageUrl} className="d-block w-100 " alt={`Slide ${index + 1}`} />
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
          <div className="bar1">
            <img src="https://assets.sentinelassam.com/h-upload/2020/11/11/172257-assam-government.jpg" alt="img" />
            <h3>Goverment Of Assam</h3>
          </div>
          <div className="bar1">
            <img src="https://cache.careers360.mobi/media/article_images/2022/7/29/school-students.jpg" alt="img" />
            <h3>Education Depertment Of Assam</h3>
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
          <div className="box1   box ">
            <h3>Registered College</h3>
            <span>3000</span>
          </div>
          <div className="box2   box">
            <h3>Application Count</h3>
            <span>4000</span>
          </div>
          <div className="box3   box">
            <h3>User Count</h3>
            <span>5000</span>
          </div>
        </div>


        <div className="schemes">
            <h2>SCHEMES</h2>
            <p>Some education related Schemes/Scholarship to making higher education more accessible</p>
          <div className='schemes_body'>
            <div className='schemesCard'>
              <img src="https://farm2.staticflickr.com/1764/43537569152_1e028fc7f6_o.jpg" alt="" />
              <span>UGC Scholarships</span>
            </div>
            <div className='schemesCard'>
              <img src="https://i0.wp.com/www.dailylifeinformation.com/wp-content/uploads/2017/08/20200901_141044-e1598950100519.jpg?resize=527%2C296&ssl=1" alt="" />
              <span>Anundoram Barooah Award</span>
            </div>
            <div className='schemesCard'>
              <img src="https://i0.wp.com/www.dailylifeinformation.com/wp-content/uploads/2017/08/20200901_141044-e1598950100519.jpg?resize=527%2C296&ssl=1" alt="" />
              <span>Anundoram Barooah Award</span>
            </div>
            <div className='schemesCard'>
              <img src="https://i0.wp.com/www.dailylifeinformation.com/wp-content/uploads/2017/08/20200901_141044-e1598950100519.jpg?resize=527%2C296&ssl=1" alt="" />
              <span>Anundoram Barooah Award</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home