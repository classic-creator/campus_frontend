
import React, { Fragment, useEffect, useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import {SchemeUpload,clearErrors } from '../../action/imageAction'
import { faEye, faMultiply} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAlert } from 'react-alert'
import { Button, Image } from 'antd'
import {  SCHEME_UPLOAD_RESET} from '../../constants/imageConstants'

const SchemeUploadModal = () => {

    const { loading, message, error } = useSelector(state => state.addScheme);

    const alert = useAlert()
   
    const dispatch = useDispatch()



    const [image, setImage] = useState();
    const [imageName, setImageName] = useState('');
    const [preview, setPreview] = useState(null);
    const [coverPreview, setCoverPreview] = useState(true)

   const [schemeName, setSchemeName] = useState('')

    const viewHide = () => {
        if (coverPreview === false) {
            setCoverPreview(true)
        }
        if (coverPreview === true) {
            setCoverPreview(false)
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
        formData.append('image_link', imageName);
        formData.append('name', schemeName);

        dispatch(SchemeUpload(formData));
    };


    useEffect(() => {
        if (message) {
            alert.success(message);
            setCoverPreview(null)
            setImage(null)
            
            dispatch({ type: SCHEME_UPLOAD_RESET })
        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [alert, message, dispatch, error,])

    return (
        <Fragment>

            <button type="button" className="btn btn-primary shadow-none " data-bs-toggle="modal" data-bs-target="#adminImageUpload">
                Add scheme
            </button>


            <div className="modal fade " id="adminImageUpload" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">CAMPUS Schemes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div>
                                <div className='bg-dark text-light p-2'>
                                    <h5 className='text-center'>Upload Schemes with links</h5>
                                </div>
                                <div className='imgUploadbox p-2'>
                                    <div className="mb3">
                                        <input type="file" onChange={handleImageChange} />
                                        <input type="link" value={imageName} placeholder='Enter links' onChange={(e) => setImageName(e.target.value)} />
                                        <input type="text" value={schemeName} placeholder='Enter scheme name' onChange={(e) => setSchemeName(e.target.value)} />

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

                                    <Image src={preview} alt="preview" />

                                </div>}

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

export default SchemeUploadModal