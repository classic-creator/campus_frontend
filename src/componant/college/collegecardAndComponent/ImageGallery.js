import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import CoverAndNav from './coverAndNav'
import './imagegallery.css'
import {Image} from 'antd'
import HeaderTypography from '../../layout/header/headerTypography'

const ImageGallery = () => {
    const { photos, college } = useSelector(state => state.collegeDetails);
 
      return (
        <Fragment>
          <CoverAndNav college={college} />
       
          <HeaderTypography header={'Gallery'} mb={3} mt={1}/>
       
             <div className="container-fluid mt-3">
 
            <div className="row">
                {photos && photos.map(phot => (
                
                    <div className="col-sm-6 col-md-4 col-lg-3 imageContainer">
                       

                        <Image width={250} height={200} alt='photos' src={phot.image_url} />
                        

                    </div>
               
                ))}
                {photos && photos.map(phot => (
                
                    <div className="col-sm-6 col-md-4 col-lg-3 imageContainer">
                       

                        <Image width={250} height={200} alt='photos' src={phot.image_url} />
                        

                    </div>
               
                ))}
              

            </div>
            </div> 
        </Fragment >
    )
}

export default ImageGallery