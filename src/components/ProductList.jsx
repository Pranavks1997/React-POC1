import React from 'react';
import { routes } from "../routes";
import history from '../history';

import { Table, Input, Button, Icon } from 'antd';
import 'antd/es/table/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/input/style/index.css';
import 'antd/es/icon/style/index.css';
import 'antd/dist/antd.css';
import '../index.css';

import Highlighter from 'react-highlight-words';
import data from '../utils/const';

export default class ProductList extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    filteredInfo: null,
    sortedInfo: null,
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

    setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'category',
      },
    });
  };


  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Product Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        width: '20%',
        sorter: (a, b) => a.category.length - b.category.length,
        sortOrder: sortedInfo.columnKey === 'category' && sortedInfo.order,
        ellipsis: true,
        ...this.getColumnSearchProps('category'),
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        onFilter: (value, record) => record.price.includes(value),
        sorter: (a, b) => a.price.length - b.price.length,
        sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
        ellipsis: true,
        ...this.getColumnSearchProps('price'),
      },
    ];
    return (
      <div>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort category</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table 
        columns={columns} 
        dataSource={data}
        onChange={this.handleChange}
        pagination={{ pageSize: 2 }}
        scroll={{ y: 240 }} 
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              console.log(record);
              history.push(routes.products.view(record.key))
            }, // click row
            onDoubleClick: event => {
              console.log('double');
            }, // double click row
            onContextMenu: event => {}, // right button click row
            onMouseEnter: event => {}, // mouse enter row
            onMouseLeave: event => {}, // mouse leave row
          };
        }}
        />
      </div>
    );
  }
}