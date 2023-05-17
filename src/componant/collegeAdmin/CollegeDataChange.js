
import React, { Fragment, useEffect, useState } from 'react'
import './courseDataChange.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CollegeCoverimgAction, CollegeLogoimgAction, CollegeOtherimgAction, CourseCoverimgAction, clearErrors } from '../../action/imageAction'
import { faEye, faMultiply, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAlert } from 'react-alert'
import { Button } from 'antd'
import { COLLEGE_COVERIMG_UPLOAD_RESET, COLLEGE_OTHERIMG_UPLOAD_RESET } from '../../constants/imageConstants'

const CollegeDataChange = () => {

    const { loading, message, error } = useSelector(state => state.courseImage);

    const alert = useAlert()
    const { id } = useParams();
    const dispatch = useDispatch()



    const [image, setImage] = useState();
    const [imageName, setImageName] = useState('');
    const [preview, setPreview] = useState(null);
    const [coverPreview, setCoverPreview] = useState(true)

    const [otherImage, setOtherImage] = useState([])
    const [previewOtherImage, setPreviewOtherImage] = useState([])
    const [otherPreview, setOtherPreview] = useState(false)
    const [otherImagename, setOtherImagename] = useState('')


    const [logo, setLogo] = useState();
    const [logopreview, setLogoPreview] = useState(null);
    const [logoName, setLogoName] = useState('');
    const [logoDivPreview, setDivLogoPreview] = useState(true)

    const viewHide = () => {
        if (coverPreview === false) {
            setCoverPreview(true)
        }
        if (coverPreview === true) {
            setCoverPreview(false)
        }

    }

    const otherviewHide = () => {
        if (otherPreview === false) {
            setOtherPreview(true)
        }
        if (otherPreview === true) {
            setOtherPreview(false)
        }

    }
    const logoviewHide = () => {
        if (logoDivPreview === false) {
            setDivLogoPreview(true)
        }
        if (logoDivPreview === true) {
            setDivLogoPreview(false)
        }

    }

    const handleImageChange = (event) => {
        // setImage(event.target.files[0]);
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }

    };

    const handleImageUpload = () => {
        const formData = new FormData();
        formData.append('image_path', image);
        formData.append('image_name', imageName);

        dispatch(CollegeCoverimgAction(formData));
    };

    const handleOtherImageChange = (e) => {

        // const files = Array.from(e.target.files);
        const files = Array.from(e.target.files)
        setOtherImage(files)

        const imageArray = [];

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                imageArray.push(reader.result);
                if (imageArray.length === files.length) {
                    setPreviewOtherImage((prevImages) => [...prevImages, ...imageArray])
                    // setOtherImage((prevImages) => [...prevImages, ...imageArray])

                }
            }
            reader.readAsDataURL(file);
        })
    }

    const handleOtherImageUpload = () => {
        // console.log(otherImage.length)
        const formData = new FormData();

        otherImage.forEach((image, index) => {
            formData.append(`image_${index}`, image);
        });




        dispatch(CollegeOtherimgAction(formData));
    };
    const handleRemoveImage = (index) => {

        const newOtherImage = [...previewOtherImage];
        newOtherImage.splice(index, 1);
        setPreviewOtherImage(newOtherImage)
        setOtherImage(newOtherImage)
    }

    const handleLogoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setLogo(file);
            setLogoPreview(URL.createObjectURL(file));
        }

    }
    const handleLogoUpload = () => {
        const formData = new FormData();
        formData.append('image_path', logo);
        formData.append('image_name', logoName);

        dispatch(CollegeLogoimgAction(formData));
    }

    useEffect(() => {
        if (message) {
            alert.success(message);
            setCoverPreview(null)
            setImage(null)
            setOtherImage(null)
            setPreviewOtherImage(null)
            dispatch({ type: COLLEGE_OTHERIMG_UPLOAD_RESET })
            dispatch({ type: COLLEGE_COVERIMG_UPLOAD_RESET })
        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [alert, message, dispatch, error,])

    return (
        <Fragment>

            <button type="button" className="btn btn-primary shadow-none Settingbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Setting
            </button>


            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Course Setting</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div>
                                <div className='bg-dark text-light p-2'>
                                    <h5 className='text-center'>Change Cover Photo</h5>
                                </div>
                                <div className='imgUploadbox p-2'>
                                    <div className="mb3">
                                        <input type="file" onChange={handleImageChange} />
                                        <input type="text" value={imageName} placeholder='Name/details' onChange={(e) => setImageName(e.target.value)} />

                                    </div>
                                    <div className="button ">
                                        <button
                                            type='button'
                                            disabled={preview ? false : true}
                                            onClick={viewHide} className='btn btn-light viewIcon'>
                                            {coverPreview ?
                                                <FontAwesomeIcon icon={faMultiply} /> : <FontAwesomeIcon icon={faEye} />}
                                        </button>



                                        <Button type="primary"
                                            disabled={image ? false : true}
                                            //  className='btn btn-success' 
                                            onClick={handleImageUpload}
                                            loading={loading}
                                        >
                                            Upload</Button>
                                    </div>
                                </div>

                                {coverPreview && <div className='mb-2 coverPreview'>

                                    <img src={preview} alt="preview" style={{ maxWidth: '100%' }} />

                                </div>}

                            </div>

                            <div>
                                <div className='bg-dark text-light  p-2'>
                                    <h5 className='text-center  '>Change logo Photo</h5>
                                </div>
                                <div className='imgUploadbox p-2'>
                                    <div className="mb3">
                                        <input type="file" onChange={handleLogoChange} />
                                        <input type="text" value={logoName} placeholder='Name/details' onChange={(e) => setLogoName(e.target.value)} />
                                    </div>
                                    <div className="button ">
                                        <button type='button'
                                            disabled={logopreview ? false : true}
                                            onClick={logoviewHide}
                                            className='btn btn-light viewIcon'
                                        >
                                            {logoDivPreview ? <FontAwesomeIcon icon={faMultiply} /> : <FontAwesomeIcon icon={faEye} />}
                                        </button>



                                        <Button
                                            type="primary"
                                            onClick={handleLogoUpload}
                                            loading={loading}
                                            disabled={logo?false:true}
                                        >
                                            Upload</Button>
                                    </div>
                                </div>

                                {logoDivPreview && <div className='mb-2 coverPreview'>

                                    <img src={logopreview} alt="preview" style={{ maxWidth: '100%' }} />

                                </div>}
                            </div>
                            <div>
                                <div className='bg-dark text-light p-2'>
                                    <h5 className='text-center  '>Add/Change other Photos</h5>
                                </div>
                                <div className='imgUploadbox p-2'>
                                    <div className="mb3">

                                        <input type="file" onChange={handleOtherImageChange} multiple />

                                        <input type="text" value={otherImagename} placeholder='Name/details' onChange={(e) => setOtherImagename(e.target.value)} />

                                    </div>
                                    <div className="button ">
                                        <button
                                            type='button'
                                            disabled={previewOtherImage && previewOtherImage.length > 0 ? false : true}
                                            onClick={otherviewHide}
                                            className='btn btn-light viewIcon'
                                        >
                                            {otherPreview ? <FontAwesomeIcon icon={faMultiply} /> : <FontAwesomeIcon icon={faEye} />}
                                        </button>



                                        <Button
                                            type="primary"
                                            disabled={otherImage && otherImage.length > 0 ? false : true}
                                            onClick={handleOtherImageUpload}
                                            loading={loading}
                                        >
                                            Upload</Button>
                                    </div>


                                </div>

                                {otherPreview &&
                                    <div className='mb-2 image-preview '>
                                        {previewOtherImage.map((image, index) => (
                                            <div className='preview-image ' key={index}>
                                                <img src={image} alt="preview" />
                                                <FontAwesomeIcon icon={faTimes} className='delete-button'
                                                    onClick={() => handleRemoveImage(index)} />
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default CollegeDataChange