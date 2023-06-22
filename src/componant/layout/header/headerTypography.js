import React, { Fragment } from 'react'
import "./headerTypography.css"
const HeaderTypography = ({header,mb,mt,course}) => {
  return (
   <Fragment>
      <div className={`headdiv  mb-${mb}  mt-${mt}`}>
        <h2 className='m-3' >{header}</h2>
       {course ?  <span>{ course.depertment_name }</span> : null}

      </div>

   </Fragment>
  )
}

export default HeaderTypography