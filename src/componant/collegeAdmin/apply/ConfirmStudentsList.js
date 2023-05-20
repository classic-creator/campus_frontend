import React, { useEffect,Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../sidebar'
import { Space, Button } from 'antd'
import { useParams } from 'react-router-dom'
import { ConfirmStudentAction } from '../../../action/applyAction'
import { Link } from 'react-router-dom'
import TableComponent from '../../layout/TableComponent'
import CourseBar from '../courseBar'


const ConfirmStudentsList = () => {

    const {ConfirmStudent,loading} =useSelector(state=>state.confirmStudent)
    const { course } = useSelector(state => state.courseDetails)
    const { id } = useParams()
    const dispatch = useDispatch()
  
    useEffect(() => {
  
  
      dispatch(ConfirmStudentAction(id))
  
    }, [dispatch, id])
  
  
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        // width: 50,
        fixed: 'left'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        align: "center",
        editable: true,
        render: (_, record) => (
          <Link to={`/course/deashboard/${record.id}`}>{record.name}</Link>
        ),
      },
      {
        title: 'Parcentage'
        , dataIndex: 'mark_obtain_lastExam',
        align: "center",
        editable: true
      },
      {
        title: 'Admission Status',
        dataIndex: "admission_status",
        align: "center",
        editable: true,
        render(text, record) {
            return {
              props: {
                style: { color: record.admission_status==='Selected'||record.admission_status==='confirmed'? "green" : "red" }
              },
              children: <div>{text}</div>
            };
          }
       
    },
    {
        title: 'Phon No',
        dataIndex: "phon_no",
        align: "center",
        editable: true,
       
       
    },
    {
        title: 'Email',
        dataIndex: "email",
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
              <Link to={`/apply/update/${record.id}`}> <Button type='primary'> Open</Button></Link>
            </Space>
          ) : null
      }
    ]
  
    const rows = []
  
  
    ConfirmStudent && ConfirmStudent.forEach((item) => {
      rows.push({
        id: item.id,
        name: item.first_name + ' '+item.middle_name+' ' + item.last_name,
        admission_status: item.admission_status,
        admission_payment_status:item.admission_payment_status,
        district: item.district,
        mark_obtain_lastExam: item.mark_obtain_lastExam,
        phon_no: item.phon_no,
        email: item.email
  
  
      })
    })
  
    return (
      <Fragment>
         <div className="depertmentDeash">
      <Sidebar />
      <div className="dashboard">
      <CourseBar course={course} id={id}  header={'Enrolled Students'} />
              <TableComponent 
              columns={columns}
              dataSource={rows}
              
              loading={loading}/>
  
          
          </div>
  
        </div>
  
      </Fragment>
    )
  
}

export default ConfirmStudentsList