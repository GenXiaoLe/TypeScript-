import React from 'react';
import logo from './logo.svg';
import { Layout, Row, Col } from 'antd';
import './App.css';
import Tree from './component/tree/menuTree';
import Nav from './component/nav';
import RouteMain from './routers/main';

const { Header, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <section className="App">
        <Row style={{height: '100%'}}>
          <Col span={3} className="sider">
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
                  {id: 5, name: 'payment', parent_id: 1, link: '/layout/payment'},
                  {id: 6, name: 'count', parent_id: 2, link: '/layout/count'},
                  {id: 7, name: 'nav2-2', parent_id: 2},
                ]} />
              </Content>
            </Layout>
          </Col>
          <Col span={21} className="content">
            <Layout>
              <Header className="content__header">
                <Row className="content__header-title">
                  <Col span={8}>
                    <span>JXC企业</span>
                  </Col>
                  <Col span={8} offset={8}>
                    <span>设置中心</span>
                  </Col>
                </Row>
                <Row className="content__header-nav">
                  <Nav />
                </Row>
              </Header>
              <Content className="content__body">
                <RouteMain />
              </Content>
            </Layout>
          </Col>
        </Row>
        
      </section>
    );
  }
}

export default App;
