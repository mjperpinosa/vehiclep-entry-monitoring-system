import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Table, Tag } from 'antd';

import { VEHICLE_STATUS } from '../../constants';

const columns = [
  {
    title: 'Plate Number',
    dataIndex: 'plate',
    key: 'plate',
    render: text => <Link to={`/captures/${text}`}>{text}</Link>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => {
      let color = 'green';
      if(text !== VEHICLE_STATUS.CLEAR) {
        color = 'red'
      }
      return (
        <Tag color={color}>{text}</Tag>
      )
    }
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
  },
  {
    title: 'Make',
    dataIndex: 'make',
    key: 'make',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
    render: (text, record) => (
      <span>{`${text} ${record.year}`}</span>
    ) 
  },
  {
    title: 'Date captured',
    dataIndex: 'time',
    key: 'time',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <span>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </span>
  //   ),
  // },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (text, record) => (
  //     <span>
  //       <a>Invite {record.name}</a>
  //       <Divider type="vertical" />
  //       <a>Delete</a>
  //     </span>
  //   ),
  // },
];

const data = [
  {
    plate: 'ABC 2134',
    status: VEHICLE_STATUS.CODING,
    color: 'BLUE',
    make: 'HONDA',
    model: 'CIVIC',
    year: '2019',
    time: moment().format('MMM DD, YYYY h:mm:ss a')
  },
  {
    plate: 'ABC 2134',
    status: VEHICLE_STATUS.CLEAR,
    color: 'BLUE',
    make: 'HONDA',
    model: 'CIVIC',
    year: '2019',
    time: moment().format('MMM DD, YYYY h:mm:ss a')
  }
];

const CaptureTable = props => {
  return (
    <div>
      <Table rowKey="plate" columns={columns} dataSource={data} />
    </div>
  )
}

export default CaptureTable;