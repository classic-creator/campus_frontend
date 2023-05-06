import React, { Fragment } from 'react'
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import { Autocomplete  } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

const TestCom = () => {

    const option=[
     
       'item',
     
      
       'item1',
     
      
        'item2',
     
    ]


  return (

    
  <Fragment>   <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={option}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/></Fragment>


  )
}


export default TestCom