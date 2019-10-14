import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const Page = props => {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Icon type="user" />
            <Link to="/dashboard"><span className="nav-text" style={{color: 'white'}}>Dashboard</span></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <Link to="/captures"><span className="nav-text" style={{color: 'white'}}>Captures</span></Link>
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