import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Imgcarousel = () => {
  const { photos } = useSelector(state => state.collegeDetails)
  return (
    <Fragment>
      <Carousel className='carouselImg me-3' autoPlay infiniteLoop >
        {/*  */}
        {photos && photos.map(photo => (
          <div key={photo.image_url} className='image'>

            <img src={photo.image_url}  alt='img' />

          </div>))}


      </Carousel>
    </Fragment>
  )
}

export default Imgcarousel