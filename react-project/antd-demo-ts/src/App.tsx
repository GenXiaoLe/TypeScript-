import React from 'react';
import logo from './logo.svg';
import { Layout, Row, Col, Menu, Icon, Mention } from 'antd';
import './App.css';

const { SubMenu } = Menu;
const { Sider, Header, Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <section className="App">
        <Row>
          <Col span={4}>
            <Layout>
              <Header className="sider__logo">
                <img src={logo} className="sider__logo--small" alt="logo" />
              </Header>
              <Content>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}>
                  <SubMenu
                    key="1"
                    title={<span>
                      <Icon type="user" />
                      subnav 1
                    </span>}>
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="2"
                    title={<span>
                      <Icon type="user" />
                      subnav 2
                    </span>}>
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                </Menu>
              </Content>
            </Layout>
          </Col>
          <Col span={20}>
            <Layout>
              <Header className="header">
                <Col span={8}>
                  <span>JXC企业</span>
                </Col>
                <Col span={8} offset={8}>
                  <span>设置中心</span>
                </Col>
              </Header>
              <Content className="content">
                content
              </Content>
            </Layout>
          </Col>
        </Row>
        
      </section>
    );
  }
}

export default App;
