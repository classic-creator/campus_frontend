import React, { useEffect,Fragment } from 'react'
import { ApproveCollegeRegisterAction, ApprovelCollegeAction, clearErrors } from '../../action/adminAction'
import { useDispatch,useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { Button, Popconfirm, Space } from 'antd'
import AdminSidebar from './adminSidebar'
import TableComponent from '../layout/TableComponent'

const AllApprovelList = () => {


    const { loading, colleges, collegeCounts, error } = useSelector(state => state.pandingColleges)
    const { loading:approveLoading,isUpdated, error:approveError } = useSelector(state => state.approve)

    const dispatch = useDispatch()
    const alert = useAlert()

    const approveRequest=(data)=>{
dispatch(ApproveCollegeRegisterAction(data))
    }

    const columns = [
        {
            title: 'Request Id',
            dataIndex: 'id',
            // width: 50,
            key: 'id',
            fixed: 'left'
        },
        {
            title: 'College Name',
            dataIndex: 'name',
            align: "center",
            editable: true,

        },

        {
            title: 'NAAC Rating',
            dataIndex: 'rating',
            align: "center",
            editable: true,

        },


        {
            title: 'Request by',
            dataIndex: 'user_id',
            align: "center",
            editable: true,

        },
        {
            title: 'Email',
            dataIndex: 'email',
            align: "center",
            editable: true,

        },
        {
            title: 'District',
            dataIndex: 'district',
            align: "center",
            editable: true,

        },


        {
            title: 'Action',
            dataIndex: "action",
            align: "center"
            , render: (_, record) =>
                rows.length >= 1 ? (
                    <Space>
                        <Popconfirm  title='Are you sure you want to Approve ?' onConfirm={()=>approveRequest(record)}>
                          <Button loading={approveLoading} type='primary' > Approve </Button>
                          
                        </Popconfirm>
                        {/* <Button onClick={() => console.log('edit')} type='primary'>Edit</Button>
                <Button onClick={() => console.log('edit')} danger type='primary'>Delete</Button> */}
                    </Space>
                ) : null
        }
    ]
    const rows = []

    colleges && colleges.forEach((item) => {
        rows.push({
            id: item.id,
            name: item.collegeName,
            rating: item.rating,
            email: item.email,
            district: item.address,
            user_id: item['create-by'],

        })
    })

    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            alert.success('Approve Request Success')
            dispatch(clearErrors())
        }
        if (approveError) {
            alert.error(approveError)
            dispatch(clearErrors())
        }

        dispatch(ApprovelCollegeAction())
    }, [dispatch, error,approveError, alert,isUpdated])

    return (
        <Fragment>
            <div className="depertmentDeash">
                <AdminSidebar />
                <div className="dashboard">
                    <div className='headdept'>
                        <h2> Institute Approvel request</h2>
                        <span> Total Institute - {collegeCounts} </span>
                    </div>
                    <TableComponent columns={columns} loading={loading} dataSource={rows} />
                </div>
            </div>
        </Fragment>
    )
}

export default AllApprovelList