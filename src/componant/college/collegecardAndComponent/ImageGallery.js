import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import CoverAndNav from './coverAndNav'
import './imagegallery.css'

const ImageGallery = () => {
    const { photos, college } = useSelector(state => state.collegeDetails);
 
      return (
        <Fragment>
          <CoverAndNav college={college} />
       
       
             <div className="container-fluid mt-3">
 
            <div className="row">
                {photos && photos.map(phot => (
                
                    <div className="col-sm-6 col-md-4 col-lg-3 imageContainer">
                       

                        <img className="img-fluid"  alt='image' src={phot.image_url} />
                        

                    </div>
               
                ))}
                {photos && photos.map(phot => (
                
                    <div className="col-sm-6 col-md-4 col-lg-3 gallerydiv">
                      

                        <img className="img-fluid galleryimg" alt='image' src={phot.image_url} />
                       

                    </div>
               
                ))}

            </div>
            </div> 
        </Fragment >
    )
}

export default ImageGallery