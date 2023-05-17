import {
    ADD_PAYMENT_FAIL,
    ADD_PAYMENT_REQUEST,
    ADD_PAYMENT_RESET,
    ADD_PAYMENT_SUCCESS,
    CLEAR_ERRORS,
    CLOSED_PAYMENT_FAIL,
    CLOSED_PAYMENT_REQUEST,
    CLOSED_PAYMENT_RESET,
    CLOSED_PAYMENT_SUCCESS,
    COURSE_PAYMENT_DETAILS_FAIL,
    COURSE_PAYMENT_DETAILS_REQUEST,
    COURSE_PAYMENT_DETAILS_SUCCESS,
    COURSE_PAYMENT_HISTORY_FAIL,
    COURSE_PAYMENT_HISTORY_REQUEST,
    COURSE_PAYMENT_HISTORY_SUCCESS,
    STUDENT_NEW_PAYMENT_FAIL,
    STUDENT_NEW_PAYMENT_REQUEST,
    STUDENT_NEW_PAYMENT_SUCCESS,
    STUDENT_PAYMENT_HISTORY_FAIL,
    STUDENT_PAYMENT_HISTORY_REQUEST,
    STUDENT_PAYMENT_HISTORY_SUCCESS
} from "../constants/paymentConsttants"

export const AddPaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PAYMENT_REQUEST:

            return {
                ...state,
                loading: true,
            }

        case ADD_PAYMENT_SUCCESS:
            return {

                loading: false,
                messege: action.payload.messege
            }
        case ADD_PAYMENT_RESET:
            return {

                loading: false,
                //    ...state
            }

        case ADD_PAYMENT_FAIL:

            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}
// COURSE NEW PAYMENT/PAYMENT HISTORY
export const getCoursePaymentHistoryReducer = (state = { payments: [] }, action) => {
    switch (action.type) {
        case COURSE_PAYMENT_HISTORY_REQUEST:

            return {
                ...state,
                loading: true,
                payments: []
            }

        case COURSE_PAYMENT_HISTORY_SUCCESS:
            return {

                loading: false,
                payments: action.payload.payments
            }

        case COURSE_PAYMENT_HISTORY_FAIL:

            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}
// STUDENT NEW PAYMENT
export const getStudentNewPaymentReducer = (state = { new_payments: [] }, action) => {
    switch (action.type) {
        case STUDENT_NEW_PAYMENT_REQUEST:

            return {
                ...state,
                loading: true,
                new_payments: []
            }

        case STUDENT_NEW_PAYMENT_SUCCESS:
            return {

                loading: false,
                new_payments: action.payload.new_payments
            }

        case STUDENT_NEW_PAYMENT_FAIL:

            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

// STUDENT NEW PAYMENT
export const getStudentPaymentHistorryReducer = (state = { paymentsHistory: [] }, action) => {
    switch (action.type) {
        case STUDENT_PAYMENT_HISTORY_REQUEST:

            return {
                ...state,
                loading: true,
                paymentsHistory: []
            }

        case STUDENT_PAYMENT_HISTORY_SUCCESS:
            return {

                loading: false,
                paymentsHistory: action.payload.paymentsHistory
            }

        case STUDENT_PAYMENT_HISTORY_FAIL:

            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }}
// COURSES PAYMENT DETAILS
export const CoursePaymentDetailsReducer = (state = { payment_Data: [] }, action) => {
    switch (action.type) {
        case COURSE_PAYMENT_DETAILS_REQUEST:

            return {
                ...state,
                loading: true,
                payment_Data: []
            }

        case COURSE_PAYMENT_DETAILS_SUCCESS:
            return {

                loading: false,
                payment_Data: action.payload.payment_Data
            }

        case COURSE_PAYMENT_DETAILS_FAIL:

            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}


//CLOSE PAYMENTS REQUEST

export const closePaymentsReducer = (state = {  }, action) => {
    switch (action.type) {
        case CLOSED_PAYMENT_REQUEST:

            return {
                ...state,
                loading: true,
                
            }

        case CLOSED_PAYMENT_SUCCESS:
            return {

                loading: false,
                messege: action.payload.messege,
                isUpdated:true
            }
        case CLOSED_PAYMENT_RESET:
            return {

                loading: false,
                isUpdated:false
            }

        case CLOSED_PAYMENT_FAIL:

            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}