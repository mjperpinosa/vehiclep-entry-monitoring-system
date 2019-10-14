import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Descriptions, Tag } from 'antd';
import { VEHICLE_STATUS } from '../../constants';

const Detail = props  => {
  const { id } = useParams();
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
          <Descriptions.Item label="Status"><Tag color="red">{VEHICLE_STATUS.CODING}</Tag></Descriptions.Item>
          <Descriptions.Item label="Plate Number">{id}</Descriptions.Item>
          <Descriptions.Item label="Make">Toyota</Descriptions.Item>
          <Descriptions.Item label="Model">Model 2019</Descriptions.Item>
          <Descriptions.Item label="Color">Black</Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  )
}

export default Detail;