import React from 'react'
import "./CheckoutSteps.css"
import { Step, Stepper, Typography ,StepLabel} from '@material-ui/core'
import { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCheckCircle, faUniversity, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const CheckoutSteps = ({ activeStep }) => {

    const steps = [
        {
            label: <Typography>Personal Details</Typography>,
            // icon: <MdLocalShipping />
            icon:  <FontAwesomeIcon icon={faUserAlt} />
        },
        {
            label: <Typography>Address</Typography>,
            // icon: <MdLibraryAdd />
           icon:  <FontAwesomeIcon icon={faAddressBook} />
        },
        {
            label: <Typography>Educational Details</Typography>,
            // icon: <MdAccountBalance />
            icon:  <FontAwesomeIcon icon={faUniversity} />

        },
        {
            label: <Typography>Upload Files</Typography>,
            // icon: <MdAccountBalance />
            icon:  <FontAwesomeIcon icon={faAddressBook} />

        },
        {
            label: <Typography>Confirm Application</Typography>,
            // icon: <MdAccountBalance />
            icon:  <FontAwesomeIcon icon={faCheckCircle} />

        }
    ]

    const stepStyles = {
        boxSizing: "border-box",
        backgroundColor:'#cce5ff'
    };

    return (

        <Fragment>
            <Stepper  alternativeLabel activeStep={activeStep} style={stepStyles}>

            {steps.map((item,index)=>(
                <Step key={index} active={activeStep===index?true:false}
                completed={activeStep>=index?true:false}>
                    <StepLabel icon={item.icon} style={{color:activeStep>=index ? "tomato": "rgba(0,0,0,0.649)"}} >
                        {item.label}
                    </StepLabel>


                </Step>
            ))}  
            

            </Stepper>

        </Fragment>
    )
}

export default CheckoutSteps