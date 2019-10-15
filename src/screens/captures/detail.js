import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Descriptions, Tag } from 'antd';
import axios from 'axios';
import { VEHICLE_STATUS } from '../../constants';

const Detail = props  => {
  const { id } = useParams();
  const selectedEntry = useStoreState(state => state.entries.selectedEntry);
  const setSelectedEntry = useStoreActions(actions => actions.entries.setSelectedEntry);

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get(`http://192.168.43.84:8000/api/vehicle/${id}`)
      setSelectedEntry(response.data)      
    }
    fetchData();
  }, [])

  const { Meta } = Card;

  return (
    <Row gutter={32}>
      <Col span={12}>
        <Card
          style={{ width: 500 }}
          bodyStyle={{ padding: '12px 24px 24px 24px' }}
          cover={<img alt="example" src="http://www.bpiautoloans.com/assets/uploads/New-plates.jpg" />}
        >
          <Meta title={id} description="Gate 2 - Crame" style={{textAlign: 'center'}}/>
        </Card>
      </Col>
      <Col span={12}>
        <Descriptions title="Vehicle Info" layout="vertical" bordered>
          <Descriptions.Item label="Status"><Tag color="red">{selectedEntry.status}</Tag></Descriptions.Item>
          <Descriptions.Item label="Plate Number">{selectedEntry.plate_number}</Descriptions.Item>
          <Descriptions.Item label="Make">{selectedEntry.make}</Descriptions.Item>
          <Descriptions.Item label="Model">{`${selectedEntry.model} ${selectedEntry.year}`}</Descriptions.Item>
          <Descriptions.Item label="Color">{selectedEntry.color}</Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  )
}

export default Detail;