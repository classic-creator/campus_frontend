import { Form, Formik ,Field} from 'formik'
import React, { Fragment, useEffect } from 'react'
import TextField from '../../application/textField'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AddnewPaymentAction, clearErrors } from '../../../action/paymentAction'
import { Button } from 'antd'
import {useAlert} from 'react-alert'
import { ADD_PAYMENT_RESET } from '../../../constants/paymentConsttants'
import CourseBar from '../courseBar'

const AddNewPayment = () => {

    const dispatch=useDispatch()
    const {id}=useParams()
    const {messege,error,loading}=useSelector(state=>state.addPayment)
    const { course } = useSelector(state => state.courseDetails)
    const alert=useAlert()
const navigate=useNavigate()

    const initialvalue = {
        option:'',
        fees_type: '',
        amount: '',
        last_date: '',
    }
    const validate = Yup.object({
        // fees_type: Yup.string().required('required'),
        amount: Yup.string(),
        last_date: Yup.date()
            .min(new Date(), 'Last date cannot be in the past')
            .max(new Date('2050-12-31'), 'Last date cannot be after 2050-12-31')
            .required('Last date is required')

    })
useEffect(() => {
 if(error){
    alert.error(error)
    dispatch(clearErrors())
 }
 if(messege){
    alert.success(messege)
    dispatch({type:ADD_PAYMENT_RESET})
    navigate(`/course/deashboard/${id}`)
 }
 
}, [alert,error,messege,id,dispatch,navigate])

    return (
        <Fragment>
 <CourseBar course={course} id={id}
 header={'New Fees Request'} />

            <Formik
                // enableReinitialize={true}
                initialValues={initialvalue}
                validationSchema={validate}
                onSubmit={values => { dispatch(AddnewPaymentAction({values,id})) }}
                // onSubmit={value => console.log(value)}
            >
                {({values}) => (
                    <div>


                        <div className='applyFor  '>
                            <Form className='applyForm applyform '>
                            <div className='mt-4 applyinput '>
                                <Field  as ='select' name='option' id='option'>
                                    <option value=''>Select</option>
                                    <option value='application_fees'>Application Fees</option>
                                    <option value='admission_fees'>1st Semister Admission Fees</option>
                                    <option value='other'>Other</option></Field>
                            {values.option ==='other' && (
                               
                                <TextField label='Fees Type' name='fees_type' type='select' />
                            )}
</div>

                                <TextField label='Amount' name='amount' type='number' />

                                <TextField label='Last Date' name='last_date' type='date' />

                                <div className='but'>
                                  
                                    {loading ? <Button loading={loading}></Button> : <button type='submit' className='btn '>Submit</button>}
                                </div>
                            </Form>
                        </div>
                    </div>
                )}

            </Formik>


        </Fragment>
    )
}

export default AddNewPayment