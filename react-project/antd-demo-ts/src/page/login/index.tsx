import React from 'react';
import '../../assets/css/login.css';
import { Icon, Input, Button, Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

export default class Login extends React.Component {
    render() {
        return(
            <section>
                <Header className="header__title">
                    <h1>login</h1>
                </Header>
                <Content>
                    <Row>
                        <Col span="4" offset="10">
                            <Row className="login__input">
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                            </Row>
                            <Row className="login__input">
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                            </Row>
                            <Row>
                                <Button type="primary" className="login__button">
                                    <Link to="/layout">login</Link>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Content>
            </section>
        )
    }
}