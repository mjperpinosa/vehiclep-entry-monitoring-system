import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';


const Stat = props  => {

  return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Total Vehicles Entered"
              value={11}
              // precision={2}
              valueStyle={{ color: '#3f8600' }}
              // prefix={<Icon type="arrow-up" />}
              suffix=""
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Tagged Vehicles"
              value={9}
              // precision={2}
              valueStyle={{ color: '#cf1322' }}
              // prefix={<Icon type="arrow-down" />}
              suffix=""
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Stat;