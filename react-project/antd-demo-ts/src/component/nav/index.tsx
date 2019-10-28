import * as React from 'react';
import { Layout, Row, Col, Menu, Icon, Table, Divider, Tag } from 'antd';
import { Link } from 'react-router-dom';

import './index.css';

export interface Props {
    
}

export interface State {
    navList: Array<any>
}

export default class Nav extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            navList: []
        }
    }

    delete = (index: number) => {

    }

    toLink = (index: number) => {

    }

    render() {
        const { navList } = this.state;

        return (
            <section className="nav">
                <Layout className="nav__content">
                    <Row>
                        <Col span={2} className="nav__item nav__item--selected">
                            <Link to="/layout" className="nav__item-word">首页</Link>
                        </Col>
                        {/* {
                            navList.map((item, index) => {
                                return <Col span={2} key={index}>
                                    <span onClick={this.toLink.bind(this, index)}><Link to="">{item.name}</Link></span>
                                    <span onClick={this.delete.bind(this, index)}>x</span>
                                </Col>
                            })
                        } */}
                    </Row>
                </Layout>
                
            </section>   
        )
    }
}