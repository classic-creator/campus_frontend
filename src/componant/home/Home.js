import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData.js'
import CollegeCard from './CollegeCard.js'
import "./home.css"
import { useSelector, useDispatch } from "react-redux"
import { clearErrors, getColleges } from '../../action/collegeAction.js'
import Loader from '../layout/loader/loader.js'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom'

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
      <div className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={activeIndex === index ? 'active' : ''}
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
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            onClick={handleNextClick}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
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

      </div>
    </Fragment>
  )
}

export default Home