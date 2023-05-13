import { Form, Formik } from 'formik'
import React, { Fragment, useEffect } from 'react'
import TextField from '../../application/textField'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AddnewPaymentAction, clearErrors } from '../../../action/paymentAction'
import { Button } from 'antd'
import {useAlert} from 'react-alert'
import { ADD_PAYMENT_RESET } from '../../../constants/paymentConsttants'

const AddNewPayment = () => {

    const dispatch=useDispatch()
    const {id}=useParams()
    const {messege,error,loading}=useSelector(state=>state.addPayment)
    const alert=useAlert()
const navigate=useNavigate()

    const initialvalue = {
        fees_type: '',
        amount: '',
        last_date: '',
    }
    const validate = Yup.object({
        fees_type: Yup.string().required('required'),
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


            <Formik
                enableReinitialize={true}
                initialValues={initialvalue}
                validationSchema={validate}
                onSubmit={values => { dispatch(AddnewPaymentAction({values,id})) }}
                // onSubmit={value => console.log(value)}
            >
                {Formik => (
                    <div>


                        <div className='applyFor  '>
                            <Form className='applyForm applyform '>
                                <TextField label='Fees Type' name='fees_type' type='text' />
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