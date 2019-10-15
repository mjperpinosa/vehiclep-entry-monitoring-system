import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Table, Tag, Select } from 'antd';
import { VEHICLE_STATUS } from '../../constants';
import { useStoreActions, useStoreState } from 'easy-peasy';
import axios from 'axios';

const { Option } = Select;

const columns = [
  {
    title: 'Plate Number',
    dataIndex: 'owner.vehicle.plate_number',
    key: 'owner.vehicle.plate_number',
    render: text => <Link to={`/captures/${text}`}>{text}</Link>,
  },
  {
    title: '',
    dataIndex: 'owner.person.first_name',
    key: 'owner.person.first_name',
    render: (text, record) => (
      <span>{`${record.owner.person.first_name} ${record.owner.person.last_name}`}</span>
    )
  },
  {
    title: 'Status',
    dataIndex: 'owner.vehicle.status',
    key: 'owner.vehicle.status',
    render: (text, record) => {
      let color = 'green';
      if(text.toUpperCase() !== VEHICLE_STATUS.CLEAR) {
        color = 'red'
      }
      return (
        <Tag color={color}>{text}</Tag>
      )
    }
  },
  {
    title: 'Color',
    dataIndex: 'owner.vehicle.color',
    key: 'owner.vehicle.color',
  },
  {
    title: 'Make',
    dataIndex: 'owner.vehicle.make',
    key: 'owner.vehicle.make',
  },
  {
    title: 'Model',
    dataIndex: 'owner.vehicle.model',
    key: 'owner.vehicle.model',
    render: (text, record) => (
      <span>{`${text} ${record.owner.vehicle.year}`}</span>
    ) 
  },
  {
    title: 'Date captured',
    dataIndex: 'time_entry',
    key: 'time_entry',
    render: text => (
      <span>{moment(text).format('MMM DD YYYY hh:mm:ss a')}</span>
    )
  },
];

const CaptureTable = props => {
  const entries = useStoreState(state => state.entries.items);
  const filter = useStoreState(state => state.entries.filter);
  const addEntry = useStoreActions(actions => actions.entries.addEntry);
  const setInitialEntries = useStoreActions(actions => actions.entries.setInitialEntries);
  const setFilter = useStoreActions(actions => actions.entries.setFilter);

  function onChange(value) {
    setFilter(value);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }

  useEffect(() => {
    const fetchData = async() => {
      const url = filter === '' ? 'http://192.168.43.84:8000/api/entries/' : `http://192.168.43.84:8000/api/entries/?status=${filter}`;
      const response = await axios.get(url);
      setInitialEntries(response.data);
    } 
    fetchData();
  }, [filter])

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.43.84:8000/ws/status');
    ws.onopen = () => {
      console.log('Connected.')
    }

    ws.onmessage = (event) => {
      const item = JSON.parse(event.data);
      addEntry(item.data);
      console.log('item', item)
    }

    ws.onclose = () => {
      console.log('Disconnected')
    }
  }, [])

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200, marginBottom: 20 }}
        placeholder="Select a filter"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="">All</Option>
        <Option value="CLEARED">Clear</Option>
        <Option value="CARNAPPED">Carnap</Option>
      </Select>
      <Table rowKey="id" columns={columns} dataSource={entries} />
    </div>
  )
}

export default CaptureTable;