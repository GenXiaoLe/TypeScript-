import React from 'react';
import logo from './logo.svg';
import { Layout, Row, Col, Menu, Icon } from 'antd';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import MainRoute from './page/main';
import { Home } from './page/home/index';
import Goods from './page/basic/goods';

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
                    <Menu.Item key="2"><Link to="/layout/goods">goods</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/layout/home">home</Link></Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="2"
                    title={<span>
                      <Icon type="user" />
                      subnav 2
                    </span>}>
                    <Menu.Item key="5">option1</Menu.Item>
                    <Menu.Item key="6">option2</Menu.Item>
                    <Menu.Item key="7">option3</Menu.Item>
                    <Menu.Item key="8">option4</Menu.Item>
                  </SubMenu>
                </Menu>
              </Content>
            </Layout>
          </Col>
          <Col span={20}>
            <Layout>
              <Header className="header">
                <Row>
                  <Col span={8}>
                    <span>JXC企业</span>
                  </Col>
                  <Col span={8} offset={8}>
                    <span>设置中心</span>
                  </Col>
                </Row>
              </Header>
              <Content className="content">
                <Switch>
                    <Route path="/layout/home" component={Home}/>
                    <Route path="/layout/goods" component={Goods}/>
                </Switch>
              </Content>
            </Layout>
          </Col>
        </Row>
        
      </section>
    );
  }
}

export default App;
