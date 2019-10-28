import * as React from 'react';

import './index.css';

import { Layout, Row, Col, Icon, Divider, Tabs } from 'antd';

const { Header, Content } = Layout;
const { TabPane } = Tabs;

export interface Props {
    
}

export interface State {
    sortList: Array<any>,
    business: Array<any>
}

export default class FirstPage extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            sortList: [
                {
                    id: 0,
                    name: '销售货品排名',
                    data: [
                        {
                            id: 0,
                            name: '毛巾',
                            money: '1229.0'
                        },
                        {
                            id: 0,
                            name: '皮鞋',
                            money: '1009.0'
                        }
                    ]
                },
                {
                    id: 1,
                    name: '销售业绩排名'
                },
                {
                    id: 2,
                    name: '客户销量排名'
                }
            ],
            business: [
                {
                    icon: 'laptop',
                    title: '采购入库'
                },
                {
                    icon: 'laptop',
                    title: '采购退货'
                },
                {
                    icon: 'laptop',
                    title: '销售订单'
                },
                {
                    icon: 'laptop',
                    title: '销售出库单'
                }
            ]
        }
    }

    render() {
        const { sortList } = this.state;

        return (
            <section className="first-page">
                <Row>
                    <Col span={10} offset={1}>
                        <Layout className="first-page__block">
                            <Header className="first-page__header">
                                <Tabs className="first-page__block-tab">
                                {
                                    sortList.map((item, index) => {
                                        return <TabPane tab={item.name} key={index.toString()}>
                                            {/* {
                                                item.data.map(v => {
                                                    return <Row key={v.id}>
                                                        <Col span={2}>
                                                            {v.id + 1}
                                                        </Col>
                                                        <Col span={12}>
                                                            {v.name}
                                                        </Col>
                                                        <Col span={10}>
                                                            {v.money}
                                                        </Col>
                                                    </Row>
                                                })
                                            } */}
                                            <Row>
                                                <Col span={2}>
                                                    1
                                                </Col>
                                                <Col span={12}>
                                                    毛巾
                                                </Col>
                                                <Col span={10}>
                                                    200
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    })
                                }
                                </Tabs>
                            </Header>
                        </Layout>
                    </Col>
                    <Col span={10} offset={1}>
                        <Layout className="first-page__block">
                            <Header className="first-page__header">常用功能</Header>
                            <Content>
                                <ul className="first-page">
                                    {
                                        this.state.business.map((item, index) => {
                                            return <li key={index}><Icon type={item.icon} />{item.name}</li>
                                        })
                                    }
                                </ul>
                            </Content>
                        </Layout>
                    </Col>
                </Row>
                <Row>
                    <Col span={10} offset={1}>
                        <Layout className="first-page__block">
                            
                        </Layout>
                    </Col>
                    <Col span={10} offset={1}>
                        <Layout className="first-page__block">
                            
                        </Layout>
                    </Col>
                </Row>
            </section>
        )
    }
}