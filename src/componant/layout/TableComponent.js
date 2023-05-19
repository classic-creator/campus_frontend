import React, { Fragment, useState } from 'react';
import './table.css';
import { Table, Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const TableComponent = ({ columns, dataSource, loading }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const customTableStyle = {
    width: '100%',
    overflow: 'auto',
    backgroundColor: 'white',
  };

  const pagination = {
    pageSize: 8,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50'],
    showQuickJumper: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
    setSearchedColumn('');
  };

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${title}`}
          value={selectedKeys[0] || ''}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{ width: 'calc(50% - 6px)' }}
          >
            <FontAwesomeIcon icon={faSearch} style={{ marginRight: 8 }} />
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 'calc(50% - 6px)' }}>
            Reset
          </Button>
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <Button
        type="text"
        icon={<FontAwesomeIcon icon={faSearch} className={filtered ? 'active' : ''} />}
        style={{ marginLeft: 4 }}
      />
    ),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          document.getElementsByClassName('ant-table-filter')[0].click();
        }, 0);
      }
    },
    className: searchedColumn === dataIndex ? 'active' : '',
  });

  const filteredData = dataSource.filter((item) => {
    for (let column of columns) {
      const dataIndex = column.dataIndex;
      const cellValue = item[dataIndex];
      if (cellValue && cellValue.toString().toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  const columnsWithSearch = columns.map((column) => ({
    ...column,
    ...getColumnSearchProps(column.dataIndex, column.title),
  }));

  return (
    <Fragment>
      <div style={customTableStyle}>
        <Table columns={columnsWithSearch} dataSource={filteredData} bordered loading={loading} pagination={pagination} />
      </div>
    </Fragment>
  );
};

export default TableComponent;
