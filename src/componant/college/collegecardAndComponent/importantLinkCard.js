import React, { Fragment } from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const ImportantLinkCard = () => {
  return (
   <Fragment>
     <div className='detailsdiv-2-1 mr-3'>
              <h3>Important links</h3>
              <Marquee className='marqueeText'> 

              <ul>
                <Link to={"/links"}>http://link.com</Link>
              </ul>
            
              </Marquee>
              <span><Link to={"/course/notice"}>read more...</Link></span>
            </div>
   </Fragment>
  )
}

export default ImportantLinkCard