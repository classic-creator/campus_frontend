import React, { Fragment } from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const ImportantLinkCard = () => {
  return (
   <Fragment>
     <div className='detailsdiv-2-1 mr-3'>
              <h3>Important links</h3>
              <Marquee className='marqueeText'> 

             
                <a href={"/links"}>http://link.com</a>
                <a href={"/links"}>http://link.com</a>
                <a href={"/links"}>http://link.com</a>
           
            
              </Marquee>
              <span><Link to={"/course/notice"}>read more...</Link></span>
            </div>
   </Fragment>
  )
}

export default ImportantLinkCard