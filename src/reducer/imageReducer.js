import {
    CAROUSEL_IMAGE_UPLOAD_FAIL,
    CAROUSEL_IMAGE_UPLOAD_REQUEST,
    CAROUSEL_IMAGE_UPLOAD_RESET,
    CAROUSEL_IMAGE_UPLOAD_SUCCESS,
    CLEAR_ERRORS,
    COLLEGELOGO_UPLOAD_REQUEST,
    COLLEGELOGO_UPLOAD_RESET,
    COLLEGELOGO_UPLOAD_SUCCESS,
    COLLEGE_COVERIMG_UPLOAD_FAIL,
    COLLEGE_COVERIMG_UPLOAD_REQUEST,
    COLLEGE_COVERIMG_UPLOAD_RESET,
    COLLEGE_COVERIMG_UPLOAD_SUCCESS,
    COLLEGE_OTHERIMG_UPLOAD_FAIL,
    COLLEGE_OTHERIMG_UPLOAD_REQUEST,
    COLLEGE_OTHERIMG_UPLOAD_RESET,
    COLLEGE_OTHERIMG_UPLOAD_SUCCESS,
    DELETE_CAROUSEL_REQUEST,
    DELETE_CAROUSEL_RESET,
    DELETE_CAROUSEL_SUCCESS,
    DELETE_CAROUSEL_FAIL,
    DELETE_IMAGE_FAIL,
    DELETE_IMAGE_REQUEST,
    DELETE_IMAGE_RESET,
    DELETE_IMAGE_SUCCESS,
    GET_CAROUSEL_FAIL,
    GET_CAROUSEL_REQUEST,
    GET_CAROUSEL_SUCCESS,
    OTHER_COURSEPHOTO_FAIL,
    SCHEME_UPLOAD_REQUEST,
    SCHEME_UPLOAD_SUCCESS,
    SCHEME_UPLOAD_RESET,
    SCHEME_UPLOAD_FAIL,
    GET_SCHEME_REQUEST,
    GET_SCHEME_SUCCESS,
    GET_SCHEME_FAIL,
} from "../constants/imageConstants";

export const CarouselImageReducer = ((state = {}, action) => {

    switch (action.type) {
        case CAROUSEL_IMAGE_UPLOAD_REQUEST:

            return {

                loading: true

            };

        case CAROUSEL_IMAGE_UPLOAD_SUCCESS:

            return {
                loading: false,

                message: action.payload.message,

            };


        case CAROUSEL_IMAGE_UPLOAD_RESET:
            return {
                loading: false,

            };


        case CAROUSEL_IMAGE_UPLOAD_FAIL:
            return {
                loading: false,
                error: action.payload,

            };

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

})

//upload scheme
export const SchemeReducer = ((state = {}, action) => {

    switch (action.type) {
        case SCHEME_UPLOAD_REQUEST:

            return {

                loading: true

            };

        case SCHEME_UPLOAD_SUCCESS:

            return {
                loading: false,

                message: action.payload.message,

            };


        case SCHEME_UPLOAD_RESET:
            return {
                loading: false,

            };


        case SCHEME_UPLOAD_FAIL:
            return {
                loading: false,
                error: action.payload,

            };

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

})

//GET CAROUSEL IMAGES

export const GetCarouselImageReducer = ((state = {photos:[]}, action) => {

    switch (action.type) {
        case GET_CAROUSEL_REQUEST:

            return {
               ...state,
                loading: true,
                photos:[]
            };

        case GET_CAROUSEL_SUCCESS:

            return {
            
                loading: false,
                photos: action.payload.photos,

            };
        case GET_CAROUSEL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,

            };

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

})


//GET CAROUSEL IMAGES

export const GetSchemeReducer = ((state = {scheme:[]}, action) => {

    switch (action.type) {
        case GET_SCHEME_REQUEST:

            return {
               ...state,
                loading: true,
                scheme:[]
            };

        case GET_SCHEME_SUCCESS:

            return {
              
                loading: false,
                scheme: action.payload.scheme,

            };
        case GET_SCHEME_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,

            };

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

})



export const courseImageReducer = ((state = {}, action) => {

    switch (action.type) {
        case COLLEGE_OTHERIMG_UPLOAD_REQUEST:
        case COLLEGELOGO_UPLOAD_REQUEST:
        case COLLEGE_COVERIMG_UPLOAD_REQUEST:
            return {

                loading: true

            };

        case COLLEGELOGO_UPLOAD_SUCCESS:
        case COLLEGE_OTHERIMG_UPLOAD_SUCCESS:
        case COLLEGE_COVERIMG_UPLOAD_SUCCESS:

            return {
                loading: false,
                message: action.payload.message,

            };

        case COLLEGELOGO_UPLOAD_RESET:
        case COLLEGE_OTHERIMG_UPLOAD_RESET:
        case COLLEGE_COVERIMG_UPLOAD_RESET:
            return {
                loading: false,

            };


        case OTHER_COURSEPHOTO_FAIL:
        case COLLEGE_OTHERIMG_UPLOAD_FAIL:
        case COLLEGE_COVERIMG_UPLOAD_FAIL:
            return {
                loading: false,
                error: action.payload,

            };

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

})

export const ImageDeleteReducer = ((state = {}, action) => {

    switch (action.type) {

        case DELETE_IMAGE_REQUEST:
    
            
            return {

                loading: true

            };


            
            case DELETE_IMAGE_SUCCESS:
       
            return {
                loading: false,
                messege: action.payload.messege,
                isDeleted: true,
            };


        case DELETE_IMAGE_RESET:
    
            return {
                loading: false,
                isDeleted: false
            };


        case DELETE_IMAGE_FAIL:
 
            return {
                loading: false,
                error: action.payload,

            };

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

})

export const CarouselDeleteReducer = ((state = {}, action) => {

    switch (action.type) {

      
        case DELETE_CAROUSEL_REQUEST:
            
            return {

                loading: true

            };


  
            case DELETE_CAROUSEL_SUCCESS:
            return {
                loading: false,
                messege: action.payload.messege,
                isDeleted: true,
            };


 
        case DELETE_CAROUSEL_RESET:
            return {
                loading: false,
                isDeleted: false
            };


      
        case DELETE_CAROUSEL_FAIL:
            return {
                loading: false,
                error: action.payload,

            };

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

})