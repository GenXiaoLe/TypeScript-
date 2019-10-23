import React from 'react';
import logo from './logo.svg';
import { Layout, Row, Col, Menu, Icon } from 'antd';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import MainRoute from './page/main';
import Home from './page/home/index';
import Goods from './page/basic/goods';
import Tree from './component/tree/tree';

const { SubMenu } = Menu;
const { Sider, Header, Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <section className="App">
        <Row style={{height: '100%'}}>
          <Col span={4} className="sider">
            <Layout>
              <Header className="sider__logo">
                <img src={logo} className="sider__logo--small" alt="logo" />
              </Header>
              <Content>
                <Tree data={[
                  {id: 1, name: 'nav1', parent_id: 0, icon: 'user'},
                  {id: 2, name: 'nav2', parent_id: 0, icon: 'laptop'},
                  {id: 3, name: 'nav1-1', parent_id: 1},
                  {id: 4, name: 'goods', parent_id: 1, link: '/layout/goods'},
                  {id: 5, name: 'home', parent_id: 1, link: '/layout/home'},
                  {id: 6, name: 'nav2-1', parent_id: 2},
                  {id: 7, name: 'nav2-2', parent_id: 2},
                ]} />
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
