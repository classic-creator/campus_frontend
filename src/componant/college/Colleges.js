import React, { Fragment, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';
import Loader from '../layout/loader/loader';
import { clearErrors, getColleges } from '../../action/collegeAction';
import CollegeCard from '../home/CollegeCard';


const Colleges = () => {
    
  const dispatch = useDispatch();
  const alert = useAlert();
  const { keyword } = useParams()

  const { loading, error, colleges } = useSelector(state => state.colleges)
 


  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getColleges(keyword))
  }, [dispatch, error, alert, keyword])

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledColleges = shuffleArray([...colleges]);
  return (
<Fragment>
        {loading ? <Loader /> : null}
        {/* <Fragment> */}

        <MetaData title="Colleges" />
        <div className='container'>
          {shuffledColleges && shuffledColleges.map(college => (
            <CollegeCard  key={college.id} college={college} />
          ))}
        </div>
      {/* </Fragment>} */}

</Fragment>
  )
}

export default Colleges