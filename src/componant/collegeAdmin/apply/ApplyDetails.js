import React, { Fragment, useEffect, useState } from 'react'
import './studentDetails.css'
import { Space,  Button } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons'
import { GetApplicationDetails, UpdateApplicationStatus, clearErrors } from '../../../action/applyAction'
import { useDispatch, useSelector } from 'react-redux'
import { APPLICATION_UPDATE_RESET } from '../../../constants/applyConstants'
import { useAlert } from 'react-alert'
import TableComponent from '../../layout/TableComponent'
import Modal from 'react-modal'

const ApplyDetails = () => {

    const { loading, error, isUpdated } = useSelector(state => state.applicationAction)
    const {payment_history, application ,loading:fileLoading} = useSelector(state => state.applicationDetails)
    const { id } = useParams()
    const [status, setStatus] = useState('')
    const dispatch = useDispatch()
    const alert = useAlert()

    
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  function openModal(imageUrl) {
    setImageUrl(imageUrl);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: '80%',
      left: '10%',
      height: '70%',
      top: '20%'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.3s ease-out' // add transition here
    }
  };


    const processOrder = (e) => {
        e.preventDefault()

        const myForm = new FormData()

        myForm.set("admission_status", status)

        dispatch(UpdateApplicationStatus({ myForm, id }))
    }


    useEffect(() => {
        if (isUpdated) {
            dispatch({ type: APPLICATION_UPDATE_RESET })
            // dispatch(GetApplicationDetails(id))
            alert.success('Application status updated')
        }

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        dispatch(GetApplicationDetails(id))
    }, [isUpdated, dispatch, alert, error, id])


    const columns = [
        // {
        //     title: 'Id',
        //     dataIndex: 'id',
        //     style: { background: '#1890ff', color: '#fff' },
        // },
        {
            title: 'Exam Name',
            dataIndex: 'name',
            align: "center",
            editable: true,
            render: (_, record) => (
                <Link to={`/course/deashboard/${record.id}`}>{record.name}</Link>
            ),
        },
        {
            title: 'Board/university'
            , dataIndex: 'board',
            align: "center",
            editable: true
        },
        {
            title: 'Roll/No',
            dataIndex: "rollNo",
            align: "center",
            editable: true
        },
        {
            title: 'Total mark',
            dataIndex: 'totalMark',
            align: "center",
            editable: true
        },
        {
            title: 'Mark Obtain',
            dataIndex: "markObtain",
            align: "center",
            editable: true
        },
        {
            title: 'Mark-Sheet',
            dataIndex: "action",
            align: "center"
            , render: (_, record) =>
                rows.length >= 1 ? (
                    <Space>
                        <Link to={`/apply/update/${record.id}`}> <Button type='primary'> Open</Button></Link>
                    </Space>
                ) : null
        },
        {
            title: 'Certificate',
            dataIndex: "action",
            align: "center"
            , render: (_, record) =>
                rows.length >= 1 ? (
                    <Space>
                        <Link to={`/apply/update/${record.id}`}> <Button type='primary'> Open</Button></Link>
                    </Space>
                ) : null
        }
    ]

    const rows = [{
        'name': 'HSLC',
        board: application && application.class10_board,
        rollNo: `${application && application.class10_roll} / ${application && application.class10_no}`,
        totalMark: application && application.class10_totalMark,
        markObtain: application && application.class10_markObtain


    },
    {
        'name': 'HSSLC',
        board: application && application.class12_board,
        rollNo: `${application && application.class12_roll} / ${application && application.class12_no}`,
        totalMark: application && application.class12_totalMark,
        markObtain: application && application.class12_markObtain
    }]


    const feesColumns = [
        {
            title: 'Payment id',
            dataIndex: 'payment_id',
            // style: { background: '#1890ff', color: '#fff' },
        },
        {
            title: 'Fees id',
            dataIndex: 'fees_id',
            align: "center",
            editable: true,
           
        },
        {
            title: 'Fees type',
            dataIndex: 'fees_type',
            align: "center",
            editable: true,
           
        },
        {
            title: 'Amount'
            , dataIndex: 'amount',
            align: "center",
            editable: true
        },
       
        {
            title: 'Payment Status',
            dataIndex: "payment_status",
            align: "center",
            editable: true
        },
        {
            title: 'Pay Date',
            dataIndex: 'date',
            align: "center",
            editable: true
        },
       
        {
            title: 'Recept',
            dataIndex: "action",
            align: "center"
            , render: (_, record) =>
                rows.length >= 1 ? (
                    <Space>
                        <Link to={`/apply/update/${record.id}`}> <Button type='primary'> Open</Button></Link>
                    </Space>
                ) : null
        },

    ]
    const historyrows=[];

    payment_history && payment_history.forEach((item)=>{
        historyrows.push({

            payment_id:item.payment_id,
            fees_type:item.fees_type,
            fees_id:item.fees_id,
            amount:item.amount,
            date:item.created_at,
            payment_status:item.payment_status,


            
        })
    })

    return (
        //    <Fragment>
        //     {applicationLoading ? <Loader/> : 
        <Fragment>
            <div className="ApplicatinInfo">
{fileLoading ? <Button loading={fileLoading}></Button>:null}
                <div className="profile1">
                    <div className="profile11">

                        <h2>{application && application.first_name}{' '}{application && application.middle_name}{' '}{application && application.last_name}</h2>
                        <span className='smlspan'>#{application && application.id}</span>
                        <span className='smlspan'>{application && application.email}</span>
                        <p>Application Status :<span className={(application && application.admission_status === 'Selected') ||( application && application.admission_status === 'confirmed' )? 'greenColor' : 'redColor'}>  {application && application.admission_status}</span></p>
                        <p>Payment Status : <span className={(application && application.admission_payment_status === 'paid') ? 'greenColor' : 'redColor'}>{application && application.admission_payment_status}</span> </p>

                    </div>
                    <div className="profile12">

                        <h3>{application && application.mark_obtain_lastExam}% in last exam</h3>
                        <span>  {application && application.qualification === 'hs' ? application.class12_strem : ''}</span>
                        <span>School/College : {application && application.qualification === 'hs' ? (application && application.class12_college) : (application && application.class10_school)}</span>
                    </div>

                </div>
                <div className="RightBar">
                    <div >


                        <form className="createProductForm" onSubmit={processOrder}>
                            <h3>Process Application </h3>

                            <div>
                                {/* <MdAccountTree /> */}
                                <FontAwesomeIcon icon={faChartColumn} />
                                <select name='admission_status' onChange={(e) => setStatus(e.target.value)}>
                                    <option value="">choose category</option>
                                    <option value="Selected">Selected</option>
                                    <option value="Rejected">Rejected</option>
                                   


                                </select>
                            </div>
                            <Button
                                id="createProductBtn"
                                type="submit"
                                onClick={processOrder}
                                loading={loading}
                            // disabled={loading ? true : false || status === "" ? true : false}
                            >
                                Process

                            </Button>
                        </form>

                    </div>
                </div>
            </div>
            <div className="deabord">
                <div className="profile2 container">
                    <h2 className='p-3'>Acadamic</h2>


                    <TableComponent loading={fileLoading} columns={columns}
                        dataSource={rows} />

                    <h2 className='p-3'>Payment History</h2>

                    <TableComponent loading={fileLoading} columns={feesColumns}
                        dataSource={historyrows} />

                </div>


                <div className="container formFileContainer">


                    <div>
                        <img src={application && application.passport_image_url} alt='img' />
                        <span>Passport Image</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.passport_image_url)}>Preview</Button>
                    </div>
                    <div>
                        <img src={application && application.signature_image_url} alt='img' />
                        <span>Signature</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.signature_image_url)}>Preview</Button>
                    </div>
                    <div>
                        <img src={application && application.aadhar_image_url} alt='img' />
                        <span>Aadhar</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.aadhar_image_url)}>Preview</Button>
                    </div>
                    <div>
                        <img src={application && application.hslc_registation_image_url} alt='img' />
                        <span>HSLC Registation Card</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.hslc_registation_image_url)}>Preview</Button>
                    </div>
                    <div>
                        <img src={application && application.hslc_marksheet_image_url} alt='img' />
                        <span>HSLC Marksheet Card</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.hslc_marksheet_image_url)}>Preview</Button>
                    </div>
                    <div>
                        <img src={application && application.hslc_certificate_image_url} alt='img' />
                        <span>HSLC Certificate</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.hslc_certificate_image_url)}>Preview</Button>
                    </div>
                    <div>
                        <img src={application && application.hslc_admit_image_url} alt='img' />
                        <span>HSLC Admit Card</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.hslc_admit_image_url)}>Preview</Button>
                    </div>
                    <div>
                        <img src={application && application.hsslc_registation_image_url} alt='img' />
                        <span>HSSLC Registation Card</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.hsslc_registation_image_url)}>Preview</Button>
                    </div>
                    <div>
                        <img src={application && application.hsslc_marksheet_image_url} alt='img' />
                        <span>HSSLC Marksheet Card</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.hsslc_marksheet_image_url)}>Preview</Button>
                    </div>
                    <div>
                        <img src={application && application.hsslc_certificate_image_url} alt='img' />
                        <span>HSSLC Certificate</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.hsslc_certificate_image_url)}>Preview</Button>
                    </div>
                    <div>
                        <img src={application && application.hsslc_admit_image_url} alt='img' />
                        <span>HSSLC Admit Card</span>
                        <Button loading={fileLoading} onClick={() => openModal(application && application.hsslc_admit_image_url)}>Preview</Button>
                    </div>
                </div>

                <Modal isOpen={modalIsOpen} style={customStyles} timeout={300} className='previewModal reviewModal' onRequestClose={closeModal}>
                    <img src={imageUrl} alt='img' />
                    <Button onClick={closeModal}>Close</Button>
                </Modal>
            </div>



        </Fragment>
        // }
        //    </Fragment>
    )
}

export default ApplyDetails