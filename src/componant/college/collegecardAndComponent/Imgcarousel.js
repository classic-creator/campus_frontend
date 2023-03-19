import React, { Fragment } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Imgcarousel = () => {
  return (
    <Fragment>
         <Carousel className='carouselImg' autoPlay infiniteLoop >
                <div className='image'>
                  <img src="/logo192.png" alt='img' />

                </div>
                <div className='image'>
                  <img src="/logo192.png" alt='img' />

                </div>
                <div className='image'>
                  <img src="/logo192.png" alt='img' />

                </div>
              </Carousel> 
    </Fragment>
  )
}

export default Imgcarousel