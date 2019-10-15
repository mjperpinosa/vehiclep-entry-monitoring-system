import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const Page = props => {
  const { pathname } = props.history.location
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" style={{minHeight: '100vh'}} defaultSelectedKeys={[pathname]}>
          <Menu.Item key="/dashboard">
            <Icon type="user" />
            <span className="nav-text">Dashboard</span>
            <Link to="/dashboard" />
          </Menu.Item>
          <Menu.Item key="/captures">
            <Icon type="video-camera" />
            <span className="nav-text">Entries</span>
            <Link to="/captures" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>PNP ITMS ©2019 Created by Neurocyton</Footer>
      </Layout>
    </Layout>
  );
}
export default Page;