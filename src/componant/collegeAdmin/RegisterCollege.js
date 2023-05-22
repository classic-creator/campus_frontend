import { Form, Formik } from 'formik'
import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import TextField from '../application/textField'
import * as Yup from 'yup'
import './registercollege.css'
import {  clearErrors, collegeRegisterAction } from '../../action/collegeAdminAction'
import Loader from "../layout/loader/loader"
import SelectField from '../application/SelectField'
import { REGISTER_COLLEGE_RESET } from '../../constants/collegeAdminConstants'
import TextArea from '../application/areainput'


const RegisterCollege = () => {

    

    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate=useNavigate()
    const location=useLocation()
    
  
    const { error,  message, loading } = useSelector(state => state.college)
    const {user}=useSelector(state=>state.user)

    const redirect = location.search ? location.search.split("=")[1] : "/college/manager/profile";
    const waitingredirect = location.search ? location.search.split("=")[1] : "/college/waiting";
   
    // 
      useEffect(() => {
                if(message)
                {
                    alert.success("College Register Success")
                    // dispatch(loadUser())
                    // navigate(redirect)
                    // window.location.reload(false);
                    // user['type']='manager'
                    user['user_role']='waiting'
                    dispatch({type:REGISTER_COLLEGE_RESET})
                    // console.log(user)
                }
                if(error){
                    alert.error(error)
                    dispatch(clearErrors())
                }
                if(user['type']==='manager'){
                  navigate(redirect)
                }
       
                if(user['user_role']==='waiting'){
                  navigate(waitingredirect)
                }
       
      }, [error,navigate, dispatch,waitingredirect, message,user,redirect, alert])


    const validate = Yup.object({

        collegeName: Yup.string().required('required'),
        // district: Yup.string().required('required'),
        email: Yup.string().email('email is invalid').required('required'),
        description: Yup.string().required('required'),
        rating: Yup.string().required('required'),
        address: Yup.string().required('required'),
        city: Yup.string().required('required'),
      
       
      })
    
      const districtOptions = [
        { value: '', label: 'Select' },
        { value: 'baksa', label: 'Baksa' },
        { value: 'barpeta', label: 'Barpeta' },
        { value: 'biswanath', label: 'Biswanath' },
        { value: 'bongaigaon', label: 'Bongaigaon' },
        { value: 'cachar', label: 'Cachar' },
        { value: 'charaideo', label: 'Charaideo' },
        { value: 'chirang', label: 'Chirang' },
        { value: 'darrang', label: 'Darrang' },
        { value: 'dhemaji', label: 'Dhemaji' },
        { value: 'dhubri', label: 'Dhubri' },
        { value: 'dibrugarh', label: 'Dibrugarh' },
        { value: 'dimahasao', label: 'Dima Hasao' },
        { value: 'goalpara', label: 'Goalpara' },
        { value: 'golaghat', label: 'Golaghat' },
        { value: 'hailakandi', label: 'Hailakandi' },
        { value: 'hojai', label: 'Hojai' },
        { value: 'jorhat', label: 'Jorhat' },
        { value: 'kamrup', label: 'Kamrup' },
        { value: 'kamrup_metropolitan', label: 'Kamrup Metropolitan' },
        { value: 'karbi_anglong', label: 'Karbi Anglong' },
        { value: 'karimganj', label: 'Karimganj' },
        { value: 'kokrajhar', label: 'Kokrajhar' },
        { value: 'lakhimpur', label: 'Lakhimpur' },
        { value: 'majuli', label: 'Majuli' },
        { value: 'morigaon', label: 'Morigaon' },
        { value: 'nagaon', label: 'Nagaon' },
        { value: 'nalbari', label: 'Nalbari' },
        { value: 'sivasagar', label: 'Sivasagar' },
        { value: 'sonitpur', label: 'Sonitpur' },
        { value: 'south_salmara-mankachar', label: 'South Salmara-Mankachar' },
        { value: 'tinsukia', label: 'Tinsukia' },
        { value: 'udalguri', label: 'Udalguri' },
        { value: 'west_karbi_anglong', label: 'West Karbi Anglong' },
      ];
      
  return (
   <Fragment>
    {
        loading ? <Loader/> : <Fragment>
        <div>
        <Formik
           
                initialValues={{
                    collegeName:'',
                    district:'',
                    email:'',
                    description:'',
                    rating:'',
                    address:'',
                    city:''
                }}
                validationSchema={validate}
                onSubmit={values =>{dispatch(collegeRegisterAction(values))}}
                // onSubmit={values =>{console.log(values)}}
              
              >
                {Formik => (
                  <div>
                   
        
                    <div className='applyFor '>
                      <Form className='applyForm registerClg'>
                      <div className='but'>
                       <h3>Register College </h3>
                        </div>  
    
                        <TextField label='College Name' name='collegeName' type='text'/>
                        <SelectField label="District" name="address"  options={districtOptions}/>
                        <TextField label='Email' name='email' type='email'/>
                        {/* <TextField label='Description' name='description' type='text'/> */}
                        <TextField label="City" name="city" type='text' />
                        <TextField label='NAAC Ranking with year' name='rating' type='text'/>
                        {/* <TextField label='District' name='address' type='text'     /> */}
                        {/* <TextField label='District' name='district' type='text'     /> */}
                        <TextArea label='Description' name='description'      />
                   
                       <div className='but'>
                        <input type='submit' className='btn '/>
                        {/* Register</input> */}
                       </div>
                      
                        
                      </Form>
                    </div>
                  </div>
                )}
        
              </Formik>
        </div>
       </Fragment>
    }
   </Fragment>
  )
}

export default RegisterCollege