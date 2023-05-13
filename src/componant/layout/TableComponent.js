import React, { Fragment } from 'react'
import './table.css'
import { Table } from 'antd';

const TableComponent = ({columns,dataSource,loading}) => {

  const customTableStyle = {
    width: '100%',
    // maxHeight: '400px',
    overflow: 'auto',
    // backgroundColor: '#f2f2f2',
    backgroundColor: 'white',
  };
  const pagination = {
    pageSize: 5, // number of items per page
    showSizeChanger: true, // display option to change page size
    pageSizeOptions: ['10', '20', '50'], // options for page size changer
    showQuickJumper: true, // display option to jump to page
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`, // custom text for total items
  };

  return (

    
  <Fragment> 
     <div style={customTableStyle}>
     <Table
  columns={columns}
  dataSource={dataSource}
  bordered
  loading={loading}
  pagination={pagination}
  // scroll={{
    //   x: 1000,
    //   y: 400,
    // }}
/>
    </div>
</Fragment>
    


  )
}


export default TableComponent